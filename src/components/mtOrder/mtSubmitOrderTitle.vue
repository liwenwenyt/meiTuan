<template>
  <div>
  <div class="wybg"></div>
  <div class="mes">
    <div class="mes_top	">
      <div class="mes_top_left">
        <h4>立人科技园</h4>
        <p>李豆豆(女士)&nbsp;15545465451</p>
      </div>
      <img src="img/wyright.png" alt="">
    </div>
    <div class="mes_middle">
      <p>设置为常用地址</p>
      <span>家</span>
      <span>公司</span>
      <span>学校</span>
      <img src="img/wyerror.png" alt="">
    </div>
    <div class="mes_bottom">
      <h5>立即送出</h5>
      <p>大约16.34送达</p>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "mtSubmitOrderTitle"
    }
</script>

<style scoped>
  .wybg{
    width: 100%;
    height: 0.82rem;
    background: #ffd266;
  }
  .mes{
    width: 3.55rem;
    background: white;
    background: #fff;
    margin-left: 0.1rem;
    border-radius: 0.1rem;
    margin-top:-0.45rem;
  }
  .mes_top_left{
    margin-left: 0.9rem;
    margin-top: 0.17rem;

  }
  .mes_top_left h4{
    font-size:0.17rem ;
    color:#333333 ;
  }
  .mes_top_left p{
    font-size:0.13rem ;
    color:#333333 ;
    margin-top: 0.11rem;
  }
  .mes_top{
    display: flex;
    text-align: center;
    align-items: center;
  }

  .mes_top img{
    width: 0.1rem;
    height: 0.13rem;
    margin-left: 0.31rem;
    margin-left: 0.69rem;

  }
  .mes_middle{
    width: 3.2rem;
    display: flex;
    margin-top: 0.17rem;
    background: #f8f8f8;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    align-items: center;
    margin-left: 0.17rem;
    border-radius: 0.08rem;
  }
  .mes_middle p{
    font-size: 0.14rem;
    color: #999999;
    margin-left: 0.1rem;
  }
  .mes_middle span{
    font-size:0.14rem ;
    color:#a2a2a2 ;
    width:0.48rem ;
    height: 0.25rem;
    border-radius: 0.05rem;
    border:1px solid #a2a2a2 ;
    text-align: center;
    line-height: 0.25rem;
    margin-left: 0.1rem;

  }
  .mes_middle img{
    width: 0.1rem;
    height: 0.13rem;
    margin-left: 0.1rem;
  }
  .mes_bottom{
    display: flex;
    padding-top: 0.16rem;
    padding-bottom: 0.16rem;
    border-top: 1px solid #ececec;
    padding-left: 0.11rem;
    padding-right: 0.11rem;
    box-sizing:border-box;
    margin-top: 0.1rem;
    align-items: center;
  }
  .mes_bottom h5{
    font-size: 0.16rem;
    color: #333333;
    margin-left: 0.17rem;
  }
  .mes_bottom p{
    font-size: 0.12rem;
    color: #348bed;
    margin-left: 0.08rem;

  }

</style>
