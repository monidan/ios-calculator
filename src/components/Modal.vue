<template>
  <div id="calc-modal">
    <p>
      <slot></slot>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Modal',
}
</script>
<style lang="scss">
  #calc-modal{
    text-align: center;
    display: block;
    position: absolute;
    z-index: 10;
    padding: 1rem 10rem;

    color: white;
    border-radius: 20px;
    left: 1%;
    transform: translateY(30%);

    font-size: 1.5rem;
    font-weight: 200;

    p{
      margin: 0;
    }
  }
</style>