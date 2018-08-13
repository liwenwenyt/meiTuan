<template>
  <section>
    <div class="nav_left">
      <mt-product :item="n" v-for="(n,index) in lists" ></mt-product>
    </div>
    <mt-sec-right :footList="food" @nAdd="addQal" @nSub="subQal" ></mt-sec-right>
  </section>

</template>

<script>
    import MtProduct from "./mtProduct";
    import MtSecRight from "./mtSecRight";
    export default {
        name: "mtSecLeft",
      props:["lists","food"],
      methods:{
          addQal(i){
            // console.log(i)
            this.$emit("addNum",i)
          },
        subQal(i){
            this.$emit("subNum",i)
        }
      },
      components: {MtSecRight, MtProduct}
    }
</script>

<style scoped>
  section {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    width: 100%; }
  section .nav_left {
    width: 0.82rem;
    background: #f6f7f9; }



</style>
