<template>
    <div class="listInner">
      <div class="listwarpper">
        <img :src="item.pic" id="imgs"/>
        <div class="listInner_middle">
          <div class="listInner_middle_title">
            <h4>{{item.title}}</h4>
            <a href="#">{{item.distance}}</a>
          </div>
          <div class="listInner_middle_box" >
            <img src="../../assets/img/fivestar.png"/>
            <span v-if="item.scrore">{{item.scrore}}</span>
            <span v-if="item.aver">{{item.aver}}</span>
          </div>
          <div class="client">
            <span v-if="item.client">{{item.client}}</span>
            <span v-if="item.recommend">{{item.recommend}}</span>
          </div>
          <div class="listInner_middle_bottom">
            <img src="../../assets/img/wytuan.png"/>
            <span>{{item.produce}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "mtNearbyOneList",
      props:["item"]
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
#imgs{
    width: 0.9rem;
    height: 0.65rem; }
  .listInner_middle_title a {
    font-size: 0.1rem;
    color: #ff5846;
    background: #ffeae8;
    width: 0.42rem;
    height: 0.16rem;
    font-weight: normal;
    border-bottom-left-radius: 0.1rem;
    text-align: center;
  }

  .listInner_middle {
    width: 100%;
    display: -webkit-flex;
    flex-direction: column;
    margin-left: 0.11rem; }
  .listInner_middle_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.1rem;
  }
  .listInner_middle_title h4 {
    font-size: 0.15rem;
    color: #333333; }

  .listInner_middle_box {
    display: -webkit-flex;
    margin-top: 0.08rem;
    align-items: center;
  }
  .listInner_middle_box img {
    width: 0.55rem;
    height: 0.1rem;
  }
  .listInner_middle_box span {
    font-size: 0.1rem;
    margin-left: 0.07rem;
    color: #666666; }
  .client{
    display: flex;
    align-items: center;
  }
  .client span{
    font-size:0.09rem ;
    color: #f49237;
    padding: 0.02rem 0.07rem;
    border: 1px solid #f49237;
    border-radius: 0.03rem;
    text-align: center;
    margin-right: 0.06rem;
    margin-top: 0.1rem;

  }
  .client span:last-child{
    color: #606060;
    border: 1px solid #606060;
  }

  .listInner_middle_bottom {
    display: flex;
    margin-top: 0.08rem;
  }
  .listInner_middle_bottom img {
    width: 0.15rem;
    height: 0.15rem;
    margin-right: 0.04rem; }
  .listInner_middle_bottom span {
    padding: 0;
    font-size: 0.1rem;
    color: #666666;
    margin:0;
  }
</style>
