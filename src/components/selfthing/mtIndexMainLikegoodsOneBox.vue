<template>
  <div class="list">
    <mt-index-main-likegoods-one></mt-index-main-likegoods-one>
  </div>
  <!--:item="n" v-for="(n,index) in itemy"-->
</template>

<script>
    import MtIndexMainLikegoodsOne from "./mtIndexMainLikegoodsOne";
    export default {
      props:["itemy"],
        name: "MtIndexMainLikegoodsOneBox",
      components: {MtIndexMainLikegoodsOne}
    }
</script>

<style scoped>
.list{
  width:100%;
  display:flex;
  flex-direction: column;
}
</style>
