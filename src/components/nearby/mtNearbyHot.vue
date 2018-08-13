<template>
  <div class="hot">
    <a href="">热门</a>
    <a href="">小吃快餐</a>
    <a href="">甜点饮品</a>
    <a href="">火锅烧烤</a>
    <a href="">川湘菜</a>
    <a href="">日韩料理</a>
    <a href="">外卖</a>
    <a href="">自助餐</a>
  </div>
</template>

<script>
    export default {
        name: "mtNearbyHot"
    }
</script>

<style scoped>
  .hot {
    width: 100%;
    height: 0.9rem;
    background: #f4f9f9;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    -webkit-align-items: center;
    padding-left: 0.12rem;
    padding-right: 0.12rem;
    box-sizing: border-box;
    -webkit-justify-content: space-between;
  }
  .hot a {
    width: 0.82rem;
    height: 0.28rem;
    font-size: 0.14rem;
    color: #becaca;
    text-align: center;
    border: 1px solid #e0e0e0;
    border-radius: 0.14rem;
    line-height: 0.28rem;
    background: #fff; }

  .hot a:nth-child(1) {
    background: #1ed4c1;
    color: #fff; }
</style>
