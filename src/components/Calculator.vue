<template>
  <div id="calculator">
      <v-row>
        <result-field>

        </result-field>
      </v-row>
      <v-row class="calc-buttons">
        <base-button v-for="icon in buttonIcons"
                     :key="icon"
                     :class="{'zero-button': icon === '0'}">
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
        '7', '8', '9', 'x',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '='
        ],
    }
  },
  components: {
    BaseButton,
    ResultField
  },
  methods: {
    // TODO : picking right color 
    pickColor(icon) {
      const greyIcons = this.buttonIcons.slice(0, 2);
      const orangeIcons = this.buttonIcons.filter(icon => {
        typeof Number(icon) !== 'number' &&  icon !== '.'
      })
      const blackIcons = this.buttonIcons.filter(icon => {
        typeof Number(icon) === 'number' || icon === '.' 
      })
      console.table(greyIcons, orangeIcons, blackIcons, icon)
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
  .calc-buttons{
    display: grid!important;
    grid-template-columns: repeat(4, 25%)!important;
  }

  .zero-button{
    grid-column: 1/3;
  }
</style>