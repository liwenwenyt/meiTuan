<template>
  <div class="boxa">
   <mt-nearby-header></mt-nearby-header>
    <mt-nearby-flex-box  :fooda="goodsListsfood" :lifea="goodsListslife" :playa="goodsListsplay" :hosta="goodsListshost" :alla="goodsListsall" ></mt-nearby-flex-box>
   <mt-index-footer></mt-index-footer>
  </div>
</template>
<script>
  import MtNearbyHeader from "../components/nearby/mtNearbyHeader";
  import MtFooter from "../components/common/mtFooter";
  import MtNearbyFlexBox from "../components/nearby/mtNearbyFlexBox";
  import MtIndexFooter from "../components/common/mtIndexFooter";

  export default {
    components: {MtIndexFooter, MtNearbyFlexBox, MtNearbyHeader},
    data(){
      return{
        goodsListsfood:[],
        goodsListslife:[],
        goodsListsplay:[],
        goodsListshost:[],
        goodsListsall:[],

      }
    },
    methods:{
      initData(){
        fetch("http://localhost:3000/api/minelist").then(response=>{
          if(response.ok){
            response.json().then(data=>{
              // console.log(data);
              this.goodsListsfood = data.food;
              console.log( this.goodsListsfood)
              this.goodsListslife=data.life;
              console.log( this.goodsListslife)
              this.goodsListsplay=data.play;
              console.log( this.goodsListsplay)
              this.goodsListshost=data.host;
              console.log( this.goodsListshost)
              this.goodsListsall=data.all;
              console.log( this.goodsListsall)
            })
          }
        })
      },
    },
    created(){
      this.initData()
    }
  }
</script>

<style scoped>
  html,body{
    height: 100%;
  }
.boxa{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background:#fff;
}
</style>
