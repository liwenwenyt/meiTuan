<template>
  <div class="shop">
    <mt-header></mt-header>
    <mt-ico-title></mt-ico-title>
    <mt-activity></mt-activity>
    <mt-sec-header></mt-sec-header>
    <mt-sec-left :lists="product" :food="footLists" @addNum="sNum" @subNum="aNum"></mt-sec-left>
    <mt-footer :tn="totalNum" :tm="totalMoney" :tc="sub"></mt-footer>
  </div>

</template>
<script>
    import MtHeader from "../components/shopcarts/mtHeader";
    import MtIcoTitle from "../components/shopcarts/mtIcoTitle";
    import MtActivity from "../components/shopcarts/mtActivity";
    import MtSecHeader from "../components/shopcarts/mtSecHeader";
    import MtSecLeft from "../components/shopcarts/mtSecLeft";
    import MtFooter from "../components/shopcarts/mtFooter";
    export default {
        name: "mtShopCarts",
      components: {MtFooter, MtSecLeft, MtSecHeader, MtActivity, MtIcoTitle, MtHeader},
      data(){
          return{
            totalNum:0,
            totalMoney:0,
            sub:0,
            product:[],
            footLists:[],
            item:[]
          }
      },
      methods:{
        sNum(i){
          // console.log(i)
          this.counter(this.footLists);
        },
        aNum(i){
          this.counter(this.footLists);
        },
        counter(data){
          this.totalNum = 0;
          this.totalMoney=0;
          this.sub=0;
          data.forEach((item)=>{
            item.lists.forEach((i)=>{
              // console.log(i)
              this.totalNum +=i.qal;
              this.totalMoney += i.qal * i.money;
              // console.log(i.qal)
              // console.log(this.totalMoney)
              this.sub=20-this.totalMoney;
              console.log(this.totalNum)
            })
            })
        },
        initData(){
          fetch("http://localhost:3001/api/product").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                console.log(data);
                this.product=data;
              })
            }
          })
          fetch("http://localhost:3001/api/footLists").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.footLists=data;
                this.counter(data);
                // console.log(data)
              })
            }
          })
        }
      },
      created(){
          this.initData()
      },

      updated(){

      },
      watch:{

      }

    }
</script>

<style scoped>
.shop{
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
</style>
