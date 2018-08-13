<template>
  <div class="footer">
    <a href="javascript:;" class="footer_a"><i class="iconfont icon-shouye"></i>首页</a>
    <a href="javascript:;" class="footer_a"><i class="iconfont icon-fujin1"></i>附近</a>
    <router-link to="/" flag="a" class="qwe"><i class="iconfont icon-dingdan"></i>发现</router-link>
    <a href="javascript:;" class="footer_a active"><i class="iconfont icon-ziyuanmdpi"></i>订单</a>
    <a href="javascript:;" class="footer_a"><i class="iconfont icon-wode-"></i>我的</a>
  </div>
</template>

<script>
    export default {
        name: "mtFooter"
    }
</script>

<style scoped>
  .footer {
    display: flex;
    height: .49rem;
    border-top: 1px solid #e5e5e5;
  }

  .footer a {
    font-size: .1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666668;
  }

  .footer a i {
    font-size: .22rem;
  }

  .footer .active {
    color: #01adc3;
  }

</style>
