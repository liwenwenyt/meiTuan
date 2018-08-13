<template>
  <div class="section">
    <div class="panel" v-for="p in panel">
      <div class="panel_title">
        {{p.title}}
      </div>
      <div class="panel_pic">
        <img  v-for="x in p.pic"  :src="x" />
      </div>
      <p class="panel_intro">
        {{p.author}}<i class="iconfont icon-CombinedShape-"></i><span>3.4万人</span>看过
      </p>
    </div>
    <a href="#" class="back_top"><i class="iconfont icon-huidingbu"></i></a>
  </div>
</template>

<script>
    export default {
        name: "mtSection",
        data(){
          return{
            panel:[
              {jingxuan:'title'},
              {jingxuan:'pic'},
              {jingxuan:'author'}
            ]
          }
        },
      methods:{
        initData(){
          fetch("http://localhost:3000/api/panel").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.panel = data.jingxuan;
              })
            }
          })
        }
      },
      created(){
        this.initData()
      }
    }
</script>

<style scoped>
  .section {
    display: flex;
    flex: 1;
    background:#fff;
    overflow-y: scroll;
    width: 100%;
    overflow-x: hidden;
    flex-direction: column;
  }

  .section .panel {
    border-bottom: 1px solid #ccc;
    padding: 0 .1rem;
  }

  .section .panel .panel_title {
    font-size: .14rem;
    font-weight: 600;
    line-height: .22rem;
    margin: .07rem 0;
  }

  .section .panel .panel_pic {
    display: flex;
    justify-content: space-between;
  }

  .section .panel .panel_pic img {
    width: 1.135rem;
    height: 0.855rem;
  }

  .section .panel .panel_intro {
    line-height: .375rem;
    font-size: .1rem;
    color: #9b9b9b;
  }

  .section .panel .panel_intro .icon-CombinedShape- {
    font-size: .08rem;
    margin: 0 .04rem 0 .14rem;
  }

  .section .icon-huidingbu {
    width: 0.25rem;
    height: 0.25rem;
    background: #fff;
    color: #000;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: .25rem;
    position: fixed;
    right: 5%;
    bottom: 15%;
  }

</style>
