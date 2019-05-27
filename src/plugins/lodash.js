import lodash from 'lodash'
export default {
  install (Vue, opt = {}) {
    Vue.prototype.$_ = lodash
  }
}
