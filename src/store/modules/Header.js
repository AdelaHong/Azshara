
export default {
  namespaced: true,
  state: {
    isShowMenu: false,
    isScrollDown: false,
    isSpecialWeb: false,
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
        name: 'menu.ondemand',
        url: '/ondemand'
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

    scrollLinster (state) {
      let debouce
      document.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop
          ? document.documentElement.scrollTop
          : document.body.scrollTop
        clearTimeout(debouce)
        debouce = setTimeout(() => {
          state.isScrollDown = scrollTop > 0
        }, 100)
      })
    }

  },
  actions: {

  }
}
