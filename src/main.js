import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/google-maps.js'

Vue.config.productionTip = false;

// load app title
document.title = process.env.VUE_APP_TITLE;

new Vue({
  render: h => h(App),
}).$mount('#app');
