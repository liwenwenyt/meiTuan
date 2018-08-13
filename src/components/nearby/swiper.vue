<template>
  <div>
    <div class="swiper-container" id="swiper-container2">
      <div class="swiper-wrapper swiper-wrapper1" id="nav">
          <a class="swiper-slide swiper-slide2">
            享美食
          </a>
          <a class="swiper-slide">
            惠生活
          </a>
          <a class="swiper-slide">
            爱玩乐
          </a>
          <a class="swiper-slide">
            住酒店
          </a>
          <a class="swiper-slide">
            全部
          </a>
      </div>
    </div>
    <mt-nearby-hot-nav></mt-nearby-hot-nav>
    <div class="swiper-container2">
        <div class="swiper-wrapper">
            <div class="swiper-slide blue-slide">
              <mt-nearby-box-second :lists="food"></mt-nearby-box-second>
            </div>
            <div class="swiper-slide red-slide">
              <mt-nearby-life-box :listsl="life"></mt-nearby-life-box>
            </div>
            <div class="swiper-slide orange-slide">
              <mt-nearby-play-box :listsp="play"></mt-nearby-play-box>
            </div>
            <div class="swiper-slide red-slide">
              <mt-nearby-host-box :listsh="host"></mt-nearby-host-box>
            </div>
            <div class="swiper-slide orange-slide">
              <mt-nearby-all-box :listsa="all"></mt-nearby-all-box>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper/dist/js/swiper'
  import MtNearbyBoxSecond from "./mtNearbyBoxSecond";
  import MtNearbyLifeBox from "./mtNearbyLifeBox";
  import MtNearbyPlayBox from "./mtNearbyPlayBox";
  import MtNearbyHostBox from "./mtNearbyHostBox";
  import MtNearbyAllBox from "./mtNearbyAllBox";
  import MtNearbyHot from "./mtNearbyHot";
  import MtNearbyHotNav from "./mtNearbyHotNav";
  export default {
    name: "Swiper",
    props:["food","life","play","host","all"],
    components: {
      MtNearbyHotNav,
      MtNearbyHot, MtNearbyAllBox, MtNearbyHostBox, MtNearbyPlayBox, MtNearbyLifeBox, MtNearbyBoxSecond},
    mounted(){
      var mySwiper2 = new Swiper('#swiper-container2',{
        watchSlidesProgress : true,
        watchSlidesVisibility : true,
        slidesPerView : 5,
        on:{
          tap: function(){
            mySwiper3.slideTo( mySwiper2.clickedIndex)
          }
        }
      })
      var mySwiper3 = new Swiper('.swiper-container2',{



      })

      function updateNavPosition(){
        $('#swiper-container2 .active-nav').removeClass('active-nav')
        var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');


        if (!activeNav.hasClass('swiper-slide-visible')) {

          if (activeNav.index()>mySwiper2.activeIndex) {

            var thumbsPerNav = Math.floor(mySwiper2.width/activeNav.width())-1
            mySwiper2.slideTo(activeNav.index()-thumbsPerNav)
          }
          else {

            mySwiper2.slideTo(activeNav.index())
          }
        }
      }

      $(function(){
        $("#swiper-container2 .swiper-wrapper1 .swiper-slide").click(function(){
          $(this).css({"color":"#e5562e","font-size":"0.16rem","font-weight":"600"})
          $(this).siblings().css({"font-size": "0.13rem","color": "#0b0b0b"})
        })
      })

    }

  }


</script>

<style scoped>
  .swiper-container{
    width: 100%;
    display:flex;
    align-items: center;
    background:#fff;
  }
  #swiper-container2{
    height: 0.44rem;
  }
  .swiper-wrapper1{
    text-align: center;
  }

  .swiper-wrapper1 .swiper-slide {
    font-size: 0.13rem;
    color: #0b0b0b;
    margin-left: 0.04rem;
    padding-bottom: 0.10rem;
    padding-top: 0.13rem;
  }
  #swiper-container2 .swiper-slide:nth-child(1) {
    text-align: center;
    font-size: 0.16rem;
    font-weight: 600;
    color: #e5562e;
  }
.swiper-container2{
  overflow: hidden;
}


</style>
