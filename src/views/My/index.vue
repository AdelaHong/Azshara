<template>
  <div class="moki-my">
    <my-menu :basicInfo="basicInfo" :menuInfos="menuInfos"/>
    <div class="moki-my__content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import MyMenu from './components/MyMenu.vue'
import { mapState } from 'vuex'
export default {
  name: 'my',
  components: {
    MyMenu
  },
  data: () => ({
    basicInfo: {
      avatarUrl:
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1396190427,3962471256&fm=27&gp=0.jpg',
      username: 'demo',
      ratingLevel: 'PG-13'
    }
  }),
  computed: {
    ...mapState('MY', {
      menuInfos: s => s.menuInfoKeys
    })
  }
}
</script>

<style lang="scss" scoped>
@include b(my) {
  margin-top: unit(80);
}
</style>
