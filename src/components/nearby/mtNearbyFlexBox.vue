<template>
    <div id="boxScroll">
      <mt-nearby-swiper></mt-nearby-swiper>
      <swiper :food="fooda" :life="lifea" :play="playa" :host="hosta" :all="alla"></swiper>
    </div>
</template>

<script>
    import MtNearbySwiper from "./mtNearbySwiper";
    import Swiper from "./swiper";
    export default {
        name: "mtNearbyFlexBox",
      components: {Swiper, MtNearbySwiper},
      props:["fooda","lifea","playa","hosta","alla"]
    }
</script>

<style scoped>
#boxScroll{
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
