<template>
  <header>
    <router-link to="/dingdan" falg="a">
      <i class="iconfont icon-fanhui"></i>
    </router-link>
    <h3>提交订单</h3>
  </header>
</template>

<script>
    export default {
        name: "mtSubmitOrderHeader"
    }
</script>

<style scoped>
  header {
    width: 100%;
    height: 0.44rem;
    display: -webkit-flex;
    padding-right: 0.12rem;
    align-items: center;
    box-sizing: border-box;
    background: #ffd266;
    padding-left: 0.2rem;
    box-sizing: border-box;

  }
  header a{
    padding:0;
    width:0.44rem;
    height:0.44rem;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  header .icon-fanhui{
    font-size:0.17rem ;
    color: #666666;
  }
  header h3{
    font-size:0.16rem;
    color:#333333;
    margin-left: 0.9rem;
  }
</style>
