<template>
  <div class="icoTitle">
    <img src="../../assets/img/we_logle.jpg" alt="">
    <div class="icoContent">
      <h3>魏家凉皮（科技三路店）</h3>
      <p>公告:本店不支持网络外卖发票，谢谢合作</p>
      <p>
        <span>“味道赞”</span>
        <span>“服务好”</span>
        <span>“包装好”</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtIcoTitle"
    }
</script>

<style scoped>
  .icoTitle {
    width: 100%;
    height: 0.8rem;
    background: rgba(56, 53, 52, 0.8);
    border-bottom: 1px solid #0c0910;
    display:flex; }
  .icoTitle img {
    width: 0.85rem;
    height: 0.85rem;
    margin-left: 0.1rem;
    margin-top: 0.06rem; }
  .icoTitle .icoContent {
    width: 100%;
    height: 100%;
    margin-left: 0.09rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around; }
  .icoTitle .icoContent h3 {
    font-size: 0.2rem;
    color: #fff; }
  .icoTitle .icoContent p {
    font-size: 0.11rem;
    color: #96939c;
    display: flex; }
  .icoTitle .icoContent p:last-child span {
    border: 1px solid #a98638;
    border-radius: 0.07rem;
    font-size: 0.12rem;
    color: #a98638;
    text-align: center;
    line-height: 0.21rem;
    margin-right: 0.08rem; }

</style>
