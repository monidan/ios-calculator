<template>
  <div class="calc-result">
    <div class="calc-result__inner">
      <p class="calc-result__inner_text">
        {{result}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResultField',
  data() {
    return {
      result: 0
    }
  },
  methods: {
    // copyResult() {

    // }
  }
}
</script>
<style lang="scss">
  .calc-result{
    width: 100%;
    padding: .5rem 0;

    background-color: rgba(138, 138, 138, 0.7);
    box-shadow: inset 1px -1px 1px white;

    color: white;
  }

  .calc-result__inner{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > p{
      margin: 0!important;
      padding: 0 .5rem;
    }
  }
</style>