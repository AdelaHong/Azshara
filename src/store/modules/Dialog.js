
const state = {
  isShowLoginDialog: false
}
const getters = {
  dialogShow: state =>
    state.isShowLoginDialog
}

const mutations = {
  CHANGE_LOGIN_DIALOG_STATUS (state, status) {
    state.isShowLoginDialog = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
