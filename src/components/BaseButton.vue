<template>
  <button class="calc-button"
          @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'Button',
  methods: {
    // handleClick() {
    //   this.$emit('')
    // }
  }
}
</script>
<style lang="scss">
  .calc-button{
    width: 100%!important;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgb(61, 56, 55);
    color: white;
    padding: 2rem 0;
    border: 1px solid rgba(255, 255, 255, .3);
  }
</style>