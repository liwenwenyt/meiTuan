<template>
  <footer>
    <div class="fot_left">
      <div class="fotImg">
        <img src="/static/img/before.png" alt="" v-if="tm==0">
        <img v-if="tn>0" src="/static/img/after.png" alt="">
        <p v-if="tn>0">{{tn}}</p>
      </div>
      <div class="total">
        <p v-if="tm>0" class="totalMoney">￥{{tm}}</p>
        <p>另需配送费：4.1</p>
      </div>
    </div>
    <span v-if="tn==0">￥20起送</span>
    <span v-if="tm>0&&tm<20">差￥{{tc}}起送</span>
      <div v-if="tm>20" class="go">
        <router-link to="/submitorder" falg="a">去结算</router-link>
      </div>
  </footer>
</template>

<script>
    export default {
        name: "mtFooter",
      props:["tn","tm","tc"]
    }
</script>

<style scoped>
  footer {
    width: 100%;
    height: 0.5rem;
    background: #51504e;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .fot_left{
    display: flex;
    align-items: center;
  }
  .fotImg{
    display: flex;

  }
  .fotImg img {
    width: 0.47rem;
    height: 0.63rem;
    margin-top: -0.13rem;
    z-index: 2;
    margin-left: 0.15rem; }
  .fotImg p{
    width: 0.16rem;
    height: 0.16rem;
    background: #f93b11;
    border-radius: 50%;
    font-size: 0.12rem;
    color: #fff;
    text-align: center;
    margin-left: -0.1rem;
    margin-top: 0.1rem;
    z-index: 3;
  }
  .total{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.1rem;
  }
  .total .totalMoney{
    font-size: 0.2rem;
    color: #fff;
  }
  .total p{
    font-size: 0.12rem;
    color: #979797;
  }
  footer span {
    font-size: 0.14rem;
    color: #979797;
    margin-right: 0.22rem;
  }
  .go{
    height: 100%;
    width: 1.1rem;
    background: #f7c75b;
    font-size: 0.16rem;
    color: #000e09;
    text-align: center;
    line-height: 0.5rem;
  }
  .go a{
    font-size: 0.15rem;
    color: #333;
  }
</style>
