<template>
  <footer>
    <router-link to="/"  flag="a">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
    </router-link>
    <router-link to="/nears"  flag="a">
          <i class="iconfont icon-fujin1"></i>
         <span>附近</span>
    </router-link>
    <router-link to=""  flag="span">
        <i class="iconfont icon-faxian"></i>
        <span>发现</span>
    </router-link>
    <router-link to=""  flag="a">
        <i class="iconfont icon-dingdan"></i>
        <span>订单</span>
    </router-link>
    <router-link to=""  flag="a">
        <i class="iconfont icon-wode_1"></i>
        <span>我的</span>
    </router-link>
  </footer>
</template>

<script>
    export default {
        name: "mtFooter"
    }
</script>
<style scoped>

  footer {
    width: 100%;
    height: 0.49rem;
    border-top: 1px solid #e5e5e5;
    display: -webkit-flex;
    -webkit-align-items: center;
    padding-top: 0.04rem;
    padding-bottom: 0.04rem;
    box-sizing: border-box; }
.guid{
  color: #aca9a3;
  font-size: 0.1rem;
}
  footer a {
    margin-top: 0.07rem;
    width: 20%;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }
  footer a .iconfont {
    font-size: 0.22rem;
    color: #646464; }
  footer a span {
    font-size: 0.1rem;
    color: #aca9a3;
    margin-top: 0.03rem;
  }

  footer a .icon-wode_1 {
    color: #55b6b1; }
</style>
