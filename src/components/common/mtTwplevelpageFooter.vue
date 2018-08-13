<template>
  <div class="footer">
    <a href="#">
      <i class="iconfont icon-index1"></i>
      <p>首页</p>
    </a>
    <a href="#">
      <i class="iconfont icon-faxian"></i>
      <p>发现</p>
    </a>
    <a href="#">
      <i class="iconfont icon-dingdan"></i>
      <p>订单</p>
    </a>
    <a href="#">
      <i class="iconfont icon-wode-"></i>
      <p>我的</p>
    </a>
  </div>
</template>

<script>
    export default {
        name: "mtTwplevelpageFooter"
    }
</script>

<style scoped>
  .footer {
    width: 100%;
    height: 0.49rem;
    border-top: 1px solid #c4c4c4;
    display: -webkit-flex;
    justify-content: center;
    align-items: center; }
  .footer a {
    width: 25%;
    height: 0.39rem;
    padding: 0.05rem 0 0.05rem 0;
    text-align: center;
    display: -webkit-flex;
    flex-direction: column; }
  .footer a i {
    font-size: 0.22rem;
    color: #686868; }
  .footer a p {
    font-size: 0.1rem;
    color: #aba8a2; }
  .footer a:nth-child(1) i {
    font-size: 0.22rem;
    color: #ffbd29; }
  .footer a:nth-child(1) p {
    font-size: 0.1rem;
    color: #ffbd29; }
  .footer a:nth-child(4) i {
    font-size: 0.22rem;
    color: #686868;
    font-weight: 600; }
</style>
