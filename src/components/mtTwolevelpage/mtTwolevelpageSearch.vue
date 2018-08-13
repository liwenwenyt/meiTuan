<template>
  <div class="header_searchM">
    <input type="text" name="" id="" placeholder="黄焖鸡米饭" />
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>

<script>
    export default {
        name: "mtTwolevelpageSearch"
    }
</script>

<style scoped>
  .header_searchM {
    width: 100%;
    height: 0.48rem;
    padding: 0.09rem 0.1rem;
    box-sizing: border-box;
    display: -webkit-flex;
    align-items: center;
    position: relative; }
  .header_searchM input {
    width: 100%;
    height: 0.3rem;
    background: #e9eaed;
    color: #999999;
    border: none;
    outline: none;
    border-radius: 0.12rem;
    text-indent: 0.28rem; }
  .header_searchM i {
    color: #666666;
    position: absolute;
    left: 0.18rem; }
</style>
