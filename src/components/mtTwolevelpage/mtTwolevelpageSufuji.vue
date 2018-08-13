<template>
  <div class="sufujiModul">
    <div class="sufujiModul_title">
      <img src="../../assets/img/sunTwoPagesufuji_titlepic.png"/>
      <p>苏福记（紫薇臻品店）</p>
    </div>
    <p>二十年用心做好家常菜</p>
    <p>全场30-6 经典川菜五折起</p>
    <div class="sufujiModul_main">
      <div class="sufujiModul_main_goods">
        <img src="../../assets/img/sunTwoPagesufuji_titlepic1.png"/>
        <p>热卖推荐</p>
        <p>福记斗碗鱼</p>
        <p>￥29.9</p>
      </div>
      <div class="sufujiModul_main_goods">
        <img src="../../assets/img/sunTwoPagesufuji_titlepic2.png"/>
        <p>热卖推荐</p>
        <p>福记斗碗鱼</p>
        <p>￥29.9</p>
      </div>
      <div class="sufujiModul_main_goods">
        <img src="../../assets/img/sunTwoPagesufuji_titlepic3.png"/>
        <p>热卖推荐</p>
        <p>福记斗碗鱼</p>
        <p>￥29.9</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtTwolevelpageSufuji"
    }
</script>

<style scoped>
  .sufujiModul {
    width: 100%;
    padding: 0.1rem 0.1rem;
    margin-bottom: 0.08rem;
    box-sizing: border-box;
    background-image: url(../../assets/img/sunTwoPagesufuji.png);
    background-size: 3.75rem 2.39rem;
    display: -webkit-flex;
    flex-direction: column; }
  .sufujiModul p:nth-child(2) {
    font-size: 0.15rem;
    color: #fff;
    line-height: 0.31rem; }
  .sufujiModul p:nth-child(3) {
    font-size: 0.11rem;
    color: #fff;
    line-height: 0.13rem;
    margin-bottom: 0.17rem; }

  .sufujiModul_title {
    display: -webkit-flex;
    align-items: center;
    width: 1.9rem;
    height: 0.37rem;
    background: #333;
    border-radius: 0.16rem; }
  .sufujiModul_title img {
    width: 0.32rem;
    height: 0.32rem;
    margin-right: 0.05rem; }
  .sufujiModul_title p {
    font-size: 0.13rem;
    color: #fff; }

  .sufujiModul_main {
    width: 100%;
    height: 1.2rem;
    padding-top: 0.1rem;
    box-sizing: border-box;
    background: #fff;
    display: -webkit-flex;
    justify-content: space-around; }

  .sufujiModul_main_goods {
    width: 33%;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    position: relative; }
  .sufujiModul_main_goods img {
    width: 0.68rem;
    height: 0.68rem; }
  .sufujiModul_main_goods p:nth-child(2) {
    line-height: 0.14rem;
    padding: 0.02rem 0.03rem;
    background: #fff;
    display: -webkit-flex;
    border: 0.01rem solid #ff9027;
    font-size: 0.1rem;
    color: #ff9027;
    position: absolute;
    top: 0.5rem;
    left: 0.3rem; }
  .sufujiModul_main_goods p:nth-child(3) {
    font-size: 0.12rem;
    color: #333;
    line-height: 0.22rem;
    margin: 0; }
  .sufujiModul_main_goods p:nth-child(4) {
    font-size: 0.1rem;
    color: #fb4e44; }
</style>
