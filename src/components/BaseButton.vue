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
    handleClick() {
      this.$emit('calc-click', {emittedNode: this.$el.childNodes[0]})
    }
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
    border: 1px solid black;

    transition: all .2s ease-in-out;
    outline: none;

    border-radius: 50px;

    &:hover{
      opacity: .85;
    }
  }

  .orange-button{
    background-color: #FE9505;
  }
  .grey-button{
    background-color: #A5A5A5;
  }
  .black-button{
    background-color: #333333 ;
  }
</style>