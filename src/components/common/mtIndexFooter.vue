<template>
  <div class="footer">
    <router-link to="/" flag="span">
      <i class="iconfont icon-index1"></i>
      <p>首页</p>
    </router-link>
    <router-link to="/nearby" flag="span">
      <i class="iconfont icon-fujin"></i>
      <p>附近</p>
    </router-link>
    <router-link to="/discover" flag="span">
      <i class="iconfont icon-ziyuanmdpi"></i>
      <p>发现</p>
    </router-link>
    <router-link to="/dingdan" flag="span">
      <i class="iconfont icon-dingdan1"></i>
      <p>订单</p>
    </router-link>
    <router-link to="/mine" flag="span">
      <i class="iconfont icon-wode_1"></i>
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "mtIndexFooter"
    }
</script>

<style scoped>
  .footer {
    width: 100%;
    height: 0.49rem;
    background: #fdfdfd;
    display: -webkit-flex;
    justify-content: center;
    align-items: center; }
  .footer a {
    width: 20%;
    height: 0.39rem;
    padding: 0.05rem 0 0.05rem 0;
    text-align: center;
    display: -webkit-flex;
    flex-direction: column; }
  .footer a i {
    font-size: 0.22rem;
    color: #999; }
  .footer a p {
    font-size: 0.1rem;
    color: #aba8a2; }
  .footer a:hover i {
    font-size: 0.22rem;
    color: #0bb4b9; }
  .footer a:hover p {
    font-size: 0.1rem;
    color: #36beaf; }
  /*.footer a:nth-child(1) i {*/
    /*font-size: 0.22rem;*/
    /*color: #0bb4b9; }*/
  /*.footer a:nth-child(1) p {*/
    /*font-size: 0.1rem;*/
    /*color: #36beaf; }*/

</style>
