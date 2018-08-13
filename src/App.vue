<template>
  <div id="app">
    <!--<mt-index></mt-index>-->
    <!--<mt-twolevelpage></mt-twolevelpage>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import MtIndex from "./pages/mtIndex"
  import MtTwolevelpage from "./pages/mtTwolevelpage";
  import MtShopCarts from "./pages/mtShopCarts";
  import MtDiscover from "./pages/mtDiscover";
  import mtDingdan from "./pages/xygPage";
  export default {
    components: {MtTwolevelpage,
      MtIndex,
      MtShopCarts,
      MtDiscover,
      mtDingdan
     }
  }
</script>

<style>
#app{
  width:100%;
  height:100%;
}
</style>
