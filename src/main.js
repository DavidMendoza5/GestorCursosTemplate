import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuex from 'vuex';
import veeValidate from 'vee-validate';
import '@babel/polyfill'

Vue.use(Vuex);
Vue.use(veeValidate);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
