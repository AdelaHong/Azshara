import Mock from 'mockjs'

const data = Mock.mock({
  total: '500',
  'channelList|500': [{
    'chanNo|+1': '1',
    'contentId|+1': 373,
    externalCode: '@guid',
    foreignsn: '@id',
    name: '@ctitle',
    'physicalChannels|2': [{
      mediaId: '@id',
      definition: '1',
      fileFormat: '2',
      masterCopyNPVR: '0',
      ottEITPid: '1B60',
      playurl: '@url'
    }],
    pictures: [
      {
        href: '@image(54x54)'
      }],
    sysChanNo: '1',
    type: 'VIDEO_CHANNEL'
  }]
})

const playbillData = Mock.mock({
  total: '500',
  'playbillList|2500': [{
    'id+1': 800,
    'channelId|+1': 373,
    'name': '@ctitle(50)',
    'starttime': '@now',
    'endtime': '@now',
    'genres': ''
  }]
})

export default [
  {
    url: '/channels',
    type: 'get',
    response: config => {
      return {
        data,
        msg: 'success',
        retCode: '0'
      }
    }
  },
  {
    url: `/playbill`,
    type: 'post',
    response: config => {
      return {
        data: playbillData,
        msg: 'success',
        retCode: '0'
      }
    }
  }
]
