<template>
  <div class="getTotheshop_main">
    <mt-twolevelpage-gettotheshop-main-goods :listoner ="n" v-for="(n,index) in listonet"></mt-twolevelpage-gettotheshop-main-goods>
  </div>
</template>

<script>
    import MtTwolevelpageGettotheshopMainGoods from "./mtTwolevelpageGettotheshopMainGoods";
    export default {
        name: "MtTwolevelpageGettotheshopMain",
      components: {MtTwolevelpageGettotheshopMainGoods},
      props:["listonet"]
    }
</script>

<style scoped>
  .getTotheshop_main {
    height: 0.65rem;
    display: -webkit-flex;
    overflow-x: scroll;
    overflow-y: hidden; }

  .getTotheshop_main::-webkit-scrollbar {
    display: none; }
</style>
