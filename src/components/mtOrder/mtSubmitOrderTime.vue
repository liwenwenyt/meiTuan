<template>
  <div class="time_box">
    <div class="time">
      <div class="time_top">
        <div class="time_left">
          <img src="../../../static/img/wytime.png" alt="">
          <p>准时宝</p>
          <img src="../../../static/img/wywen.png" alt="">
        </div>
        <div class="time_right">
          <span>￥</span>
          <span>0.32</span>
          <div class="chooseButton">
            <input type="checkbox" name="">
          </div>
        </div>
      </div>
      <div class="time_bottom">
        <p>超时10分钟7折，超时30分钟三折</p>
      </div>
    </div>
    <!-- 号码保护 -->
    <div class="time">
      <div class="time_top">
        <div class="time_left">
          <img src="../../../static/img/wysuo.png" alt="">
          <p>号码保护</p>
          <img src="../../../static/img/wywen.png" alt="">
        </div>
        <div class="time_right">
          <div class="chooseButton">
            <input type="checkbox" name="">
          </div>
        </div>
      </div>
      <div class="time_bottom">
        <p id="phone">对商家、骑手隐藏您的真实手机号、保护您的隐私</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtSubmitOrderTime"
    }
</script>

<style scoped>
  .time_box{
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
  }
  .time{
    display: flex;
    flex-direction: column;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    box-sizing: border-box;
    padding-left: 0.1rem;
    padding-right:0.1rem;
    background: #fff;
  }
  .time_left{
    display: flex;
    align-items: center;
  }
  .time_left img:nth-child(1){
    width:0.17rem ;
    height: 0.21rem;
  }
  .time_top{
    display: flex;
    justify-content: space-between;
  }
  .time_left p{
    font-size: 0.13rem;
    color: #242424;
    margin-left: 0.1rem;
  }
  .time_left img:nth-child(3){
    width:0.14rem ;
    height:0.14rem;
    margin-left: 0.05rem;
  }
  .time_right {
    display: flex;
    align-items: center;
  }

  .time_right span{
    font-size:0.16rem ;
    color: #e26144;
  }
  .time_right span:nth-child(2){
    margin-right: 0.11rem;
  }
  .chooseButton {
    display: flex;
  }
  .time_right .chooseButton input{
    width:0.23rem ;
    height:0.2rem;
    border:none;
    outline: none;
    border-radius: 50%;
  }
  .time_bottom p{
    font-size: 0.11rem;
    color: #ff4169;
    margin-top: 0.04rem;
  }
  #phone{
    color: #a5a5a5;
  }


</style>
