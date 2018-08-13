<template>
    <div class="app">
      <mt-order-header></mt-order-header>
      <mt-section :items="list"></mt-section>
      <mt-index-footer></mt-index-footer>
    </div>
</template>

<script>
  import MtOrderHeader from "../components/xygPage/mtOrderHeader";
  import MtSection from "../components/xygPage/mtSection";
  import MtFooter from "../components/xygPage/mtFooter";
  import MtIndexFooter from "../components/common/mtIndexFooter";
  export default {
    name: "xygPage",
    components: {MtIndexFooter, MtSection, MtOrderHeader},
    data(){
      return{list:[]}
    },
    methods:{
      _initData(){
        fetch("http://localhost:3000/api/listgoods").then(response=>{
          if(response.ok){
            response.json().then(data=>{
              this.list = data;
              console.log(data);
            })
          }
        })
      }
    },
    created(){
      this._initData();
    }
  }
</script>

<style scoped>
  html,body{
    height: 100%;
  }
  .app{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
