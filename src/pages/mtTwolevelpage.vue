<template>
  <div class="bbody">
    <mt-twplevelpage-header></mt-twplevelpage-header>
    <mt-twolevelpage-main :listone="twolevelrowlist" :listtwo="twolevelrowlistT"></mt-twolevelpage-main>
    <mt-twplevelpage-footer></mt-twplevelpage-footer>
  </div>
</template>

<script>
    import MtTwplevelpageHeader from "../components/common/mtTwplevelpageHeader";
    import MtTwolevelpageMain from "../components/mtTwolevelpage/mtTwolevelpageMain";
    import MtTwplevelpageFooter from "../components/common/mtTwplevelpageFooter";
    export default {
      name: "mtTwolevelpage",
      components: {MtTwplevelpageFooter, MtTwolevelpageMain, MtTwplevelpageHeader},
      data(){
          return{twolevelrowlist:[]};

      },
      methods:{
        _initTwolevelData(){
          fetch("http://localhost:3000/api/mttwolevelpageGettoshop").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.twolevelrowlist = data.gettotheshop;
                console.log(this.twolevelrowlist);
                this.twolevelrowlistT = data.nearby;
                console.log(this.twolevelrowlistT);
              })
            }
          })
        }
      },
      created(){
        this._initTwolevelData();
      }
    }
</script>

<style scoped>
html,body{
  height:100%;
}
.bbody{
  background:#fff;
  display: flex;
  height:100%;
  flex-direction: column;
  justify-content: space-between;
}
</style>

