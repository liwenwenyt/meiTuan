<template>
  <div class="nav">
    <a href="">享美食</a>
    <a href="">惠生活</a>
    <a href="">爱玩乐</a>
    <a href="">住酒店</a>
    <a href="">全部</a>
  </div>
</template>

<script>
    export default {
        name: "mtNearbyNav"
    }
</script>

<style scoped>
  .nav {
    width: 100%;
    height: 0.44rem;
    background: white;
    display: -webkit-flex;
    border-top: 1px solid #aaaaaa; }
  .nav a {
    box-sizing: border-box;
    font-size: 0.13rem;
    color: #787878;
    margin-left: 0.3rem;
    padding-bottom: 0.13rem;
    padding-top: 0.13rem; }
  .nav a:nth-child(1) {
    border-bottom: 0.03rem solid #1ad0bd;
    font-weight: 600;
    color: #222222; }
</style>
