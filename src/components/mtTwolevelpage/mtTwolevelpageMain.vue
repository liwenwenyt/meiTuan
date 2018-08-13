<template>
  <div id="zong" class="zong">
    <mt-twolevelpage-search></mt-twolevelpage-search>
    <mt-twolevelpage-bannergif></mt-twolevelpage-bannergif>
    <mt-twolevelpage-class></mt-twolevelpage-class>
    <mt-twolevelpage-classbottom-banner></mt-twolevelpage-classbottom-banner>
    <mt-twolevelpage-discount-area></mt-twolevelpage-discount-area>
    <mt-twolevelpage-chooseforyou></mt-twolevelpage-chooseforyou>
    <mt-twolevelpage-sufuji></mt-twolevelpage-sufuji>
    <mt-twolevelpage-gettotheshop  :listonex="listone"></mt-twolevelpage-gettotheshop>
    <mt-twolevelpage-nearby :listtwox="listtwo"></mt-twolevelpage-nearby>
    <mt-twolevelpage-fixedshopcar></mt-twolevelpage-fixedshopcar>
  </div>
</template>

<script>
    import MtTwolevelpageSearch from "./mtTwolevelpageSearch";
    import MtTwolevelpageBannergif from "./mtTwolevelpageBannergif";
    import MtTwolevelpageClass from "./mtTwolevelpageClass";
    import MtTwolevelpageClassbottomBanner from "./mtTwolevelpageClassbottomBanner";
    import MtTwolevelpageDiscountArea from "./mtTwolevelpageDiscountArea";
    import MtTwolevelpageChooseforyou from "./mtTwolevelpageChooseforyou";
    import MtTwolevelpageSufuji from "./mtTwolevelpageSufuji";
    import MtTwolevelpageGettotheshop from "./mtTwolevelpageGettotheshop";
    import MtTwolevelpageNearby from "./mtTwolevelpageNearby";
    import MtTwolevelpageFixedshopcar from "./mtTwolevelpageFixedshopcar";
    export default {
        name: "mtTwolevelpageMain",
      components: {
        MtTwolevelpageFixedshopcar,
        MtTwolevelpageNearby,
        MtTwolevelpageGettotheshop,
        MtTwolevelpageSufuji,
        MtTwolevelpageChooseforyou,
        MtTwolevelpageDiscountArea,
        MtTwolevelpageClassbottomBanner,
        MtTwolevelpageClass,
        MtTwolevelpageBannergif,
        MtTwolevelpageSearch
        },
      props:["listone","listtwo"]
    }

</script>

<style scoped>
  .zong {
    -webkit-flex: 1;
    overflow-y: scroll;
    overflow-x: hidden; }
</style>
