<template>
  <header>
    <div class="header_A">
      <h3>我的订单</h3>
    </div>
    <div class="header_B">
      <div class="header_B_1">
        <img src="../../assets/img/x-dfk.png" alt="">
        <span>待付款</span>
      </div>
      <div class="header_B_1">
        <img src="../../assets/img/x-dsy.png" alt="">
        <span>待使用</span>
      </div>
      <div class="header_B_1">
        <img src="../../assets/img/x-dpj.png" alt="">
        <span>待评价</span>
      </div>
      <div class="header_B_1">
        <img src="../../assets/img/x-sh.png" alt="">
        <span>退款/售后</span>
      </div>
      <div class="header_B_1">
        <img src="../../assets/img/x-qbdd.png" alt="">
        <span>全部订单</span>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "mtOrderHeader"
    }
</script>

<style scoped>
  header{
    width: 100%;
    height: 1.24rem;
    background: #f6f7fa;
    display: flex;
    flex-direction: column;
  }
  .header_A h3{
    font-size: .16rem;
    line-height: .44rem;
    text-align: center;
  }
  .header_A{
    width: 100%;
    height: .44rem;
  }
  .header_B{
    display: flex;
    height: .8rem;
    justify-content: space-around;
    width: 100%;
  }
  .header_B_1{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header_B_1 img{
    width: .26rem;
    height: .26rem;
    margin-top:.12rem;
  }
  .header_B_1 span{
    font-size: .11rem;
    color: #333333;
    margin-top: .1rem;
  }
  .fixed-top {
    position: fixed;
    width: 100%;
    left: 0;
    top: 1.24rem;
  }
  .sticky {
    /*滚过初始位置时自动吸顶*/
    position: -webkit-sticky;
    position: sticky;
    /*吸顶时的定位*/
    top:-1px;
    left: 0;
    /*z比下方所有z高*/
    z-index: 9999;
  }
</style>
