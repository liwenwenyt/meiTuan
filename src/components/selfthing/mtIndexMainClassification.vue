<template>
  <div class="classification">
    <mt-index-main-classification-five></mt-index-main-classification-five>
    <mt-index-main-classificstion-ten></mt-index-main-classificstion-ten>
  </div>

</template>

<script>
    import MtIndexMainClassificationFive from "./mtIndexMainClassificationFive";
    import MtIndexMainClassificstionTen from "./mtIndexMainClassificstionTen";
    export default {
        name: "mtIndexMainClassification",
      components: {MtIndexMainClassificstionTen, MtIndexMainClassificationFive}
    }
</script>

<style scoped>
  .classification {
    width: 100%;
    padding: 0 0.07rem;
    margin-bottom: 0.1rem;
    box-sizing: border-box;
    background: #fff;
    display: -webkit-flex;
    flex-direction: column; }
</style>
