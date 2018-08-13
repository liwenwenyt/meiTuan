<template>
  <div class="pay">
    <div class="pay_top">
      <p>支付方式</p>
      <p>在线支付</p>
    </div>
    <div class="pay_remake">
      <p>备注</p>
      <div class="pay_remake_right">
        <p>口味、偏好等要求</p>
        <img src="img/wyright" alt="">
      </div>
    </div>
    <div class="num">
      <p>餐具数量</p>
      <div class="num_right">
        <div class="num_right_img">
          <img src="img/wytree.png" alt="">
          <p>一起为环保助力</p>
        </div>
        <span>未选择</span>
        <img src="img/wyright.png" alt="">
      </div>
    </div>
    <div class="bill">
      <p>发票</p>
      <span>该商家不支持开发票</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtSubmitOrderPay"
    }
</script>

<style scoped>
  .pay{
    background: #fff;
  }
  .pay_top{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding:0.15rem 0.1rem;
    border-bottom: 1px solid #f0f0f0;

  }
  .pay_top p{
    font-size:0.13rem ;
    color: #333333;
  }
  .pay_remake{
    display: flex;
    padding:0.15rem 0.1rem;

    border-bottom: 1px solid #f0f0f0;

  }
  .pay_remake p{
    font-size: 0.13rem ;
    color:  #333333;
  }
  .pay_remake_right {
    display: flex;
  }
  .pay_remake_right p{
    font-size: 0.13rem ;
    color:  #666666;
  }
  .pay_remake_right img{
    width: 0.1rem;
    height: 0.13rem;
  }
  .num{
    display: flex;
    padding:0.15rem 0.1rem;
    border-bottom: 1px solid #f0f0f0;
    justify-content: space-between;
    align-items: center;
  }
  .num p{
    font-size: 0.13rem ;
    color:  #333333;
  }
  .num_right{
    display: flex;
    align-items: center;
  }
  .num_right_img{
    display: flex;
    width: 1.17rem;
    height: 0.25rem;
    background: #f5fffb;
    border-radius: 0.12rem;
    align-items: center;
    margin-right: 0.08rem;
  }

  .num_right_img p{
    font-size: 0.12rem;
    color: #4dc6a5;
    margin-left: 0.08rem;
  }
  .num_right span{
    font-size: 0.13rem ;
    color:  #666666;
    margin-right: 0.1rem;
  }
  .num_right img{
    width:0.1rem ;
    height:0.13rem ;
  }
  .num_right_img img{
    width:0.15rem ;
    height:0.13rem ;
  }
  .bill{
    display: flex;
    padding:0.15rem 0.1rem;
    border-bottom: 1px solid #f0f0f0;
    align-items: center;
    justify-content: space-between;
  }
  .bill p{
    font-size:0.13rem ;
    color: #333333;
  }
  .bill span{
    font-size:0.13rem ;
    color: #cccccc;
  }


</style>
