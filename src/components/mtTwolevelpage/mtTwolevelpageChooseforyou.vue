<template>
  <div class="chooseForyou">
    <mt-twolevelpage-chooseforyou-title></mt-twolevelpage-chooseforyou-title>
    <mt-twolevelpage-chooseforyou-main></mt-twolevelpage-chooseforyou-main>
  </div>
</template>

<script>
    import MtTwolevelpageChooseforyouTitle from "./mtTwolevelpageChooseforyouTitle";
    import MtTwolevelpageChooseforyouMain from "./mtTwolevelpageChooseforyouMain";
    export default {
        name: "mtTwolevelpageChooseforyou",
      components: {MtTwolevelpageChooseforyouMain, MtTwolevelpageChooseforyouTitle}
    }
</script>

<style scoped>
  .chooseForyou {
    width: 100%;
    padding: 0 0.1rem;
    margin-bottom: 0.2rem;
    box-sizing: border-box;
    display: -webkit-flex;
    flex-direction: column; }
</style>
