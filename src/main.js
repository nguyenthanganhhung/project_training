// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { store } from './store/store'
// import Master from './components/Master.vue'
import LearnFrontCss from './components/LearnFrontCss.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(LearnFrontCss)
  // components: { App },
  // template: '<App/>'
})
