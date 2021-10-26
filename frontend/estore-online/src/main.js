import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './init'
import router from '@/router'
// import stores from '@/stores';

Vue.config.productionTip = false

new Vue({
  router,
  // stores,
  vuetify,
  render: h => h(App)
}).$mount('#app')
