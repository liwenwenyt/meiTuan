<template>
  <div class="sever">
    <div class="sever_box">
      <h3>美团服务</h3>
      <div class="sever_box_select">
        <a href="#">
          <img src="../../assets/img/wyf01.png"/>
          <span>会员中心</span>
        </a>
        <a href="#">
          <img src="../../assets/img/wyf02.png"/>
          <span>客服中心</span>
        </a>
        <a href="#">
          <img src="../../assets/img/wyf01.png"/>
          <span>免流用美团</span>
        </a>
        <a href="#">
          <img src="../../assets/img/wyf01.png"/>
          <span>发票助手</span>
        </a>
        <a href="#">
          <img src="../../assets/img/wyf01.png"/>
          <span>我要合作</span>
        </a>
        <a href="#">
          <img src="../../assets/img/wyf01.png"/>
          <span>关于美团</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtMineServe"
    }
</script>

<style scoped>
  .sever {
    width: 100%;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    box-sizing: border-box;
    background: #fff;
    display: -webkit-flex;
   flex-direction: column; }

  .sever_box {
    width: 100%;
    border-top: 1px solid #e5e5e5; }

  .sever_box h3 {
    font-size: 0.13rem;
    color: #222222;
    margin-top: 0.16rem; }

  .sever_box_select {
    display: -webkit-flex;
    flex-wrap: wrap;
    align-items: center;
    height: 1.74rem; }
  .sever_box_select a {
    display: -webkit-flex;
    width: 25%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; }
  .sever_box_select a img {
    width: 0.25rem;
    height: 0.25rem; }
  .sever_box_select a span {
    font-size: 0.12rem;
    color: #333333;
    margin-top: 0.13rem; }
</style>
