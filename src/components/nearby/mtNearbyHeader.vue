<template>
  <header>
    <div class="header_left">
      <i class="iconfont icon-dingweiweizhi"></i>
      <span>丈八北路</span>
      <i class="iconfont icon-xiala"></i>
    </div>
    <div class="header_right">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" value="找附近的吃喝玩乐"/>
    </div>
  </header>
</template>

<script>
    export default {
        name: "mtNearbyHeader"
    }
</script>

<style scoped>
  header {
    width: 100%;
    height: 0.44rem;
    display: -webkit-flex;
    background: #fff;
    align-items: center;
    padding-left: 0.12rem;
    padding-right: 0.12rem;
    box-sizing: border-box; }

  .header_left {
    display: -webkit-flex;
    align-items: center; }
  .header_left .icon-dingweiweizhi {
    font-size: 0.15rem;
    color: #a8aeb5; }
  .header_left .icon-xiala {
    font-size: 0.20rem;
    color: #333333; }
  .header_left span {
    font-size: 0.15rem;
    color: #424242;
    margin-left: 0.03rem; }

  .header_right {
    display: -webkit-flex;
    position: relative;
    align-items: center;
    margin-left: 0.12rem; }
  .header_right i {
    font-size: 0.15rem;
    position: absolute;
    left: 0.52rem;
    color: #8e8e93; }
  .header_right input {
    width: 2.40rem;
    height: 0.3rem;
    border-radius: 0.15rem;
    outline: none;
    font-size: 0.12rem;
    color: #666666;
    /*text-align: center;*/
    border: none;
    text-indent: 0.7rem;
    background: #ebeced; }
</style>
