<template>
  <div class="Advertisement">
    <div class="Advertisement_top">
      <div class="AdvertisementTop_row">
        <img src="../../assets/img/AdvertisementPic1.png"/>
        <img src="../../assets/img/AdvertisementPic2.png"/>
      </div>
      <div class="AdvertisementBot_row">
        <img src="../../assets/img/AdvertisementPic3.png"/>
        <img src="../../assets/img/AdvertisementPic4.png"/>
      </div>
    </div>
    <div class="Advertisement_Bot">
      <img src="../../assets/img/AdvertisementPic5.png"/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mtIndexMainAdvertisement"
    }
</script>

<style scoped>
  .Advertisement {
    width: 100%;
    margin-bottom: 0.1rem;
    display: -webkit-flex;
    flex-direction: column; }

  .Advertisement_top {
    width: 100%;
    box-sizing: border-box;
    padding: 0.1rem 0.11rem;
    background: #fff;
    display: -webkit-flex;
    flex-direction: column;
    margin-bottom: 0.1rem; }

  .AdvertisementTop_row {
    display: -webkit-flex;
    justify-content: space-between;
    margin-bottom: 0.05rem; }
  .AdvertisementTop_row img {
    width: 1.73rem;
    height: 1.15rem; }

  .AdvertisementBot_row {
    display: -webkit-flex;
    justify-content: space-between; }
  .AdvertisementBot_row img {
    width: 1.73rem;
    height: 1.15rem; }

  .Advertisement_Bot {
    width: 100%; }
  .Advertisement_Bot img {
    height: 0.94rem; }
</style>
