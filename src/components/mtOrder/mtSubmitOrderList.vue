<template>
  <div>
  <div class="liftwraper">
    <div class="list_left">
      <img src="../../../static/img/wymi01.png" alt="">
      <div class="list_left_right">
        <p>秘制凉皮</p>
        <div class="mutlie">
          <span>×</span>
          <span>1</span>
        </div>
      </div>
    </div>
    <div class="right">
      <p>￥</p>
      <p>11</p>
    </div>
  </div>
    <div class="liftwraper">
      <div class="list_left">
        <img src="../../../static/img/wyzhou.png" alt="">
        <div class="list_left_right">
          <p>南瓜粥</p>
          <div class="mutlie">
            <span>×</span>
            <span>1</span>
          </div>
        </div>
      </div>
      <div class="right">
        <p>￥</p>
        <p>6</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtSubmitOrderList"
    }
</script>

<style scoped>
  .liftwraper{
    display: flex;
    background: #fbfbfb;
    justify-content: space-between;
    padding:0.1rem;
    box-sizing: border-box;
    margin-bottom: 0.05rem;
  }
  .list_left{
    display: flex;
  }
  .list_left img{
    width: 0.55rem;
    height: 0.55rem;
  }
  .list_left_right{
    display: flex;
    flex-direction: column;
    margin-left: 0.1rem;
  }
  .list_left_right p{
    font-size: 0.14rem;
    color:#333333 ;
  }
  .list_left_right span{
    font-size: 0.1rem;
    color: #999;
  }
  .right p{
    font-size:0.12rem ;
    color: #333333;

  }
  .right{
    display: flex;
  }
  .mutlie{
    display: flex;
  }


</style>
