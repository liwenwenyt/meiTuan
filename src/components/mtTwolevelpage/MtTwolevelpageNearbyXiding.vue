<template>
  <div id="nearxiding" class="nearbyMerchants_xiding">
    <a href="#">满减优惠</a>
    <a href="#">新商家</a>
    <a href="#">点评高分</a>
    <a href="#">美团专送</a>
  </div>
</template>

<script>
    export default {
        name: "MtTwolevelpageNearbyXiding",
      mounted(){
        $(function(){
          var tit = document.getElementById("nearxiding");
          var bodyBox = document.getElementById("zong");
          var titleTop = tit.offsetTop;
          bodyBox.onscroll = function(){
            var btop = bodyBox.scrollTop;
            if(btop>titleTop){
              tit.style.cssText = "position:fixed;top:0.44rem;left:0;z-index:1;";
            }else{
              tit.style.cssText = "";
            }
          }
        })
      }
    }
</script>

<style scoped>
  .nearbyMerchants_xiding {
    background: #fff;
    margin-bottom: 0.17rem;
    width: 100%;
    display: -webkit-flex;
    justify-content: space-between; }
  .nearbyMerchants_xiding a {
    width: 23%;
    height: 0.3rem;
    background: #f9f9f9;
    font-size: 0.11rem;
    color: #333;
    line-height: 0.3rem;
    text-align: center; }
</style>
