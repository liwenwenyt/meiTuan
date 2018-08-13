<template>
<div class="likegoods">
  <mt-index-main-likegoods-title></mt-index-main-likegoods-title>
  <mt-index-main-likegoods-one :itemt ="n" v-for="(n,index) in itemx"></mt-index-main-likegoods-one>
  <mt-index-main-likegoods-two></mt-index-main-likegoods-two>
</div>
</template>

<script>
    import MtIndexMainLikegoodsTitle from "./mtIndexMainLikegoodsTitle";
    import MtIndexMainLikegoodsOne from "./mtIndexMainLikegoodsOne";
    import MtIndexMainLikegoodsTwo from "./mtIndexMainLikegoodsTwo";
    export default {
      props:["itemx"],
        name: "mtIndexMainLikegoods",
      components: {
        MtIndexMainLikegoodsOne,
        MtIndexMainLikegoodsTwo,
        MtIndexMainLikegoodsTitle}
    }
</script>

<style scoped>
  .likegoods {
    width: 100%;
    background: #fff;
    padding: 0 0.1rem;
    box-sizing: border-box;
    display: -webkit-flex;
    flex-direction: column; }
</style>
