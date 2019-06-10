import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuetify)
new Vue({
  router,
  store,
  render: h => h(App)
  
}).$mount('#app')
