<template>
  <div class="swiper_box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/img/wyswiper01.png"/>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/wyswiper02.png"/>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"  style="bottom:-0.2rem"></div>
    </div>
  </div>
</template>

<script>
    import Swiper from 'swiper/dist/js/swiper'
    export default {
      name: "mtMineSwiper",
      mounted(){
        new Swiper (".swiper-container", {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
          autoplay:true,
        })
      }
    }
</script>
<style scoped>
  .swiper_box {
    width: 100%;
    height: 0.95rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    box-sizing: border-box;
    background: #fff;
    display: -webkit-flex;
    align-items: center;
  }

  .swiper_box img {
    width: 3.33rem;
    height: 0.72rem; }
</style>
