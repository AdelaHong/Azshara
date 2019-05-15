import hubApi from '@api/hub'

const state = {
  promoViews: [],
  hotsView: {}
}

const mutations = {
  SET_PROMO_VIEWS (state, groups) {
    const { tiles } = groups.find(item => item.paneType === 'promo')
    state.promoViews = tiles.map((item) => ({
      title: item.title,
      subtitle: item.genres,
      meta: item.description,
      buttonText: item.buttonText,
      backgroundUrl: item.backgroundUrl,
      miniPosterUrl: item.miniPosterUrl
    }))
  },
  SET_HOT_VIEWS (state, groups) {
    const { tiles, title } = groups.find(item => item.paneType === 'hots')
    state.hotsView = {
      title,
      views: tiles.map((item) => ({
        title: item.title,
        subtitle: item.genres,
        meta: item.audience,
        backgroundUrl: item.backgroundUrl
      }))
    }
  }
}

const actions = {
  async getHomeHubPresenter ({ commit }) {
    const { groups } = await hubApi.getHubPresenter('home')
    commit('SET_PROMO_VIEWS', groups)
    commit('SET_HOT_VIEWS', groups)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
