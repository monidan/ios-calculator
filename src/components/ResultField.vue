<template>
  <div class="calc-result">
    <div class="calc-result__inner" title="Click to copy result" @click="copyResult">
      <input type="text" id='calc-input' class="calc-result__inner_text" 
             v-model="$store.state.result"
             readonly> 
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResultField',
  methods: {
    copyResult() {
      const inputEl = document.querySelector('#calc-input')

      inputEl.select();
      document.execCommand('copy')
      this.$emit('copied');
    },
  },
}
</script>
<style lang="scss">
  .calc-result{
    width: 100%;
    padding: 2rem 0;
    background-color: black;

    color: white;
  }

  .calc-result__inner{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    cursor: pointer;

    .calc-result__inner_text::-webkit-outer-spin-button,
    .calc-result__inner_text::-webkit-inner-spin-button{
      -webkit-appearance: none!important;
    }

    .calc-result__inner_text{
      color: white;
      cursor: pointer;
      outline: none;
      caret-color: transparent;

      text-align: right;
      width: 95%;
      margin: 0 auto!important;
    }
  }

  #calc-input::selection{
    background-color: rgba(white, .1);
  }
</style>