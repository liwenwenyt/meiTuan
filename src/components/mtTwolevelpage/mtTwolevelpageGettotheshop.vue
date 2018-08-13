<template>
  <div class="getTotheshop">
    <mt-twolevelpage-gettotheshop-title></mt-twolevelpage-gettotheshop-title>
    <mt-twolevelpage-gettotheshop-main :listonet ="listonex"></mt-twolevelpage-gettotheshop-main>
  </div>
</template>

<script>
  import MtTwolevelpageGettotheshopTitle from "./mtTwolevelpageGettotheshopTitle";
  import MtTwolevelpageGettotheshopMain from "./MtTwolevelpageGettotheshopMain";
  export default {
    components: {MtTwolevelpageGettotheshopMain, MtTwolevelpageGettotheshopTitle},
    props:["listonex"]
  }
</script>

<style scoped>
  .getTotheshop {
    padding-bottom: 0.28rem;
    padding-left: 0.1rem;
    box-sizing: border-box;
    display: -webkit-flex;
    flex-direction: column; }
</style>
