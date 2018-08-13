<template>
  <div class="sub">
    <dl>
      <dt><a>{{list.header}}</a></dt>
      <dd>
        <mt-foot-list :id="index" :item="n" v-for="(n,index) in list.lists"  @lAdd="tAdd" @lSub="tSub"></mt-foot-list>
      </dd>
    </dl>
  </div>
</template>

<script>
    import MtFootList from "./mtFootList";
    export default {
        name: "mtList",
      props:["list"],
      methods:{
        tAdd(i){
          // console.log(i)
          this.$emit("qalAdd",i)
          },
        tSub(i){
          this.$emit("qalSub",i)
        }
      },

      components: {MtFootList}
    }
</script>

<style scoped>
  .sub {
    width: 100%;
    padding-left: 0.1rem;
    box-sizing: border-box;
    display:flex; }
  .sub dl {
    width: 100%; }
   .sub dl dt {
    width: 100%;
    height: 0.36rem;
    display: flex;
    opacity: .6; }
 .sub dl dt a {
    font-size: 0.14rem;
    color: #2c2c2c;
    text-align: center;
    line-height: 0.36rem; }
  .sub dl dd {
    overflow-y: hidden;
    overflow-x: hidden; }
</style>
