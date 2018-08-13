<template>
  <div class="discountArea">
    <div class="discountArea_title">
      <p>优惠专区</p>
    </div>
    <div class="discountArea_pic">
      <div class="discountAreaPic_top">
        <img src="../../assets/img/sunTwoPageDiscountpic1.png"/>
        <img src="../../assets/img/sunTwoPageDiscountpic2.png"/>
      </div>
      <div class="discountAreaPic_bot">
        <img src="../../assets/img/sunTwoPageDiscountpic3.png"/>
        <img src="../../assets/img/sunTwoPageDiscountpic4.png"/>
        <img src="../../assets/img/sunTwoPageDiscountpic5.png"/>
        <img src="../../assets/img/sunTwoPageDiscountpic6.png"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtTwolevelpageDiscountArea"
    }
</script>

<style scoped>
  .discountArea {
    width: 100%;
    padding: 0 0.1rem;
    box-sizing: border-box;
    display: -webkit-flex;
    flex-direction: column; }

  .discountArea_title {
    display: -webkit-flex;
    align-items: center; }
  .discountArea_title p {
    line-height: 0.43rem;
    font-size: 0.19rem;
    color: #1c1c1c;
    font-weight: 600; }

  .discountArea_pic {
    display: -webkit-flex;
    flex-direction: column; }

  .discountAreaPic_top {
    display: -webkit-flex;
    justify-content: space-between; }
  .discountAreaPic_top img {
    width: 1.75rem;
    height: 1.10rem; }

  .discountAreaPic_bot {
    margin: 0.05rem 0;
    display: -webkit-flex;
    justify-content: space-between; }
  .discountAreaPic_bot img {
    width: 0.85rem;
    height: 1.10rem; }
</style>
