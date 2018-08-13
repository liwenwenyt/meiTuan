<template>
  <div class="header">
    <div class="header_top">
      <span>发现</span>
    </div>
    <div class="header_bottom">
      <a href="javascript:;" class="header_a choice">精选</a>
      <a href="javascript:;" class="header_a">关注</a>
      <a href="javascript:;" class="header_a">爱美食</a>
      <a href="javascript:;" class="header_a">出去浪</a>
      <a href="javascript:;" class="header_a">生活控</a>
      <a href="javascript:;" class="header_a">变漂亮</a>
      <a href="javascript:;" class="header_a">约电影</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtHeader"
    }
</script>

<style scoped>

  .header {
    display: flex;
    height: .88rem;
    background:#fff;
    flex-direction: column;
  }

  .header .header_top {
    display: flex;
    height: 0.44em;
    justify-content: center;
    align-items: center;
    background: #fff;
  }

  .header .header_top span {
    font-weight: 600;
    color: #000;
    font-size: .16rem;
  }

  .header .header_bottom {
    display: flex;
    height: .44rem;
    box-sizing: border-box;
    border-top: 1px solid #aaaaaa;
    border-bottom: 1px solid #e5e5e5;
    overflow-x: scroll;
    overflow-y: hidden;
    align-items: center;
  }

  .header .header_bottom .header_a {
    padding: 0 30px;
    color: #646464;
    font-size: .14rem;
    height: 100%;
    line-height: .44rem;
    white-space: nowrap;
  }

  .header .header_bottom .choice {
    color: #27d4c1;
    border-bottom: 4px solid #27d4c1;
  }

  .header_bottom::-webkit-scrollbar {
    display: none; }
</style>
