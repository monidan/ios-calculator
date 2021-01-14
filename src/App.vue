<template>
  <v-app>
    <Calculator />
  </v-app>
</template>

<script>
import Calculator from '@/components/Calculator.vue'

export default {
  name: 'App',
  components: {
    Calculator
  },
};
</script>

<style lang="scss">
  @font-face {
    font-family: 'Myriad Pro';
    src: url('./fonts/MyriadPro-Regular.otf') format('otf');
  }

  html{
    overflow-y: hidden!important;
  }

  body{
    margin: 0;
    padding: 0;

    font-family: 'Myriad Pro', sans-serif!important;
    font-size: 4.2rem;
    font-weight: 300!important;
  }
  .row{
    margin: 0!important;
  }
</style>