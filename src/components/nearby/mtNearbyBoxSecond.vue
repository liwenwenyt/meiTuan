<template>
  <div  class="list">
    <mt-nearby-one-list  :item="n" v-for="(n,index) in lists"></mt-nearby-one-list>
  </div>
</template>

<script>
    import MtNearbyOneList from "./mtNearbyOneList";
    export default {
        name: "mtNearbyBoxSecond",
      components: {MtNearbyOneList},
      props:["lists"]
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
