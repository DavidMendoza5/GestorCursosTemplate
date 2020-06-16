import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuex from 'vuex';
import veeValidate from 'vee-validate';
import '@babel/polyfill'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBiVhuBuYmsQ7jQ9gaHwDeG5p5aXeUVedo",
    libraries: "places" // necessary for places input
  }
});

Vue.use(Vuex);
Vue.use(veeValidate);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
