<template>
  <div class="tenClass">
    <div class="tenClassTop">
      <a class="rowclassIcon" href="#">
        <img src="../../assets/img/sunclassIcon1.png"/>
        <span>结婚/摄影</span>
      </a>
      <a class="rowclassIcon" href="#">
        <img src="../../assets/img/sunclassIcon2.png"/>
        <span>名宿/公寓</span>
      </a>
      <a class="rowclassIcon" href="#">
        <img src="../../assets/img/sunclassIcon3.png"/>
        <span>周边游/旅游</span>
      </a>
      <a class="rowclassIcon" href="#">
        <img src="../../assets/img/sunclassIcon4.png"/>
        <span>丽人/美发</span>
      </a>
      <a class="rowclassIcon" href="#">
        <img src="../../assets/img/sunclassIcon5.png"/>
        <span>摩拜单车</span>
      </a>
    </div>
    <div class="tenClassBot">
      <a class="rowclassIcon" href="#">
        <img src="../../assets/img/sunclassIcon6.png"/>
        <span>景点/门票</span>
      </a>
      <a class="rowclassIcon" href="#">
        <img src="../../assets/img/sunclassIcon7.png"/>
        <span>跑腿代购</span>
      </a>
      <a class="rowclassIcon8" href="#">
        <img src="../../assets/img/sunclassIcon8.png"/>
        <span>机票/火车票</span>
      </a>
      <a class="rowclassIcon" href="#">
        <img src="../../assets/img/sunclassIcon9.png"/>
        <span>美甲美睫</span>
      </a>
      <a class="rowclassIcon" href="#">
        <img src="../../assets/img/sunclassIcon10.png"/>
        <span>全部分类</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtIndexMainClassificstionTen"
    }
</script>

<style scoped>
  .tenClass {
    width: 100%;
    padding: 0.13rem 0.12rem 0.14rem 0.12rem;
    box-sizing: border-box;
    display: -webkit-flex;
    flex-direction: column; }

  .tenClassTop {
    padding-bottom: 0.2rem;
    box-sizing: border-box;
    display: -webkit-flex;
    justify-content: space-between; }

  .tenClassBot {
    display: -webkit-flex;
    justify-content: space-between; }

  .rowclassIcon {
    display: -webkit-flex;
    align-items: center;
    flex-direction: column; }
  .rowclassIcon img {
    width: 0.22rem;
    height: 0.22rem;
    margin-bottom: 0.09rem; }
  .rowclassIcon span {
    font-size: 0.11rem;
    color: #666666; }

  .rowclassIcon8 {
    display: -webkit-flex;
    align-items: center;
    flex-direction: column; }
  .rowclassIcon8 img {
    width: 0.35rem;
    height: 0.22rem;
    margin-bottom: 0.09rem; }
  .rowclassIcon8 span {
    font-size: 0.11rem;
    color: #666666; }
</style>
