
import hubApi from '@api/hub'
import channelApi from '@api/channel'
export default {
  namespaced: true,
  state: {
    hotView: {
      topTile: {},
      bottomTile: []
    },
    nextView: {
      largeTile: [],
      mediumTile: [],
      smallTile: []
    },
    recommendTile: [],
    programView: [],
    hubPrograms: []
  },
  getters: {
    programs: state => state.programView
  },
  mutations: {
    SET_HOT_VIEW (state, groups) {
      const { tiles } = groups.find(item => item.paneType === 'tv')
      let viewTile = tiles.map((item) => {
        return {
          imgUrl: item.backgroundUrl,
          name: item.title,
          channelName: item.channelId,
          counts: item.audience,
          progress: 20
        }
      })
      if (tiles.length > 0) {
        state.hotView.topTile = viewTile[0]
        this.commit('SET_BACKGROUND', viewTile[0].imgUrl)
        state.hotView.bottomTile = viewTile.slice(1, 3)
      }
    },

    SET_NEXT_VIEW (state, groups) {
      const { tiles } = groups.find(item => item.paneType === 'next')
      let viewTile = tiles.map((item) => {
        return {
          imgUrl: item.backgroundUrl,
          name: item.title,
          subname: item.channelId
        }
      })
      const a = 'dsadasd'
      if (a === 'dsadsadas') {

      }
      state.nextView.largeTile = viewTile.slice(0, 2)
      state.nextView.mediumTile = viewTile.slice(2, 4)
      state.nextView.smallTile = viewTile.slice(4, 6)
    },

    SET_RECOMMEND_VIEW (state, viewsData) {
      viewsData.tiles = viewsData.tiles.map(item => {
        return {
          name: item.title,
          subname: item.channelId,
          imgUrl: item.backgroundUrl,
          progress: 12
        }
      })

      state.recommendTile.push({
        title: viewsData.title,
        posters: viewsData.tiles
      })
    },

    RESET_RECOMMEND_VIEW (state) {
      state.recommendTile = []
    },

    SET_PROGRAM_LIST (state, { channelList, playbillList }) {
      let channelAndProgram = channelList.map((item) => ({
        logoUrl: item.pictures[0].href,
        channelName: item.name,
        // 此处还需要处理当前时间的节目单，由于是模拟数据，所以未处理
        programs: playbillList
          .filter(program => item.contentId === program.channelId)
      }))

      state.programView = channelAndProgram
    },
    GET_HUB_PROGRAM (state) {
      let programView = state.programView
      state.hubPrograms = programView.map(item => ({
        logoUrl: item.logoUrl,
        title: item.programs[0].name,
        subtitle: `${this._vm.$dayjs(item.starttime).format('HH:MM')} | ${item.channelName}`
      }))
    }

  },
  actions: {
    /**
     *  请求hub请求
     * @param {*} param0
     */
    async getTvHubPresenter ({ commit }) {
      let { groups } = await hubApi.getHubPresenter('live')
      const { tiles } = groups.find(item => item.paneType === 'genres')
      tiles.forEach(async element => {
        const { action: { params: { targetId } } } = element
        const recommend = await hubApi.getRecommendPresenter(targetId)
        let recommendTiles = recommend.groups[0]
        commit('SET_RECOMMEND_VIEW', recommendTiles)
      })
      commit('SET_HOT_VIEW', groups)
      commit('SET_NEXT_VIEW', groups)
    },

    async getProgramsByChannel ({ commit }) {
      let { channelList } = await channelApi.getAllChannels()
      let channelIds = channelList.map(item => item.contentId)
      let { playbillList } = await channelApi.getPlaybillByChannelId(channelIds)
      commit('SET_PROGRAM_LIST', {
        channelList,
        playbillList
      })
      commit('GET_HUB_PROGRAM')
    }
  }
}
