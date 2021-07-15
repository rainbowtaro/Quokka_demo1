import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import VueTree from '@ssthouse/vue-tree-chart'
Vue.component('vue-tree', VueTree)
Vue.config.productionTip = false

Vue.use(VModal);

new Vue({
  render: h => h(App),

}).$mount('#app')
