import Mock from 'mockjs'
export default {
  menu () {
    return {
      data: [Mock.mock({
        'name': '@cname',
        'id|+1': 1,
        'icon': Mock.Random.image
      }),
      Mock.mock({
        'name': '@cname',
        'id|+1': 1,
        'icon': Mock.Random.image
      }), Mock.mock({
        'name': '@cname',
        'id|+1': 1,
        'icon': Mock.Random.image
      })],
      msg: 'sucess',
      retCode: '0'
    }
  }
}
