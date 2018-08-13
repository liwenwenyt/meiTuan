<template>
  <div class="chooseForyou_title">
    <p class="chooseForyou_titleH">为你优选</p>
    <div class="chooseForyou_title_more">
      <span>更多</span>
      <img src="img/sunTwoPagemorejiantou.png"/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtTwolevelpageChooseforyouTitle"
    }
</script>

<style scoped>
  .chooseForyou_title {
    display: -webkit-flex;
    justify-content: space-between; }

  .chooseForyou_titleH {
    line-height: 0.43rem;
    font-size: 0.19rem;
    color: #1c1c1c;
    font-weight: 600; }

  .chooseForyou_title_more {
    display: -webkit-flex; }
  .chooseForyou_title_more span {
    line-height: 0.35rem;
    font-size: 0.11rem;
    color: #666666;
    margin-top: 0.09rem; }
  .chooseForyou_title_more img {
    width: 0.1rem;
    height: 0.12rem;
    margin-top: 0.19rem; }
</style>
