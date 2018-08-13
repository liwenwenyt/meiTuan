<template>
  <div class="getTotheshop_main_goods">
    <img class="getTotheshop_main_goodsPic" :src="listoner.pic"/>
    <div class="getTotheshop_main_goods_text">
      <p class="getTotheshopgoods_text_top">{{listoner.title}}</p>
      <div class="getTotheshopgoods_text_mid">
        <p>{{listoner.spanone}}</p>
        <p>{{listoner.spantwo}}</p>
      </div>
      <div class="getTotheshopgoods_text_bot">
        <img src="../../assets/img/sunTwoPagewufengpic2.png"/>
        <img src="../../assets/img/sunTwoPagewufengpic3.png"/>
        <img src="../../assets/img/sunTwoPagewufengpic4.png"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "MtTwolevelpageGettotheshopMainGoods",
      props:["listoner"]
    }
</script>

<style scoped>
  .getTotheshop_main_goods {
    height: 0.65rem;
    display: -webkit-flex; }

  .getTotheshop_main_goodsPic {
    width: 0.64rem;
    height: 0.64rem;
    border: 1px solid #e4e3e3;
    margin-right: 0.08rem; }

  .getTotheshop_main_goods_text {
    width: 1.82rem;
    display: -webkit-flex;
    flex-direction: column; }

  .getTotheshopgoods_text_top {
    font-size: 0.15rem;
    color: #333;
    line-height: 0.19rem; }

  .getTotheshopgoods_text_mid {
    width: 100%;
    display: -webkit-flex;
    align-items: center;
    margin-top: 0.06rem;
    margin-bottom: 0.08rem; }
  .getTotheshopgoods_text_mid p:first-child {
    width: 0.43rem;
    height: 0.15rem;
    background: #ffd161;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    font-size: 0.1rem;
    color: #333;
    text-align: center;
    line-height: 0.15rem; }
  .getTotheshopgoods_text_mid p:last-child {
    width: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.13rem;
    line-height: 0.13rem;
    border: 1px solid #ffd161;
    background: #fff6df;
    text-align: center;
    font-size: 0.1rem;
    color: #ff9f00; }

  .getTotheshopgoods_text_bot {
    display: -webkit-flex; }
  .getTotheshopgoods_text_bot img {
    width: 0.15rem;
    height: 0.15rem;
    margin-right: 0.05rem; }
</style>
