<template>
  <div class="fiveClass">
    <a class="rowClass" href="#">
      <img src="../../assets/img/sunClass1.png"/>
      <span>美食</span>
    </a>
    <a class="rowClass" href="#">
      <img src="../../assets/img/sunClass2.png"/>
      <span>电影/演出</span>
    </a>
    <a class="rowClass" href="#">
      <img src="../../assets/img/sunClass3.png"/>
      <span>酒店住宿</span>
    </a>
    <a class="rowClass" href="#">
      <img src="../../assets/img/sunClass4.png"/>
      <span>休闲娱乐</span>
    </a>
    <router-link to="/levelpage" flag="a"  class="rowClass">
    <!--<a class="rowClass" href="#" >-->
      <img src="../../assets/img/sunClass5.png"/>
      <span>外卖</span>
      <!--</a>-->
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "mtIndexMainClassificationFive"
    }
</script>

<style scoped>
  .fiveClass {
    width: 100%;
    padding: 0.2rem 0.12rem 0.16rem 0.12rem;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
    display: -webkit-flex;
    justify-content: space-between; }

  .rowClass {
    display: -webkit-flex;
    align-items: center;
    flex-direction: column; }
  .rowClass img {
    width: 0.46rem;
    height: 0.54rem; }
  .rowClass span {
    font-size: 0.11rem;
    color: #666666; }
</style>
