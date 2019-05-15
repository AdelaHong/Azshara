import Vue from 'vue'
import Vuex from 'vuex'
import HEADER from './modules/Header'
import BROADCAST from './modules/Broadcast'
import FOOTER from './modules/Footer'
import CHANNEL from './modules/Channel'
import HOME from './modules/Home'
import DIALOG from './modules/Dialog'
Vue.use(Vuex)

let messageTimer = null

export default new Vuex.Store({
  modules: {
    HOME,
    HEADER,
    BROADCAST,
    FOOTER,
    CHANNEL,
    DIALOG
  },
  state: {
    bgroundUrl: '',
    isShowBanner: false,
    isShowMessage: false
  },
  mutations: {
    SET_BACKGROUND (state, bgUrl) {
      state.bgroundUrl = bgUrl
    },
    SET_BANNER_SHOW (state, data) {
      state.isShowBanner = data
    },
    SHOW_MESSAGE (state, messages) {
      state.isShowMessage = true
      state.messages = messages
      clearTimeout(messageTimer)
      messageTimer = setTimeout(() => {
        state.isShowMessage = false
      }, 3000)
    }
  }
})
