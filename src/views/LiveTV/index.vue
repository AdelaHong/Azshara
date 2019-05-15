<template>
  <div class="moki-broadcast">
    <div class="moki-broadcast--hot">
      <program-hot :view="hotView"/>
      <program-list :view="hubPrograms"/>
    </div>
    <program-next :view="nextView"/>
    <slide-poster
      v-for="(recommend,index) in recommendTile"
      :key="index"
      :title="recommend.title"
      :posters="recommend.posters"
    />
  </div>
</template>

<script>
import programHot from './components/program-hot'
import programList from './components/program-list'
import programNext from './components/program-next'
import slidePoster from '@components/Slide-poster'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'broadcast',
  components: {
    programHot,
    programList,
    programNext,
    slidePoster
  },
  computed: {
    ...mapState('BROADCAST', {
      recommendTile: s => s.recommendTile,
      hotView: s => s.hotView,
      nextView: s => s.nextView,
      hubPrograms: s => s.hubPrograms
    })

  },
  created () {
    this.chaneHeaderStatus(true)
    this.resetRecommedView()
    this.getTvHubPresenter()
  },
  methods: {
    ...mapMutations('BROADCAST', {
      resetRecommedView: 'RESET_RECOMMEND_VIEW'
    }),
    ...mapMutations('HEADER', {
      chaneHeaderStatus: 'CHANGE_HEADER_HEIGHT'
    }),
    ...mapActions('BROADCAST', {
      getTvHubPresenter: 'getTvHubPresenter'
    })
  }
}
</script>
<style lang="scss">
@include b(broadcast) {
    margin-top: unit(109);

    @include m(hot) {
        display: flex;
        justify-content: space-between;
    }

    @include m(next) {}
}
</style>
