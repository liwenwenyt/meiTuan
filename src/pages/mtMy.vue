<template>
  <div class="mineId">
      <mt-mine-header></mt-mine-header>
      <mt-mine-box></mt-mine-box>
      <mt-index-footer></mt-index-footer>
  </div>
</template>

<script>
    import MtMineHeader from "../components/mine/mtMineHeader";
    import MtMineBox from "../components/mine/mtMineBox";
    import MtFooter from "../components/common/mtFooter";
    import MtIndexFooter from "../components/common/mtIndexFooter";
    export default {
      name: "mtMy",
      components: {MtIndexFooter, MtMineBox, MtMineHeader},
    }
</script>

<style scoped>
html,body{
  height: 100%;
}
.mineId{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
</style>
