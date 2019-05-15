
import channelApi from '@api/channel'
export default {
  namespaced: true,
  state: {
    channels: [],
    hubChannels: []
  },
  mutations: {
    SET_CHANNEL (state, data) {
      state.channels = data
    },

    SET_HUB_CHANNELS (state, channels) {
      state.hubChannels = channels.map((item) => ({
        logoUrl: item.pictures[0].href,
        title: item.name,
        subtitle: item.externalCode
      }))
    }

  },
  actions: {
    async getAllChannel ({ commit }) {
      const { channelList } = await channelApi.getAllChannels()
      commit('SET_CHANNEL', channelList)
      commit('SET_HUB_CHANNELS', channelList)
    }

  }
}
