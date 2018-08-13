<template>
    <div class="list">
      <mt-nearby-life :iteml="n" v-for="(n,index) in listsl"></mt-nearby-life>
    </div>
</template>

<script>
    import MtNearbyLife from "./mtNearbyLife";
    export default {
        name: "mtNearbyLifeBox",
      components: {MtNearbyLife},
      props:["listsl"]
    }
</script>

<style scoped>
  .list {
    width: 100%;
    box-sizing: border-box;
    padding-left: 0.14rem;
    padding-right: 0.14rem;
    background:#fff;
  }
</style>
