<template>
  <div class="chooseForyou_main_rowT">
    <div class="chooseForyou_main_rowR">
      <img src="../../assets/img/sunTwoPageForyoupic3.png"/>
      <p></p>
      <p>
        <span>优选菜品</span>
        <span>为您选择最好的</span>
      </p>
    </div>
    <div class="chooseForyou_main_rowR">
      <img src="../../assets/img/sunTwoPageForyoupic4.png"/>
      <p></p>
      <p>
        <span>优选菜品</span>
        <span>为您选择最好的</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MtTwolevelpageChooseforyouMainTwo"
    }
</script>

<style scoped>
  .chooseForyou_main_rowT {
    margin-bottom: 0.1rem;
    display: -webkit-flex;
    justify-content: space-between; }

  .chooseForyou_main_rowR {
    width: 1.72rem;
    height: 1.19rem;
    position: relative; }
  .chooseForyou_main_rowR img {
    width: 1.72rem;
    height: 1.19rem; }
  .chooseForyou_main_rowR p:nth-child(2) {
    width: 1.72rem;
    height: 1.19rem;
    background: #000;
    opacity: 0.2;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0; }
  .chooseForyou_main_rowR p:nth-child(3) {
    width: 1.52rem;
    height: 0.45rem;
    background: #fff;
    z-index: 2;
    opacity: 0.95;
    border-radius: 0.02rem;
    position: absolute;
    left: 0.1rem;
    bottom: 0.08rem;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; }
  .chooseForyou_main_rowR p:nth-child(3) span:first-child {
    line-height: 0.2rem;
    font-weight: 600;
    font-size: 0.15rem;
    color: #333; }
  .chooseForyou_main_rowR p:nth-child(3) span:last-child {
    font-size: 0.1rem;
    color: #666; }
</style>
