<template>
  <div class="app">
    <mt-header></mt-header>
    <mt-section></mt-section>
    <mt-index-footer></mt-index-footer>
  </div>
</template>

<script>
    import MtHeader from "../components/discover/mtHeader";
    import MtSection from "../components/discover/mtSection";
    import MtFooter from "../components/discover/mtFooter";
    import MtIndexFooter from "../components/common/mtIndexFooter";
    export default {
        name: "mtDiscover",
      components: {MtIndexFooter, MtFooter, MtSection, MtHeader},
      data(){
        return{discover:[]}
      },
      methods:{
        _initDatadiscover(){
          fetch("http://localhost:3000/api/panel").then(response=>{
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
        this._initDatadiscover();
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
