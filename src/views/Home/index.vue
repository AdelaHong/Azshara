<template>
  <div class="moki-home">
    <recommend-poster :title="hotsView.title" :posters="hotsView.views"/>
    <recommend-poster :title="hotsView.title" :posters="hotsView.views"/>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex'
import RecommendPoster from './components/Recommend'

export default {
  name: 'Home',
  computed: {
    ...mapState('HOME', {
      hotsView: s => s.hotsView
    })
  },
  components: {
    RecommendPoster
  },
  mounted () {
    this.chaneHeaderStatus(false)
    this.setBannerStatus(true)
    this.getHomeHubPresenter()
  },
  methods: {
    ...mapMutations('HEADER', {
      chaneHeaderStatus: 'CHANGE_HEADER_HEIGHT'
    }),
    ...mapMutations({
      setBannerStatus: 'SET_BANNER_SHOW',
      showMessage: 'SHOW_MESSAGE'
    }),
    ...mapActions('HOME', {
      getHomeHubPresenter: 'getHomeHubPresenter'
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
