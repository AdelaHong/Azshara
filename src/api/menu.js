import Vue from 'vue'

class Menu extends Vue {
  getMenu () {
    return this.$http({
      method: 'get',
      url: `/menu`
    })
  }
}

export default new Menu()
