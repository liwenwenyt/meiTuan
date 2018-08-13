<template>
  <router-link to="/shopcarts" flag="a">
    <div class="goods">
      <div class="goodsImg">
        <img :src="itemt.pic"/>
      </div>
      <div class="goodsMain">
        <div class="goodsMainO">
          <p>{{itemt.title}}</p>
          <p>{{itemt.distance}}</p>
        </div>
        <p class="smallTit">{{itemt.stitle}}</p>
        <div class="goodsMainT">
          <div class="goodsMainT_L">
            <span>￥</span>
            <span>{{itemt.price}}</span>
            <span v-if="itemt.Rackrate">{{itemt.Rackrate}}</span>
          </div>
          <div class="goodsMainT_R">
            <span>{{itemt.sile}}</span>
            <span>×</span>
          </div>
        </div>
        <p class="discount" v-if="itemt.qal">{{itemt.qal}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
    export default {
      props:["itemt"],
        name: "mtIndexMainLikegoodsOne",
     // method:{
     //    if('itemt.qal == !""'){
     //        return itemt.qal
     //    },
     //  }
    }
</script>

<style scoped>
  .goods {
    padding: 0.15rem 0;
    display: -webkit-flex;
    border-bottom: 1px solid #ececec; }

  .goodsImg {
    width: 0.9rem; }
  .goodsImg img {
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.1rem; }

  .goodsMain {
    width: 2.65rem;
    display: -webkit-flex;
    flex-direction: column; }

  .goodsMainO {
    display: -webkit-flex;
    justify-content: space-between; }
  .goodsMainO p:first-child {
    font-size: 0.15rem;
    color: #333333;
    font-weight: 600; }
  .goodsMainO p:last-child {
    font-size: 0.1rem;
    color: #6b6b6b; }

  .smallTit {
    font-size: 0.12rem;
    color: #6b6b6b;
    line-height: 0.3rem; }

  .goodsMainT {
    display: -webkit-flex;
    justify-content: space-between;
    margin-bottom: 0.1rem; }

  .goodsMainT_L {
    display: -webkit-flex;
    align-items: center; }
  .goodsMainT_L span:nth-child(1) {
    font-size: 0.1rem;
    color: #ff6600; }
  .goodsMainT_L span:nth-child(2) {
    font-size: 0.2rem;
    color: #ff6600; }
  .goodsMainT_L span:nth-child(3) {
    font-size: 0.1rem;
    color: #6b6b6b;
    margin-left: 0.06rem;
    margin-right: 0.06rem; }

  .goodsMainT_R {
    display: -webkit-flex;
    align-items: center; }
  .goodsMainT_R span:first-child {
    font-size: 0.1rem;
    color: #6b6b6b;
    margin-right: 0.06rem; }
  .goodsMainT_R span:last-child {
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    width: 0.15rem;
    height: 0.12rem;
    border: 1px solid #efefef;
    border-radius: 0.04rem;
    font-size: 0.1rem;
    color: #efefef; }

  .discount {
    width: 20%;
    padding: 0 0.05rem;
    line-height: 0.15rem;
    border: 1px solid #fdcbc8;
    border-radius: 0.02rem;
    background: #fef4f4;
    font-size: 0.09rem;
    color: #fa534a;
    display: -webkit-flex;
    justify-content: center;
    align-items: center; }
</style>
