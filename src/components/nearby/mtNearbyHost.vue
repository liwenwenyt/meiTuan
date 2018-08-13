<template>
  <div class="listInner">
    <div class="listwarpper">
      <img :src="itemh.pic"/>
      <div class="listInner_middle">
        <div class="listInner_middle_title">
          <h4>{{itemh.title}}</h4>
          <a href="#">{{itemh.distance}}</a>
        </div>
        <div class="listInner_middle_box" >
          <img src="../../assets/img/fivestar.png"/>
          <span v-if="itemh.score">{{itemh.score}}</span>
          <span v-if="itemh.aver">{{itemh.aver}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtNearbyHost",
      props:["itemh"]

    }
</script>

<style scoped>
  .listwarpper{
    display: flex;
    width: 100%;
  }
  .listInner {
    width: 100%;
    border-bottom: 1px solid #ececec;
    display: -webkit-flex;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    box-sizing: border-box;
    justify-content: space-between; }
  .listInner img {
    width: 0.8rem;
    height: 0.6rem; }

  .listInner_middle_title a {
    font-size: 0.1rem;
    color: #ff5846;
    background: #ffeae8;
    width: 0.42rem;
    height: 0.16rem;
    border-bottom-left-radius: 0.1rem;
    text-align: center; }

  .listInner_middle {
    width: 100%;
    display: -webkit-flex;
    flex-direction: column;
    margin-left: 0.11rem; }
  .listInner_middle_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*height: 0.1rem;*/
  }
  .listInner_middle_title h4 {
    font-size: 0.15rem;
    color: #333333; }

  .listInner_middle_box {
    display: -webkit-flex;
    margin-top: 0.08rem;
    align-items: center; }
  .listInner_middle_box img {
    width: 0.55rem;
    height: 0.1rem;
  }
  .listInner_middle_box span {
    font-size: 0.1rem;
    margin-left: 0.07rem;
    color: #666666; }
  .listInner_middle_box span:nth-child(3){
    color: #ff5f53;
    font-size: 0.16rem;
  }
</style>
