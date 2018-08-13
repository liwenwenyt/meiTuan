<template>
    <div class="nav_right">
      <mt-list  :list="n" v-for="(n,index) in footList" @qalAdd="qAdd" @qalSub="qSub"></mt-list>
    </div>
</template>

<script>
    import MtList from "./mtList";
    export default {
        name: "mtSecRight",
      props:["footList"],
      methods:{
          qAdd(i){
            // console.log(i)
            this.$emit("nAdd",i)
          },
        qSub(i){
            this.$emit("nSub",i)
        }
      },
      components: {MtList}
    }
</script>

<style scoped>
  .nav_right {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll; }
</style>
