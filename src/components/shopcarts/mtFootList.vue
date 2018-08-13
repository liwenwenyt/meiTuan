<template>
  <div class="foot_list">
      <img :src="item.pic" alt="">
      <div class="list_cont">
        <p>{{item.title}}</p>
        <span v-if="item.span">{{item.span}}</span>
        <img :src="item.img" v-if="item.img">
        <p>
          <span>{{item.salas}}</span>
          <span>{{item.zan}}</span>
        </p>
        <div class="money">
          <span>￥{{item.money}}</span>
          <div class="add">
            <button v-if="item.qal>0" class="btn" @click="sub(id)">-</button>
            <span v-if="item.qal>0" >{{item.qal}}</span>
            <button @click="add(id)">+</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "mtFootList",

      props:["item","id",],
      methods:{
        add(i){
          this.item.qal++;
          this.$emit("lAdd",i)
        },
        sub(i){

          if(this.item.qal<=0){
            this.item.qal=0;
          }else{
            this.item.qal--;
            this.$emit("lSub",i)
          }
        },
        // addQ(data){
        //   this.totalNum = 0;
        //   this.totalMoney=0;
        //   console.log(data)
        //  data.forEach((item)=>{
        //     this.totalNum +=item.qal;
        //     this.totalMoney += item.qal * item.price
        //   })
        // },
      }
    }
</script>

<style scoped>
   .foot_list {
    display: flex;
    justify-content: space-between;
    padding-right: 0.1rem;
    box-sizing: border-box;
    width: 100%;
    height: 0.76rem;
    margin-bottom: 0.25rem; }

   .foot_list .list_cont {
     flex: 1;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.1rem; }
  .list_cont span{
    font-size: 0.1rem;
    color: #c5c5c5;
    margin-bottom: 0.1rem;

  }
  .list_cont img{
    margin-bottom: 0.1rem;
    width: 0.6rem;
    height: 0.15rem;
  }
  .foot_list .list_cont p:nth-of-type(1) {
    font-size: 0.16rem;
    color: #101010; }
  .foot_list .list_cont p:nth-of-type(2) {
    font-size: 0.1rem;
    color: #c5c5c5;
    margin-top: -0.1rem;
  }
 .foot_list .list_cont p:nth-of-type(2) span {
    margin-right: 0.12rem; }
   .money{
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   .money span{
     font-size: 0.16rem;
     color: #ff3244;
     margin-bottom: 0;
   }
   .add {
     width: 0.85rem;
     height: 0.27rem;
     /*display: flex;*/
     /*justify-content: space-between;*/
     /*align-items: center;*/

   }
   .add button{
     width: 0.26rem;
     height: 0.26rem;
     border-radius: 50%;
     background: #ffb323;
     font-size: 0.2rem;
     text-align: center;
     border: none;
     outline: none;
     float: right;
   }
   .add .btn{
     background: #fff;
     border: 1px solid #dedede;
     float: left;
   }
   .add span{
     font-size: 0.14rem;
     color: #222222;
     float: left;
     margin-left: 0.13rem;
     line-height: 0.27rem;
   }
</style>
