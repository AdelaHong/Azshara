<template>
  <div class="moki-my">
    <my-menu
      :basicInfo="basicInfo"
      :menuInfos="menuInfos"
      :chosenMenu="currentMenuId"
      @click="chosenId($event)"
    />
    <div class="moki-my__content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import MyMenu from './components/MyMenu.vue'
import { mapState, mapMutations } from 'vuex'
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
      menuInfos: s => s.menuInfoKeys,
      currentMenuId: s => s.currentMenuId
    })
  },
  methods: {
    ...mapMutations('MY', {
      setMenuActive: 'SET_MENU_ACTIVE'
    }),
    chosenId (evt) {
      this.setMenuActive(evt)
    }
  }
}
</script>

<style lang="scss" scoped>
@include b(my) {
  margin-top: unit(80);
  display: flex;
}
</style>
