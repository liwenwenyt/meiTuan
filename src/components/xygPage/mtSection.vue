<template>
  <section id="box">
    <div class="section_A nav">
      <h3>我的收藏</h3>
    </div>
    <div class="copydata">
      <mt-index-main-likegoods-one :itemt ="n" v-for="(n,index) in items"></mt-index-main-likegoods-one>
    </div>
    <div class="section_A">
      <h3>最近浏览</h3>
    </div>
    <div class="copydata">
      <mt-index-main-likegoods-one :itemt ="n" v-for="(n,index) in items"></mt-index-main-likegoods-one>
    </div>
  </section>
</template>

<script>
    import MtIndexMainLikegoodsOne from "../selfthing/mtIndexMainLikegoodsOne";
  export default {
        name: "mtSection",
    components: {MtIndexMainLikegoodsOne},
    props:["items"]
  }
</script>

<style scoped>
  section{
    background: #fff;
  }
  #box{
    width: 100%;
    flex: 1;
    overflow-y:scroll;
    overflow-x: hidden;
  }
  .nav{
    height: .515rem;
    padding-left: .14rem;
  }
  .section_A{
    margin-top: -1px;
    height: .515rem;
    padding-left: .14rem;
    background: #ffffff;
  }
  .section_A h3{
    font-size: .16rem;
    color: #222222;
    line-height: .515rem;
    text-indent: .1rem;
  }
  .section_B{
    width: 100%;
    height: .9rem;
    padding: 0 .14rem;
    box-sizing: border-box;
  }
  .section_B_1{
    height: .9rem;
    border-top: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
  }
  .section_B_1a{
    display: flex;
    margin: .155rem .14rem;
  }
  .section_B_1a_A{
    width: .8rem;
    height: .6rem;
    margin-right: .095rem;
  }
  .section_B_1a_B{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .section_B_1a_B h3{
    font-size: .15rem;
    color: #333333;
  }
  .section_B_1a_B img{
    width: .625rem;
    height: .1rem;
  }
  .section_B_1a_B p{
    font-size:.12rem;
    color: #787878;
  }
  .section_B_1a_B-a{
    font-size:.12rem;
    color: #787878;
  }
  .section_B_1b{
    display: flex;
  }
  .section_B_1b span{
    font-size: .1rem;
    color: #666666;
    margin-top: .14rem;
  }
  .section_jiage{
    display: flex;
    align-items: center;
  }
  .section_jiage h3{
    font-size: .14rem;
    color: #ed702d;
  }
  .msj{
    font-size: .11rem;
    color: #999999;
  }
  .xkj{
    font-size: .1rem;
    color: #ed712e;
    border: 1px solid #ed712e;
    padding: .02rem .05rem ;
  }

  .copydata{
    display:flex;
    flex-direction:column;
    padding:0 0.1rem;
  }
</style>
