<template>
  <div class="zong">
      <mt-index-main-banner></mt-index-main-banner>
      <mt-index-main-classification></mt-index-main-classification>
      <mt-index-main-advertisement></mt-index-main-advertisement>
      <mt-index-main-likegoods :itemx="lists"></mt-index-main-likegoods>
  </div>
</template>

<script>
  import MtIndexMainBanner from "./mtIndexMainBanner";
  import MtIndexMainClassification from "./mtIndexMainClassification";
  import MtIndexMainAdvertisement from "./mtIndexMainAdvertisement";
  import MtIndexMainLikegoods from "./mtIndexMainLikegoods";
  export default {
    components: {MtIndexMainLikegoods, MtIndexMainAdvertisement, MtIndexMainClassification, MtIndexMainBanner},
    props:["lists"]
  }
</script>

<style scoped>
  .zong {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden; }
</style>
