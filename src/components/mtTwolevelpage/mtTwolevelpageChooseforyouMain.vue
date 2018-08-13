<template>
  <div class="chooseForyou_main">
    <mt-twolevelpage-chooseforyou-main-one></mt-twolevelpage-chooseforyou-main-one>
    <mt-twolevelpage-chooseforyou-main-two></mt-twolevelpage-chooseforyou-main-two>
  </div>
</template>

<script>
    import MtTwolevelpageChooseforyouMainOne from "./MtTwolevelpageChooseforyouMainOne";
    import MtTwolevelpageChooseforyouMainTwo from "./MtTwolevelpageChooseforyouMainTwo";
    export default {
        name: "mtTwolevelpageChooseforyouMain",
      components: {MtTwolevelpageChooseforyouMainTwo, MtTwolevelpageChooseforyouMainOne}
    }
</script>

<style scoped>
  .chooseForyou_main {
    width: 100%;
    display: -webkit-flex;
    flex-direction: column; }
</style>
