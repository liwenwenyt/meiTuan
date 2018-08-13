<template>
    <div class="list">
      <mt-nearby-host :itemh="n" v-for="(n,index) in listsh"></mt-nearby-host>
    </div>
</template>

<script>
    import MtNearbyHost from "./mtNearbyHost";
    export default {
        name: "mtNearbyHostBox",
      components: {MtNearbyHost},
      props:["listsh"]
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
