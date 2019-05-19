import Vue from 'vue'
import App from './App.vue'
import './plugins/vuetify'
import './plugins/google-maps.js'
import store from './store'

Vue.config.productionTip = false;

// load app title
document.title = process.env.VUE_APP_TITLE;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
