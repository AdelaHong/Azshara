import Vue from 'vue'

/**
 * hub 数据
 */
class Hub extends Vue {
  getHubPresenter (hubType = '') {
    return this.$http({
      method: 'get',
      url: `/hub/${hubType}`
    })
  }

  getRecommendPresenter (targetId = 0) {
    return this.$http({
      method: 'get',
      url: `/recommend/${targetId}`
    })
  }
}

export default new Hub()
