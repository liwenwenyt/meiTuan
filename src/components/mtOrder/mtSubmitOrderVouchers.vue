<template>
  <div class="vouchers">
    <div class="vouchers_top">
      <p>抵用券</p>
      <div class="vouchers_right">
        <p>暂无可用</p>
        <img src="../../../static/img/wyright.png" alt="">
      </div>
    </div>
    <div class="vouchers_bottom">
      <div class="vouchers_bottom_top">
        <p>购买网红套餐，本单可用5元红包</p>
        <img src="../../../static/img/wychoose.png" alt="">
      </div>
      <div class="vouchers_bottom_bot">
        <p>总计可得30元红包,限西安使用</p>
        <div class="right">
          <p class="right_box">￥</p>
          <p class="right_box">30</p>
        </div>
        <div class="right">
          <p class="right_two">￥</p>
          <p class="right_two">15</p>
        </div>
      </div>
    </div>
    <div class="vouchers_top">
      <p>商家代金券</p>
      <div class="vouchers_right">
        <p>暂无可用</p>
        <img src="../../../static/img/wyright.png" alt="">
      </div>
    </div>
    <div class="imgBox">
      <img src="../../../static/img/wydian.png" alt="">
    </div>
    <!-- 优惠规则 -->
    <div class="rule">
      <div class="rule_left">
        <p>优惠规则</p>
        <img src="../../../static/img/wywen.png" alt="">
      </div>
      <div class="rule_right">
        <p>小计</p>
        <span>￥</span>
        <span>32.1</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtSubmitOrderVouchers"
    }
</script>

<style scoped>
  .vouchers_top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.09rem;
    padding-bottom: 0.09rem;
  }
  .right{
    display: flex;
    margin-left: 0.1rem;
    align-items: center;
  }
  .right_box{
    text-decoration: line-through;
  }
  .vouchers_top p{
    font-size:0.13rem ;
    color: #212121;
    margin-left: 0.1rem;
  }
  .right .right_two{
    font-size: 0.16rem;
    color: #fb4e44;
    /*color: red;*/
  }
  .vouchers_right{
    display: flex;
    align-items: center;
  }
  .vouchers_right p{
    font-size:0.13rem ;
    color: #a8a8a8;
    margin-right: 0.08rem;
  }
  .vouchers_bottom{
    padding: 0.1rem 0.12rem;
  }
  .vouchers_bottom_top{
    background: #fffaec;
    display: flex;
    justify-content: space-between;
  }
  .vouchers_right img{
    width: 0.1rem;
    height: 0.13rem;
    margin-right: 0.1rem;
  }
  .vouchers_bottom_top{
    display: flex;
    padding-top: 0.1rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    align-items: center;
  }
  .vouchers_bottom_top p{
    font-size:0.14rem ;
    color: #1a1917;
  }
  .vouchers_bottom_top img{
    width:0.17rem ;
    height:0.17rem ;

  }
  .vouchers_bottom_bot p{
    font-size:0.11rem ;
    color: #67625c;
  }
  .vouchers_bottom_bot{
    display: flex;
    /*margin-top: 0.07rem;*/
    padding-top: 0.07rem;
    background: #fffaec;
    padding-bottom: 0.10rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    align-items: center;
    /*justify-content: space-between;*/

  }

  .vouchers_bottom_bot span:nth-child(2){
    font-size: 0.1rem;
    color:#a8a8a8 ;
    margin-left: 0.9rem;
    text-decoration: line-through;
  }

  .vouchers_bottom_bot span:nth-child(3){
    font-size: 0.14rem;
    color:#e75f49 ;
  }

  /*优惠规则*/
  .rule{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.1rem;
    padding-right:0.1rem;
    box-sizing: border-box;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
  .rule_left{
    display: flex;
  }
  .time_top{
    display: flex;
  }
  .rule_left p{
    font-size:0.12rem ;
    color: #525252;
  }
  .rule_left img{
    width:0.14rem ;
    height:0.14rem;
    margin-left: 0.05rem;
  }
  .rule_right{
    display: flex;
  }
  .rule_right p{
    font-size:0.15rem ;
    color: #373737;
  }
  .rule_right span{
    font-size:0.16rem ;
    color:#ff4769;
  }
  .imgBox img{
    width: 3.55rem;
    height: 0.15rem;
  }

  .imgBox{
  box-sizing: border-box;
  padding-right: 0.1rem;
}
</style>
