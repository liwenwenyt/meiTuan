<template>
    <div class="list">
      <mt-nearby-all :itema="n" v-for="(n,index) in listsa"></mt-nearby-all>
    </div>
</template>

<script>
    import MtNearbyAll from "./mtNearbyAll";
    export default {
        name: "mtNearbyAllBox",
      components: {MtNearbyAll},
      props:["listsa"]
    }
</script>

<style scoped>
  .list {
    width: 100%;
    box-sizing: border-box;
    padding-left: 0.14rem;
    padding-right: 0.14rem;
  }
</style>
