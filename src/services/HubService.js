import Vue from 'vue'
import Logger from '@utils/Logger'
/**
 * hub 数据
 */
const logger = new Logger().getLogger('HubService')
class Hub extends Vue {
  getHubPresenter (hubType = '') {
    logger.debug('getHubPresenter')
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
