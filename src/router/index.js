import Vue from 'vue'
import Router from 'vue-router'
import mtIndex from '../pages/mtIndex.vue'
import mtTwolevelpage from '../pages/mtTwolevelpage.vue'
import mtShopCarts from '../pages/mtShopCarts'
import mtDiscover from '../pages/mtDiscover'
import mtDingdan from '../pages/xygPage'
import mtMy from '../pages/mtMy'
import mtNearbyS from '../pages/mtNearbyS'
import mtSubmitOrder from '../pages/mtSubmitOrder'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  linkActiveClass:"tab",
  routes: [
    {
      path: '/',
      name: 'mtIndex',
      component: mtIndex
    },

    {
      path: '/levelpage',
      name: 'mtTwolevelpage',
      component: mtTwolevelpage
    },

    {
      path: '/shopcarts',
      name: 'mtShopCarts',
      component: mtShopCarts
    },

    {
      path: '/discover',
      name: 'mtDiscover',
      component: mtDiscover
    },

    {
      path: '/dingdan',
      name: 'mtDingdan',
      component: mtDingdan
    },

    {
      path: '/mine',
      name: 'mtMy',
      component: mtMy
    },

    {
      path: '/nearby',
      name: 'mtNearbyS',
      component: mtNearbyS
    },

    {
      path: '/submitorder',
      name: 'mtSubmitOrder',
      component: mtSubmitOrder
    }
  ]
})
