
export default {
  namespaced: true,
  state: {
    isShowMenu: false,
    isScrollDown: false,
    isSpecialWeb: false,
    isShowFeatureMenu: false,
    headerList: [
      {
        name: 'menu.home',
        url: '/home'
      },
      {
        name: 'menu.broadcast',
        url: '/broadcast'
      },
      {
        name: 'menu.onDemand',
        url: '/onDemand'
      }
    ]
  },
  mutations: {
    CHANGE_HEADER_HEIGHT (state, status) {
      state.isSpecialWeb = status
    },
    setMenuStatus (state, status) {
      state.isShowMenu = status
    },
    CHANGE_FEATURE_MENU (state, status) {
      state.isShowFeatureMenu = status
    },
    SCROLL_LISTENER (state) {
      let debounce
      document.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop
          ? document.documentElement.scrollTop
          : document.body.scrollTop
        clearTimeout(debounce)
        debounce = setTimeout(() => {
          state.isScrollDown = scrollTop > 0
        }, 100)
      })
    }

  },
  actions: {

  }
}
