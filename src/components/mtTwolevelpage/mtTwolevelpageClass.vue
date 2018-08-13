<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="twoPageclassification">
          <div class="fiveClass">
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass1.png"/>
              <span>美食</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass2.png"/>
              <span>美团超市</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass3.png"/>
              <span>生鲜果蔬</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass4.png"/>
              <span>鸭脖卤味</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass5.png"/>
              <span>下午茶</span>
            </a>
          </div>
          <div class="fiveClass">
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass6.png"/>
              <span>炸鸡零食</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass7.png"/>
              <span>快食简餐</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass8.png"/>
              <span>家常菜</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass9.png"/>
              <span>异国料理</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass10.png"/>
              <span>麻辣烫冒菜</span>
            </a>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="twoPageclassification">
          <div class="fiveClass">
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass11.png"/>
              <span>包子粥铺</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass12.png"/>
              <span>凉皮肉夹馍</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass13.png"/>
              <span>浪漫鲜花</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass14.png"/>
              <span>甜蜜蛋糕</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass15.png"/>
              <span>到店自取</span>
            </a>
          </div>
          <div class="fiveClass">
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass16.png"/>
              <span>跑腿代购</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass17.png"/>
              <span>美团专送</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass18.png"/>
              <span>送药上门</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass19.png"/>
              <span>无辣不欢</span>
            </a>
            <a class="rowClass" href="#">
              <img src="../../assets/img/sunTwoPageclass20.png"/>
              <span>全部分类</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" style="bottom: -20px;"></div>
  </div>
</template>

<script>
    import Swiper from"swiper/dist/js/swiper";
    export default {
      name: "mtTwolevelpageClass",
      mounted(){
        new Swiper (".swiper-container", {
          pagination:{
            el:".swiper-pagination"
          },
          // loop: true,
          // autoplay:true,
        })
      }
    }
</script>

<style scoped>
  .swiper-container {
    width: 3.75rem;
    height: 1.88rem;
    margin-bottom: 0.05rem; }

  .twoPageclassification {
    width: 100%;
    height: 1.88rem;
    display: -webkit-flex;
    flex-direction: column; }

  .fiveClass {
    width: 100%;
    padding-top: 0.15rem;
    box-sizing: border-box;
    display: -webkit-flex;
    justify-content: space-around; }

  .rowClass {
    width: 20%;
    display: -webkit-flex;
    align-items: center;
    flex-direction: column; }
  .rowClass img {
    width: 0.44rem;
    height: 0.44rem;
    margin-bottom: 0.08rem; }
  .rowClass span {
    font-size: 0.11rem;
    color: #666666; }
</style>
