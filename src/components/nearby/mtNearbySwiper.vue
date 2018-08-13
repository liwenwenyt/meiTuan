<template>
  <div class="swiper_box">
    <div class="swiper-containerb">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/img/wybanner01.png"/>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/wybanner02.png"/>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/wybanner03.png"/>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-paginationa" style="top:1rem"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper/dist/js/swiper'
    export default {
      name: "mtNearbySwiper",
      mounted(){
        var mySwiper = new Swiper ('.swiper-containerb', {
          // loop: true,
          autoplay:true,
          loop:true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }

    }
</script>

<style scoped>
  .swiper_box{
    width: 100%;
    height: 1rem;
    display: flex;
    overflow: hidden;
  }

  .swiper-containerb img{
    width: 100%;
    height: 1rem;
    border-radius: 0.2rem;
  }

</style>
