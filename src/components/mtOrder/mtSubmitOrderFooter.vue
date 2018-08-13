<template>
  <footer>
    <div class="footer_left">
      <span>合计￥&nbsp;</span>
      <span>21.1</span>
    </div>
    <div class="footer_right">
      <span>提交订单</span>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "mtSubmitOrderFooter"
    }
</script>

<style scoped>
  footer{
    width: 100%;
    height:0.5rem;
    display: flex;
    align-items: center;

  }
  .footer_left {
    width: 2.64rem;
    height:0.5rem;
    background: #333333;
    display: flex;
    align-items: center;
    justify-content: flex-end;


  }
  .footer_left span:nth-child(1){
    font-size:0.13rem ;
    color:#fff ;
  }
  .footer_left span:nth-child(2){
    font-size:0.16rem ;
    color:#fff ;
    margin-right: 0.12rem;
  }
  .footer_right {
    height:0.5rem;
    display: flex;
    width: 1.11rem;
    background: #ffd161;
    align-items: center;
    justify-content: center;
  }
  .footer_right span{
    font-size:0.16rem ;
    color: #333;
  }
</style>
