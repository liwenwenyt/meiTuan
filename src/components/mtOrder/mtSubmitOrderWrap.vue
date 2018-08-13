<template>
    <div  class="pro">
      <mt-sumit-order-merchant></mt-sumit-order-merchant>
     <mt-submit-order-list></mt-submit-order-list>
      <mt-submit-order-money></mt-submit-order-money>
      <mt-submit-order-vouchers></mt-submit-order-vouchers>
      <mt-submit-order-time></mt-submit-order-time>
      <mt-submit-order-pay></mt-submit-order-pay>
    </div>
</template>

<script>
    import MtSumitOrderMerchant from "./mtSumitOrderMerchant";
    import MtSubmitOrderList from "./mtSubmitOrderList";
    import MtSubmitOrderMoney from "./mtSubmitOrderMoney";
    import MtSubmitOrderVouchers from "./mtSubmitOrderVouchers";
    import MtSubmitOrderTime from "./mtSubmitOrderTime";
    import MtSubmitOrderPay from "./mtSubmitOrderPay";

    export default {
        name: "mtSubmitOrderWrap",
      components: {
        MtSubmitOrderPay,
        MtSubmitOrderTime, MtSubmitOrderVouchers, MtSubmitOrderMoney, MtSubmitOrderList, MtSumitOrderMerchant}
    }
</script>

<style scoped>
  .pro{
    width: 100%;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    box-sizing: border-box;
    margin-top: 0.1rem;
    overflow-y: hidden;
  }
</style>
