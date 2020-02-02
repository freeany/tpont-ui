import Vue from 'vue'
import App from './App.vue'

import tpUI from '../packages/index'
Vue.use(tpUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
