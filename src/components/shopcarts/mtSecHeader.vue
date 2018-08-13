<template>
  <div class="sec_header">
    <span class="show">点菜</span>
    <span>评论（9999+)</span>
    <span>商家</span>
  </div>
</template>

<script>
    export default {
        name: "mtSecHeader"
    }
</script>

<style scoped>
  .sec_header {
    width: 100%;
    height: 0.39rem;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: space-around; }
  .sec_header span {
    height: 100%;
    line-height: 0.39rem;
    font-size: 0.14rem;
    color: #818181; }
  .sec_header .show {
    color: #040404;
    background: url("../../assets/img/we_8.jpg") no-repeat bottom center; }

</style>
