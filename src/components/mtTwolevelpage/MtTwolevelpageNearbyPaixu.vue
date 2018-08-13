<template>
  <div class="nearbyMerchants_paixu">
    <div class="nearbyMerchants_paixu_left">
      <a href="#">
        <span>综合排序</span>
        <i class="iconfont icon-xiala"></i>
      </a>
      <a href="#">销量</a>
      <a href="#">距离</a>
    </div>
    <div class="nearbyMerchants_paixu_right">
      <a href="#">
        <span>筛选</span>
        <i class="iconfont icon-xiala"></i>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MtTwolevelpageNearbyPaixu"
    }
</script>

<style scoped>
  .nearbyMerchants_paixu {
    margin-bottom: 0.14rem;
    display: -webkit-flex;
    justify-content: space-between; }

  .nearbyMerchants_paixu_left {
    display: -webkit-flex; }
  .nearbyMerchants_paixu_left a:nth-child(1) {
    display: -webkit-flex;
    align-items: center; }
  .nearbyMerchants_paixu_left a:nth-child(1) span {
    font-size: 0.13rem;
    color: #333;
    font-weight: 600; }
  .nearbyMerchants_paixu_left a:nth-child(1) i {
    font-size: 0.08rem;
    color: #666; }
  .nearbyMerchants_paixu_left a:nth-child(2) {
    margin: 0 0.25rem;
    display: -webkit-flex;
    font-size: 0.13rem;
    color: #666; }
  .nearbyMerchants_paixu_left a:nth-child(3) {
    display: -webkit-flex;
    font-size: 0.13rem;
    color: #666; }

  .nearbyMerchants_paixu_right {
    display: -webkit-flex; }
  .nearbyMerchants_paixu_right a {
    display: -webkit-flex; }
  .nearbyMerchants_paixu_right a span {
    font-size: 0.13rem;
    color: #333;
    margin-right: 0.06rem; }
  .nearbyMerchants_paixu_right a i {
    font-size: 0.08rem;
    color: #666; }
</style>
