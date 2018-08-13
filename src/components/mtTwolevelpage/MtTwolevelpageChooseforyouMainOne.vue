<template>
  <div class="chooseForyou_main_rowO">
    <div class="chooseForyou_main_rowLeft">
      <img src="../../assets/img/sunTwoPageForyoupic2.png"/>
      <img src="../../assets/img/sunTwoPageForyoupic1.png"/>
      <span>小朦胧 (高新万...</span>
      <span>附近热卖商家</span>
    </div>
    <div class="chooseForyou_main_rowLeft">
      <img src="../../assets/img/sunTwoPageForyoupic6.png"/>
      <img src="../../assets/img/sunTwoPageForyoupic5.png"/>
      <span>橘猫肉多多</span>
      <span>附近热卖商家</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MtTwolevelpageChooseforyouMainOne"
    }
</script>

<style scoped>
  .chooseForyou_main_rowO {
    margin-bottom: 0.1rem;
    display: -webkit-flex;
    justify-content: space-between; }

  .chooseForyou_main_rowLeft {
    width: 1.72rem;
    display: -webkit-flex;
    flex-direction: column;
    position: relative; }
  .chooseForyou_main_rowLeft img:nth-child(1) {
    width: 1.71rem;
    height: 0.83rem;
    border: 1px solid #e4e4e4; }
  .chooseForyou_main_rowLeft img:nth-child(2) {
    position: absolute;
    top: 0.63rem;
    left: 0.08rem;
    width: 0.4rem;
    height: 0.4rem;
    box-shadow: 0 0 0.05rem #ebebeb; }
  .chooseForyou_main_rowLeft span:nth-child(3) {
    text-indent: 0.55rem;
    line-height: 0.22rem;
    font-size: 0.13rem;
    color: #333333;
    font-weight: 600; }
  .chooseForyou_main_rowLeft span:nth-child(4) {
    line-height: 0.23rem;
    font-size: 0.1rem;
    color: #666;
    text-indent: 0.1rem; }
</style>
