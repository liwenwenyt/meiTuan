<template>
    <div class="list">
      <mt-nearby-play :itemp="n" v-for="(n,index) in listsp"></mt-nearby-play>
    </div>
</template>

<script>
    import MtNearbyPlay from "./mtNearbyPlay";
    export default {
        name: "mtNearbyPlayBox",
      components: {MtNearbyPlay},
      props:["listsp"]
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
