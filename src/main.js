import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker.js'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')
