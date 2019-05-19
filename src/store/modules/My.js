const state = {
  menuInfoKeys: [{
    firstMenu: 'menu.contentManager',
    secondMenu: [
      {
        id: 'FavoriteVideo',
        name: 'menu.favoriteVideo',
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
      }
    ]
  },
  {
    firstMenu: '',
    secondMenu: [
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
      }
    ]
  },
  {
    firstMenu: '',
    secondMenu: [
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
  }
  ],
  currentMenuId: ''
}
const getters = {
  featuresMenus: state => state.menuInfoKeys
    .map(item => item.secondMenu)
    .flat()
}

const mutations = {
  SET_MENU_ACTIVE (state, id) {
    state.currentMenuId = id
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
