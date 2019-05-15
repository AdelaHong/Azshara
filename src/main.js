import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@store'
import '@plugins'
import i18n from '@plugins/I18n'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  mounted () {
    this.$store.dispatch('BROADCAST/getProgramsByChannel')
  }
}).$mount('#app')
