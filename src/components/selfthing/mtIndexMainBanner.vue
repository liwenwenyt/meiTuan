<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../assets/img/sunBanner1.png"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/img/sunBanner2.png"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/img/sunBanner3.png"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/img/sunBanner4.png"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/img/sunBanner5.png"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/img/sunBanner3.png"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" style="bottom: -17px;"></div>
  </div>
</template>

<script>
    import Swiper from"swiper/dist/js/swiper";
    export default {
      name: "mtIndexMainBanner",
      mounted(){
        new Swiper (".swiper-container", {
          pagination:{
            el:".swiper-pagination"
          },
          loop: true,
          autoplay:true,
        })
      }
    }
</script>

<style scoped>
  .swiper-container {
    width: 3.75rem;
    height: 1rem; }

  .swiper-slide img {
    width: 3.75rem;
    height: 1rem; }
</style>
