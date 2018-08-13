<template>
  <div class="header">
    <div class="header_weather">
      <a href="#"><img src="../../assets/img/sunHeaderweatherPic.png"></a>
    </div>
    <div class="header_Pos">
      <a class="header_PMain" href="#">
        <span>西安</span>
        <img src="../../assets/img/sunHeaderPosjiantou.png"/>
      </a>
    </div>
    <div class="header_search">
      <input type="text" name="" id="" placeholder="猜球赢现金" />
      <i class="iconfont icon-sousuo"></i>
    </div>
    <div class="header_add">
      <a href="#"><i class="iconfont icon-jia"></i></a>
    </div>
  </div>
</template>

<script >
	export default {
    name: "mtIndexHeader"
  }
</script>

<style scoped>
	.header {
  width: 100%;
  height: 0.44rem;
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
  display: -webkit-flex; }

.header_weather {
  width: 0.48rem;
  height: 0.43rem; }
  .header_weather img {
    width: 0.48rem;
    height: 0.43rem; }

.header_Pos {
  width: 0.47rem;
  height: 0.43rem;
  margin-right: 0.1rem; }

.header_PMain {
  width: 0.47rem;
  height: 0.43rem;
  display: -webkit-flex;
  -webkit-justify-content: center;
  -webkit-align-items: center; }
  .header_PMain span {
    font-size: 0.14rem;
    color: #6e6e6e; }
  .header_PMain img {
    width: 0.17rem;
    height: 0.06rem; }

.header_search {
  display: -webkit-flex;
  -webkit-align-items: center;
  position: relative; }
  .header_search input {
    width: 2.23rem;
    height: 0.29rem;
    background: #f4f4f4;
    border: none;
    outline: none;
    border-radius: 0.12rem;
    text-indent: 0.28rem; }
  .header_search i {
    color: #666666;
    position: absolute;
    left: 0.08rem; }

.header_add {
  width: 0.47rem;
  height: 0.43rem; }
  .header_add a {
    width: 0.47rem;
    height: 0.43rem;
    display: -webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center; }
    .header_add a i {
      width: 0.17rem;
      height: 0.17rem;
      color: #666666; }
</style>
