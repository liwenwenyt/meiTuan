<template>
  <div class="likegoods_title">
    <span></span>
    <span>猜你喜欢</span>
    <span></span>
  </div>
</template>

<script>
    export default {
        name: "mtIndexMainLikegoodsTitle"
    }
</script>

<style scoped>
  .likegoods_title {
    height: 0.44rem;
    border-bottom: 1px solid #e5e5e5;
    background: #fff;
    display: -webkit-flex;
    justify-content: center;
    align-items: center; }
  .likegoods_title span:nth-child(1) {
    width: 0.1rem;
    height: 1px;
    background: #979797;
    margin-right: 0.08rem; }
  .likegoods_title span:nth-child(2) {
    font-size: 0.12rem;
    color: #999; }
  .likegoods_title span:nth-child(3) {
    margin-left: 0.08rem;
    width: 0.1rem;
    height: 1px;
    background: #979797; }
</style>
