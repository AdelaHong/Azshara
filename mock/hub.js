import Mock from 'mockjs'
const hubData = Mock.mock({
  'hubType': 'TvHubPresenter',
  'groups': [
    {
      title: '@ctitle',
      paneType: 'tv',
      'tiles|3': [{
        action: {
          params: {
            target: 'tune',
            targetId: ''
          }
        },
        channelId: '@string',
        contentId: '@string',
        endTime: '@date(T)',
        starTime: '@now',
        style: 'singleLarge',
        title: '@ctitle(5,20)',
        audience: '@natural(3,800)',
        backgroundUrl: '@image(914x514)'
      }]
    },
    {
      title: '@ctitle',
      paneType: 'next',
      'tiles|6': [{
        action: {
          params: {
            target: 'detail',
            targetId: ''
          }
        },
        channelId: '@string',
        contentId: '@string',
        endTime: '@now',
        starTime: '@now',
        style: 'singleLarge',
        title: '@ctitle',
        audience: '@natural(3,800)',
        backgroundUrl: '@image(680x382)'// '@dataImage(680x382)'
      }]
    },
    {
      title: '@ctitle',
      paneType: 'genres',
      'tiles|2': [{
        action: {
          params: {
            target: 'detail',
            targetId: '@natural(3,800)'
          }
        },
        channelId: '@string',
        contentId: '@string',
        endTime: '@now',
        starTime: '@now',
        style: 'singleLarge',
        title: '@ctitle',
        audience: '@natural(3,800)',
        backgroundUrl: '@image(680x382)'
      }]
    }]
})

const recommendDate = Mock.mock({
  hubType: 'recommend',
  groups: [{
    title: '@ctitle',
    paneType: 'program',
    'tiles|1-20': [{
      action: {
        params: {
          target: 'detail',
          targetId: '@natural(3,800)'
        }
      },
      channelId: '@string',
      contentId: '@string',
      endTime: '@now',
      starTime: '@now',
      style: 'singleLarge',
      title: '@ctitle(10,30)',
      audience: '@natural(3,800)',
      backgroundUrl: '@image(330x186)'
    }]
  }]
})

const PromoPackages = Mock.mock({
  hubType: 'HomeHubPresenter',
  groups: [
    {
      title: '@ctitle',
      paneType: 'promo',
      'tiles|4': [{
        action: {
          params: {
            target: 'detail',
            targetId: '@natural(3,800)'
          }
        },
        channelId: '@string',
        contentId: '@string',
        endTime: '@now',
        starTime: '@now',
        style: 'singleLarge',
        title: '@ctitle(10)',
        genres: '@csentence',
        description: '@cparagraph',
        audience: '@natural(3,800)',
        backgroundUrl: '@image(1910x580)',
        miniPosterUrl: '@image(154x94)',
        buttonText: '@ctitle',
        iconUrl: '@image(5x5)'
      }]
    },
    {
      title: '@ctitle',
      paneType: 'hots',
      'tiles|6-30': [{
        action: {
          params: {
            target: 'detail',
            targetId: '@natural(3,800)'
          }
        },
        channelId: '@string',
        contentId: '@string',
        endTime: '@now',
        starTime: '@now',
        style: 'singleLarge',
        title: '@ctitle(10)',
        genres: '@csentence',
        description: '@cparagraph',
        audience: '@natural(3,800)',
        backgroundUrl: '@image(380x540)'
      }]
    }
  ]
})

export default [
  {
    url: '/hub/live',
    type: 'get',
    response: _ => {
      return {
        data: hubData,
        msg: 'success',
        retCode: '0'
      }
    }
  },
  {
    url: `/recommend/.*`,
    type: 'get',
    response: _ => {
      return {
        data: recommendDate,
        msg: 'success',
        retCode: '0'
      }
    }
  },
  {
    url: `/hub/home`,
    type: 'get',
    response: _ => {
      return {
        data: PromoPackages,
        msg: 'success',
        retCode: '0'
      }
    }
  }
]
