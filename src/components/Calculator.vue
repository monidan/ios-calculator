<template>
  <div id="calculator">
      <transition name="modal">
        <modal v-if="isTextCopied" class="copy-state-modal">
          Copied!
        </modal>
      </transition>
      <v-row>
        <result-field @copied='handleCopyAction'></result-field>
      </v-row>
      <v-row class="calc-buttons">
        <base-button v-for="icon in buttonIcons"
                     :key="icon"
                     :class="[{'zero-button': icon === 0}, pickColor(icon)]"
                     @calc-click='handleCalcClick'>
          {{ icon }}
        </base-button>
      </v-row>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import ResultField from '@/components/ResultField.vue'
import Modal from '@/components/Modal.vue'
import {mapMutations} from 'vuex';

export default {
  name: 'Calculator',
  data() {
    return {
      buttonIcons: [
        'AC', '+/-', '%', '÷',
        7, 8, 9, 'x',
        4, 5, 6, '-',
        1, 2, 3, '+',
        0, '.', '='
        ],
        isTextCopied: false,
    }
  },
  components: {
    BaseButton,
    ResultField,
    Modal
  },
  methods: {
    pickColor(icon) {
      const sortedIcons = {};

      sortedIcons.greyIcons = this.buttonIcons.slice(0, 3);
      sortedIcons.orangeIcons = this.buttonIcons.filter(icon => {
        return typeof icon !== 'number' &&  icon !== '.'
      });
      sortedIcons.blackIcons = this.buttonIcons.filter(icon => {
        return typeof icon === 'number' || icon === '.' 
      });

      for(let icons in sortedIcons){
        if(sortedIcons[icons].includes(icon)){
          return icons.toString().split('Icons')[0] + '-button'
        }
      }
    },
    handleCopyAction(){
      this.isTextCopied = !this.isTextCopied;
      setTimeout(() => this.isTextCopied = !this.isTextCopied, 1500);
    },
    handleCalcClick(icon){
      const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            countSigns = ['÷', 'x', '-', '+', '=', '%'],
            otherButtons = ['AC', '+/-', '.'];
      let iconType = '';

      if(numbers.includes(icon))
        iconType = 'number'
      if(countSigns.includes(icon))
        iconType = 'countSign'
      if(otherButtons.includes(icon))
        iconType = 'otherButtons'

      switch(iconType){
        case 'number': {
          const actionButtons = document.querySelectorAll('.orange-button')
          actionButtons.forEach(button => button.classList.remove('calc-button-active'))
          this.$store.commit('writeNumberToResult', icon)
          break;
        }
        case 'countSign': { 
          if(countSigns.slice(0, 4).includes(icon)){
            const actionButtons = document.querySelectorAll('.orange-button')
            actionButtons.forEach(button => {
              if(button.innerHTML.trim() === icon){
                button.classList.add('calc-button-active')
              } else {
                button.classList.remove('calc-button-active')
              }
            })
            this.$store.commit('changeCurrentMathAction', icon);
          } else {
            switch(icon) {
              case '=': {
                const actionButtons = document.querySelectorAll('.orange-button')
                actionButtons.forEach(button => button.classList.remove('calc-button-active'))
                this.$store.dispatch('solve');
                break;
              }
              case '%': {
                this.$store.commit('calculatePercentage');
                break;
              }
            }
          }
          break;
        }
        case 'otherButtons': {
          switch(icon){
            case 'AC': {
              this.$store.commit('clearResult')
              const actionButtons = document.querySelectorAll('.orange-button')
              actionButtons.forEach(button => button.classList.remove('calc-button-active'))
              break;
            }
            case '+/-': {
              this.$store.commit('changeNumberSign');
              break;
            }
            case '.': {
              this.$store.commit('addFloatingPoint');
              break;
            }
          }
          break;
        }
        default:{
          console.trace('default value')
          break;
        }
      }
    },
  },
  ...mapMutations([
    'changeCurrentMathAction',
    'writeNumberToResult',
    'clearResult',
    'changeNumberSign',
    'addFloatingPoint',
    'calculatePercentage'
  ]),
  mounted() {
    const resultField = document.querySelector('.calc-result')
    const calcButtons = document.querySelector('.calc-buttons');

    calcButtons.style.height = `calc(100vh - ${window.getComputedStyle(resultField).height})`;
  }
}
</script>

<style lang="scss">
  #calculator{
    background-color: #000;
  }

  .calc-buttons{
    display: grid!important;
    grid-template-columns: repeat(4, calc(25% - .75rem))!important;
    gap: 1rem;
  }

  .zero-button{
    grid-column: 1/3;
  }

  .copy-state-modal{
    background-color: rgba(34,139,34, .6);
  }

  .modal-enter-active{
    transition: all .5s ease-in-out;
  }
  .modal-leave-active{
    transition: all .5s ease-in-out;
  }
  .modal-enter, .modal-leave-to{
    transform: translateY(-120%)!important;
  }

</style>