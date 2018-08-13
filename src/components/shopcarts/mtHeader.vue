<template>
  <div class="zt">
    <header>
      <router-link to="/" flag="a" class="shopcarschange">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <i class="iconfont icon-sousuo"></i>
      <i class="iconfont icon-empty-star"></i>
      <i class="iconfont icon-pin"></i>
      <i class="iconfont icon-83"></i>
    </header>
  </div>

</template>

<script>
    export default {
        name: "mtHeader"
    }
</script>

<style scoped>
  .zt{
    width: 100%;
  }
  header {
    width: 100%;
    height: 0.44rem;
    background: rgba(56, 53, 52, 0.8);
    display: flex;
    align-items: center; }
  .shopcarschange{
    width:0.44rem;
    height:0.44rem;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .shopcarschange i {
    font-size: 0.2rem;
    color: #fff;
  }
  header .iconfont {
    font-size: 0.2rem;
    color: #fff; }
  header .icon-fanhui {
    margin-left: 0.2rem; }
  header .icon-sousuo {
    margin-left: 1.87rem; }
  header .icon-empty-star {
    margin-left: 0.2rem; }
  header .icon-pin {
    margin-left: 0.2rem; }
  header .icon-83 {
    margin-left: 0.2rem; }

</style>
