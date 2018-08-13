<template>
  <div>
  <div class="money">
    <div class="moneyBox">
      <p>包装费</p>
      <div class="right">
        <p>￥</p>
        <p>2</p>
      </div>
    </div>
    <div class="moneyBox">
      <p>配送费</p>
      <div class="right">
        <p>￥</p>
        <p>2.1</p>
      </div>
    </div>
  </div>
  <div class="imgBox">
    <img src="../../../static/img/wydian.png" alt="">
  </div>
  </div>
</template>

<script>
    export default {
        name: "mtSubmitOrderMoney"
    }
</script>

<style scoped>
  .vouchers{
    background: white;
  }
  .moneyBox{
    display: flex;
    height: 0.3rem;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    box-sizing: border-box;
  }
  .moneyBox p{
    font-size:0.13rem ;
    color: #333333;
  }
  .moneyBox span{
    font-size:0.13rem ;
    color: #333333;
  }
  .right{
    display: flex;
  }
  .imgBox img{
    width: 3.55rem;
    height: 0.15rem;
  }
</style>
