<template>
  <div class="activity">
    <div class="activity_left">
      <img src="../../assets/img/we_4.jpg" alt="">
      <span>新用户立减14元，首次使用美团支付最高再减3元</span>
    </div>
    <div class="activity_right">
      <span>1个活动</span>
      <i class="iconfont icon-xiala"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtActivity"
    }
</script>

<style scoped>
  .activity {
    width: 100%;
    height: 0.15rem;
    padding: 0.2rem 0.1rem 0.1rem 0.1rem;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between; }
  .activity .activity_left {
    width: 74%;
    display: flex;
    align-items: center; }
  .activity .activity_left img {
    width: 0.15rem;
    height: 0.15rem;
    margin-right: 0.05rem; }
  .activity .activity_left span {
    font-size: 0.1rem;
    color: #545454;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 88%; }
  .activity .activity_right {
    display:flex;
    align-items: center; }
  .activity .activity_right span {
    font-size: 0.12rem;
    color: #bbbbbb;
    margin-right: 0.05rem; }
  .activity .activity_right i {
    font-size: 0.09rem;
    color: #bbbbbb; }
</style>
