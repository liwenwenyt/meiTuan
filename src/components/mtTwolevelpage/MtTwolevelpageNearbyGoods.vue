<template>
  <div class="nearbyMerchants_goods">
    <div class="nearbyMerchants_goods_pic">
      <img :src="listtwot.pic"/>
    </div>
    <div class="nearbyMerchants_goods_main">
      <div class="neargoodsmain_one">
        <p>{{listtwot.title}}</p>
        <i class="iconfont icon-gengduo"></i>
      </div>
      <div class="neargoodsmain_two">
        <div class="neargoodsmain_two_L">
          <img src="../../assets/img/sunTwoPagenearpic2.png"/>
          <p>{{listtwot.pingfen}}</p>
          <p>{{listtwot.xiaoshou}}</p>
        </div>
        <div class="neargoodsmain_two_R">
          <p>{{listtwot.time}}</p>
          <span></span>
          <p>{{listtwot.juli}}</p>
        </div>
      </div>
      <div class="neargoodsmain_three">
        <div class="neargoodsmain_three_L">
          <p>{{listtwot.qisong}}</p>
          <span></span>
          <p>{{listtwot.peisong}}</p>
          <span></span>
          <p>{{listtwot.renjun}}</p>
        </div>
        <div class="neargoodsmain_three_R">
          <img src="../../assets/img/sunTwoPagenearpic3.png"/>
        </div>
      </div>
      <div class="neargoodsmain_four">
        <i class="iconfont icon-Shapecopy"></i>
        <p>{{listtwot.class}}</p>
        <p>{{listtwot.pingjia}}</p>
      </div>
      <div class="neargoodsmain_five">
        <p v-if="listtwot.yuhuione">{{listtwot.yuhuione}}</p>
        <p v-if="listtwot.yuhuitwo">{{listtwot.yuhuitwo}}</p>
        <p v-if="listtwot.yuhuithree">{{listtwot.yuhuithree}}</p>
        <p v-if="listtwot.yuhuifour">{{listtwot.yuhuifour}}</p>
        <p v-if="listtwot.yuhuifive">{{listtwot.yuhuifive}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MtTwolevelpageNearbyGoods",
      props:["listtwot"]
    }
</script>

<style scoped>
  .nearbyMerchants_goods {
    width: 100%;
    display: -webkit-flex; }

  .nearbyMerchants_goods_pic {
    margin-right: 0.09rem; }
  .nearbyMerchants_goods_pic img {
    width: 0.78rem;
    height: 0.58rem;
    border: 1px solid #e4e4e4;
    border-radius: 0.02rem; }

  .nearbyMerchants_goods_main {
    width: 100%;
    display: -webkit-flex;
    flex-direction: column; }

  .neargoodsmain_one {
    display: -webkit-flex;
    justify-content: space-between; }
  .neargoodsmain_one p {
    font-size: 0.15rem;
    color: #333;
    font-weight: 600; }
  .neargoodsmain_one i {
    font-size: 0.15rem;
    color: #333;
    font-weight: 600; }

  .neargoodsmain_two {
    display: -webkit-flex;
    justify-content: space-between; }

  .neargoodsmain_two_L {
    display: -webkit-flex;
    align-items: center; }
  .neargoodsmain_two_L img {
    width: 0.63rem;
    height: 0.09rem; }
  .neargoodsmain_two_L p {
    font-size: 0.1rem;
    color: #727272;
    margin-right: 0.1rem; }

  .neargoodsmain_two_R {
    display: -webkit-flex;
    align-items: center;
    margin: 0.05rem 0; }
  .neargoodsmain_two_R p {
    font-size: 0.1rem;
    color: #727272; }
  .neargoodsmain_two_R span {
    width: 1px;
    height: 0.07rem;
    background: #cfcfcf;
    margin: 0 0.04rem; }

  .neargoodsmain_three {
    display: -webkit-flex;
    justify-content: space-between; }

  .neargoodsmain_three_L {
    display: -webkit-flex;
    align-items: center; }
  .neargoodsmain_three_L p {
    font-size: 0.1rem;
    color: #727272; }
  .neargoodsmain_three_L span {
    width: 1px;
    height: 0.07rem;
    background: #cfcfcf;
    margin: 0 0.04rem; }

  .neargoodsmain_three_R img {
    width: 0.5rem;
    height: 0.15rem; }

  .neargoodsmain_four {
    margin: 0.05rem 0 0 0;
    display: -webkit-flex;
    align-items: center; }
  .neargoodsmain_four i {
    font-size: 0.10rem;
    color: #666;
    font-weight: 600;
    margin-right: 0.02rem; }
  .neargoodsmain_four p {
    font-size: 0.1rem;
    color: #727272;
    margin-right: 0.12rem; }

  .neargoodsmain_five {
    margin-bottom: 0.28rem;
    display: -webkit-flex;
    flex-wrap: wrap;
    align-items: center; }
  .neargoodsmain_five p {
    padding: 0.03rem 0.04rem;
    border: 1px solid #fdc9c6;
    font-size: 0.1rem;
    margin-top:0.05rem;
    color: #fb4e44;
    margin-right: 0.05rem; }
  .neargoodsmain_five p:last-child {
    border: 1px solid #b4ece6;
    font-size: 0.1rem;
    color: #28b6a8; }
</style>
