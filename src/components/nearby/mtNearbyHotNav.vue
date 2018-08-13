<template>
  <div class="hotdoor">
    <a href="#">热门</a>
    <a href="#">小吃快餐</a>
    <a href="#">甜点饮料</a>
    <a href="#">火锅烧烤</a>
    <a href="#">川湘菜</a>
    <a href="#">日韩料理</a>
    <a href="#">外卖</a>
    <a href="#">自助餐</a>
  </div>
</template>

<script>
    export default {
        name: "mtNearbyHotNav"
    }
</script>

<style scoped>
  .hotdoor{
    display: flex;
    overflow-x: scroll;
    height: 0.51rem;
    /*background: pink;*/
    align-items: center;
    width: 100%;
  }

  ::-webkit-scrollbar{
    display:none;
  }
  .hotdoor a{
    font-size: 0.12rem;
    color: #5c5c5c;
    flex-shrink:0;
    height: 0.14rem;
    margin-left: 0.2rem;
    padding:0.04rem 0.1rem;
    border-radius: 0.13rem;
    text-align: center;
  }
  .hotdoor a:nth-child(1){
    background: #f9efe6;
    color: #f64033;
  }

</style>
