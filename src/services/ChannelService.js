import Vue from 'vue'

class Channel extends Vue {
  getAllChannels () {
    return this.$http({
      method: 'get',
      url: `/channels`
    })
  }

  getPlaybillByChannelId (channelIds = []) {
    return this.$http({
      method: 'post',
      url: `/playbill`,
      data: {
        ids: channelIds
      }
    })
  }
}

export default new Channel()
