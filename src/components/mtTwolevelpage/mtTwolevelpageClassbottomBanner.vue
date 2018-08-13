<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/img/sunbanner1.png"/>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/sunbanner2.png"/>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/sunbanner3.png"/>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/sunbanner4.png"/>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/sunbanner5.png"/>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/sunbanner3.png"/>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" style="bottom: -20px;"></div>
    </div>
  </div>
</template>

<script>
    import Swiper from"swiper/dist/js/swiper";
    export default {
      name: "mtTwolevelpageClassbottomBanner",
      mounted(){
        new Swiper (".banner", {
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
  .banner {
    width: 3.55rem;
    height: 0.95rem;
    margin: 0 0.1rem;
    margin-bottom: 0.22rem; }

  .banner .swiper-container {
    width: 3.55rem;
    height: 0.95rem; }

  .banner .swiper-container .swiper-wrapper .swiper-slide img {
    width: 3.55rem;
    height: 0.95rem; }

</style>
