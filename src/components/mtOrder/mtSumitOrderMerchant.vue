<template>
  <div class="pro_title">
    <div class="pro_title_left">
      <img src="../../../static/img/wywei.png" alt="">
      <p>魏家凉皮(科技三路口店)</p>
    </div>
    <span>美团专送</span>
  </div>
</template>

<script>
    export default {
        name: "mtSumitOrderMerchant"
    }
</script>

<style scoped>
  .pro_title{
    display: flex;
    background: #fbfbfb;
    justify-content: space-between;
    padding-top: 0.17rem;
    padding-bottom: 0.17rem;
    align-items: center;
    background: white;
    box-sizing: border-box;

  }
  .pro_title_left{
    display: flex;

  }
  .pro_title_left img{
    width: 0.2rem;
    height: 0.2rem;
    margin-left: 0.1rem;
  }
  .pro_title_left p{
    font-size: 0.13rem;
    color: #666666;
    margin-left: 0.1rem;
  }

  .pro_title span{
    font-size:0.1rem ;
    color: #523e1e;
    padding: 0.01rem;
    /*width: 0.5rem;*/
    /*height: 0.15rem;*/
    background: #fed360;
    border-top-left-radius: 0.06rem;
    border-bottom-right-radius: 0.06rem;
    margin-right: 0.1rem;
  }
</style>
