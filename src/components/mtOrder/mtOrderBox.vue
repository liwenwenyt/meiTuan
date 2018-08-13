<template>
  <div class="box">
    <mt-submit-order-title></mt-submit-order-title>
    <mt-submit-order-wrap></mt-submit-order-wrap>
  </div>
</template>

<script>
  import MtSubmitOrderTitle from "./mtSubmitOrderTitle";
  import MtSubmitOrderWrap from "./mtSubmitOrderWrap";
  import MtSubmitOrderFooter from "./mtSubmitOrderFooter";
  export default {
    components: { MtSubmitOrderWrap, MtSubmitOrderTitle}
  }
</script>

<style scoped>
.box{
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
