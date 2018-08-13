<template>
  <div class="header">
    <div class="header_back">
      <router-link to="/" flag="a">
        <a href="#"><i class="iconfont icon-fanhui"></i></a>
      </router-link>
    </div>
    <div class="header_Pos">
      <a href="#">
        <i class="iconfont icon-fujin1"></i>
        <span>立人科技园</span>
        <img src="../../assets/img/sunTwoPageheaderPosicon.png"/>
      </a>
    </div>
    <div class="header_add">
      <a href="#"><i class="iconfont icon-shezhi"></i></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtTwplevelpageHeader"
    }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 0.44rem;
    display: -webkit-flex;
    justify-content: space-between; }

  .header_back {
    width: 0.44rem;
    height: 0.44rem; }
  .header_back a {
    width: 0.44rem;
    height: 0.44rem;
    display: -webkit-flex;
    justify-content: center;
    align-items: center; }
  .header_back a i {
    font-size: 0.2rem;
    width: 0.3rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    color: #666666;
    font-weight: 600; }

  .header_Pos {
    width: 1.25rem;
    height: 0.44rem; }
  .header_Pos a {
    width: 1.25rem;
    height: 0.44rem;
    display: -webkit-flex;
    justify-content: center; }
  .header_Pos a i {
    font-size: 0.2rem;
    width: 0.2rem;
    height: 0.06rem;
    color: #686868;
    margin-top: 0.12rem; }
  .header_Pos a span {
    font-size: 0.16rem;
    color: #333;
    margin-top: 0.11rem;
    margin-left: 0.05rem;
    margin-right: 0.05rem; }
  .header_Pos a img {
    width: 0.08rem;
    height: 0.16rem;
    margin-top: 0.15rem; }

  .header_add {
    width: 0.44rem;
    height: 0.44rem; }
  .header_add a {
    width: 0.44rem;
    height: 0.44rem;
    display: -webkit-flex;
    justify-content: center;
    align-items: center; }
  .header_add a i {
    font-size: 0.2rem;
    width: 0.2rem;
    height: 0.2rem;
    text-align: center;
    line-height: 0.2rem;
    color: #666666; }
</style>
