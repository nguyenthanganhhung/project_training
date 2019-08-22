/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { store } from './store/store'
import VueRouter from 'vue-router'
// import FormLogin from './components/FormLogin.vue'
// import Master from './components/Master.vue'
import LearnCss from './components/LearnCss.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(LearnCss)
  // render: h => h(Master)
  // components: { App },
  // template: '<App/>'
})
