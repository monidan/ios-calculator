<template>
  <div id="calculator">
      <v-row>
        <result-field>

        </result-field>
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
    }
  },
  components: {
    BaseButton,
    ResultField
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
    handleCalcClick(obj){
      if(this.isResultFieldEmpty()){
        console.log(obj)
      }
    },
    isResultFieldEmpty() {
      if(document.querySelector('.calc-result__inner_text').value === '0'){
        return true
      }
      return false;
    }
  },
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
</style>