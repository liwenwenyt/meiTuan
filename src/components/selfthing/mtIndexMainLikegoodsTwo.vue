<template>
  <div class="goodsT">
    <p class="goodsT_title">5种冻着吃的水果，榴莲冰冻太尴尬！第二个却比冰淇淋还过瘾！</p>
    <div class="goodsT_Pic">
      <img src="../../assets/img/sungoodsTpic1.png"/>
      <img src="../../assets/img/sungoodsTpic2.png"/>
      <img src="../../assets/img/sungoodsTpic3.png"/>
    </div>
    <div class="goodsT_Bot">
      <span>江东旅游网</span>
      <span>×</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtIndexMainLikegoodsTwo"
    }
</script>

<style scoped>
  .goodsT {
    padding: 0.15rem 0 0.15rem 0;
    display: -webkit-flex;
    flex-direction: column; }

  .goodsT_title {
    font-size: 0.15rem;
    color: #333;
    font-weight: 600; }

  .goodsT_Pic {
    display: -webkit-flex;
    justify-content: space-between;
    margin-top: 0.12rem;
    margin-bottom: 0.12rem; }
  .goodsT_Pic img {
    width: 1.11rem;
    height: 0.84rem; }

  .goodsT_Bot {
    display: -webkit-flex;
    justify-content: space-between; }
  .goodsT_Bot span:first-child {
    font-size: 0.11rem;
    color: #7d7d7d; }
  .goodsT_Bot span:last-child {
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    width: 0.15rem;
    height: 0.12rem;
    border: 1px solid #efefef;
    border-radius: 0.04rem;
    font-size: 0.1rem;
    color: #efefef; }
</style>
