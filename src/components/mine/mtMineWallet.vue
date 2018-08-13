<template>
  <div class="money">
    <div class="money_box">
      <h3>美团钱包</h3>
      <div class="money_box_select">
        <a href="#">
          <img src="../../assets/img/wythree01.png"/>
          <span>我的钱包</span>
        </a>
        <a href="#">
          <img src="../../assets/img/wythree02.png"/>
          <span>红包/卡卷</span>
        </a>
        <a href="#">
          <img src="../../assets/img/wythree03.png"/>
          <span>闪付</span>
        </a>
        <a href="#">
          <img src="../../assets/img/wythree04.png"/>
          <span>手机充值</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtMineWallet"
    }
</script>

<style scoped>
  .money {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    width: 100%;
    height: 1.185rem;
    background: #fff;
    box-sizing: border-box; }

  .money_box {
    width: 100%;
    height: 1.18rem;
    display: -webkit-flex;
    flex-direction: column;
    border-bottom: 1px solid #e5e5e5; }
  .money_box h3 {
    font-size: 0.13rem;
    color: #222222;
    margin-top: 0.16rem; }

  .money_box_select {
    display: -webkit-flex;
    justify-content: space-around;
    align-items: center;
    height: 0.89rem; }
  .money_box_select a {
    width: 25%;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; }
  .money_box_select a img {
    width: 0.45rem;
    height: 0.35rem; }
  .money_box_select a span {
    font-size: 0.12rem;
    color: #333333;
    margin-top: 0.10rem; }
</style>
