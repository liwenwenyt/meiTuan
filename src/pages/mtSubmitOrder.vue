<template>
    <div class="order">
      <mt-order-header></mt-order-header>
      <mt-order-box></mt-order-box>
      <mt-submit-order-footer></mt-submit-order-footer>
    </div>
</template>

<script>
    import MtOrderHeader from "../components/mtOrder/mtSubmitOrderHeader";
    import MtOrderBox from "../components/mtOrder/mtOrderBox";
    import MtSubmitOrderFooter from "../components/mtOrder/mtSubmitOrderFooter";
    export default {
        name: "mtOrder",
      components: {MtSubmitOrderFooter, MtOrderBox,MtOrderHeader}
    }
</script>

<style scoped>
  html,body{
    height: 100%;
  }
  .order{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
</style>
