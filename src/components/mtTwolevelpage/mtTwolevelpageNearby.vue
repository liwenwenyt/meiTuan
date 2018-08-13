<template>
<div class="nearbyMerchants">
  <mt-twolevelpage-nearby-title></mt-twolevelpage-nearby-title>
  <mt-twolevelpage-nearby-paixu></mt-twolevelpage-nearby-paixu>
  <mt-twolevelpage-nearby-xiding></mt-twolevelpage-nearby-xiding>
  <mt-twolevelpage-nearby-goods :listtwot ="n" v-for="(n,index) in listtwox"></mt-twolevelpage-nearby-goods>
</div>
</template>

<script>
    import MtTwolevelpageNearbyTitle from "./mtTwolevelpageNearbyTitle";
    import MtTwolevelpageNearbyPaixu from "./MtTwolevelpageNearbyPaixu";
    import MtTwolevelpageNearbyXiding from "./MtTwolevelpageNearbyXiding";
    import MtTwolevelpageNearbyGoods from "./MtTwolevelpageNearbyGoods";
    export default {
        name: "mtTwolevelpageNearby",
      components: {
        MtTwolevelpageNearbyGoods,
        MtTwolevelpageNearbyXiding, MtTwolevelpageNearbyPaixu, MtTwolevelpageNearbyTitle},
      props:["listtwox"]
    }
</script>

<style scoped>
  .nearbyMerchants {
    width: 100%;
    padding: 0 0.1rem;
    box-sizing: border-box;
    display: -webkit-flex;
    flex-direction: column; }
</style>
