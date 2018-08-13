<template>
      <div class="box">
        <mt-mine-collect></mt-mine-collect>
        <mt-mine-wallet></mt-mine-wallet>
        <mt-mine-swiper></mt-mine-swiper>
        <mt-mine-serve></mt-mine-serve>
      </div>
</template>

<script>
    import MtMineImg from "./mtMineImg";
    import MtMineCollect from "./mtMineCollect";
    import MtMineWallet from "./mtMineWallet";
    import MtMineSwiper from "./mtMineSwiper";
    import MtMineServe from "./mtMineServe";
    export default {
        name: "mtMineBox",
      components: {MtMineServe, MtMineSwiper, MtMineWallet, MtMineCollect}
    }
</script>

<style scoped>
  .box {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll; }

</style>
