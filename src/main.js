// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "../static/css/public.css"
import"./assets/css/iconfont.css"
import"./assets/swiper/css/swiper.css"
import"./assets/js/jquery-1.11.3"



Vue.config.productionTip = false
/* eslint-disable no-new */
// require("./assets/css/common.css")

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
