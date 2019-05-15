const state = {
  menuInfoKeys: [{
    firstMenu: 'menu.contentManager',
    secondMenu: [
      {
        id: 'FavoriteVideo',
        name: 'menu.favoriteVieo',
        iconName: 'video'
      },
      {
        id: 'FavoriteChannel',
        name: 'menu.favoriteChannel',
        iconName: 'tv'
      },
      {
        id: 'LockedChannel',
        name: 'menu.lockedChannel',
        iconName: 'lock'
      },
      {
        id: 'Reminders',
        name: 'menu.reminders',
        iconName: 'notification'
      }, {
        id: 'Purchases',
        name: 'menu.purchases',
        iconName: 'shopping-cart-2'
      },
      {
        id: 'Recording',
        name: 'menu.recording',
        iconName: 'record-circle'
      },
      {
        id: 'Profiles',
        name: 'menu.profiles',
        iconName: 'profile'
      },
      {
        id: 'DeviceName',
        name: 'menu.deviceName',
        iconName: 'device'
      },
      {
        id: 'Setting',
        name: 'menu.setting',
        iconName: 'settings'
      },
      {
        id: 'Logout',
        name: 'menu.logout',
        iconName: 'login-circle'
      }
    ]
  }]
}

const mutations = {

}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
