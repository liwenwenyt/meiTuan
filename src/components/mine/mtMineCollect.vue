<template>
  <div class="mycollect">
     <div class="mycollectinner">
        <a href="#" class="mycollect_box">
          <img src="../../assets/img/wytwo01.png"/>
          <span>收藏</span>
        </a>
        <a href="#" class="mycollect_box">
          <img src="../../assets/img/wytwo02.png"/>
          <span>评价</span>
        </a>
        <a href="#" class="mycollect_box">
          <img src="../../assets/img/wytwo03.png"/>
          <span>足迹</span>
        </a>
     </div>
  </div>
</template>

<script>
    export default {
        name: "mtMineCollect"
    }
</script>

<style scoped>

  .mycollect {
    width: 100%;
    height: 0.93rem;
    display: flex;
    background: #fff;
    /*align-items: center;*/
    justify-content: space-around;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    box-sizing: border-box; }

  .mycollect .mycollectinner {
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    height: 0.93rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .mycollect_box {
    display: flex;
    flex-direction: column;
  }
  .mycollect_box img {
    width: 0.25rem;
    height: 0.25rem; }
  .mycollect_box span {
    font-size: 0.12rem;
    color: #333333;
    margin-top: 0.06rem;
  }
</style>
