<template>
  <ul>
    <li >
      <img :src="item.pic" v-if="item.pic"/>
      <div class="pro">
        <span>{{item.title}}</span>
        <span v-if="item.num>0">1</span>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "mtProduct",
      props:["item"],
    }
</script>

<style scoped>
   ul {
    width: 100%; }
   ul li {
    width: 100%;
    height: 0.5rem;
    display: flex;
    align-items: center;
    padding-left: 0.09rem;
    padding-right: 0.05rem;
     justify-content: space-between;
    box-sizing: border-box; }
   .pro{
     display: flex;
     width: 100%;
     justify-content: space-between;
   }
   .pro img {
    width: 0.17rem;
    height: 0.17rem;
    margin-right: 0.05rem; }
   .pro span {
    font-size: 0.14rem;
    color: #7b7c7e; }
   .pro span:nth-of-type(2){
     width: 0.12rem;
     height: 0.12rem;
     background: #e53c38;
     border-radius: 50%;
     font-size: 0.1rem;
     text-align: center;
     color: #fff;
     margin-top: -0.1rem;
     line-height: 0.12rem;
   }
  /*section .nav_left ul .list {*/
    /*background: #fff; }*/
  /*section .nav_left ul .list span {*/
    /*color: #1d1d1d; }*/

</style>
