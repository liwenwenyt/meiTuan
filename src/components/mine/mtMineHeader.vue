<template>
  <div>
  <header>
    <div class="header_left">
      <i class="iconfont icon-shezhi"></i>
    </div>
    <div class="header_right">
      <i class="iconfont icon-wsmp-theme"></i>
      <i class="iconfont icon-youjian"></i>
    </div>
  </header>
  <div class="myvip">
    <img src="../../assets/img/wyvip.png"/>
  </div>
  </div>
</template>

<script>
    export default {
        name: "mtMineHeader"
    }
</script>

<style scoped>
  header {
    width: 100%;
    height: 0.44rem;
    background: #25aeb4;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
    padding-left: 0.18rem;
    padding-right: 0.19rem;
    box-sizing: border-box; }

  .header_left {
    display: -webkit-flex; }
  .header_left i {
    font-size: 0.23rem;
    color: #fff; }

  .header_right {
    display: -webkit-flex; }
  .header_right i {
    font-size: 0.23rem;
    color: #fff; }

  .header_right i:nth-child(1) {
    margin-right: 0.3rem; }
  .myvip {
    width: 100%;
    height: 1rem; }
  .myvip img {
    width: 100%;
    height: 1rem; }
</style>
