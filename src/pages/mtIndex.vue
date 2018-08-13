<template>
  <div class="main">
    <mt-index-header></mt-index-header>
    <mt-index-main :lists="list"></mt-index-main>
    <mt-index-footer></mt-index-footer>
  </div>
</template>

<script>
  import MtIndexHeader from "../components/common/mtIndexHeader";
  import MtIndexMain from "../components/selfthing/mtIndexMain";
  import MtIndexFooter from "../components/common/mtIndexFooter";
  export default {
    components: {
      MtIndexFooter,
      MtIndexMain,
      MtIndexHeader
    },
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
    height:100%;
  }
  .main{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
