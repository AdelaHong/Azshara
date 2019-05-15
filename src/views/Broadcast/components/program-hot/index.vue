<template>
  <div class="moki-hot">
    <div class="moki-hot--title">{{$t('broadcast.hotTitle')}}</div>
    <div class="moki-hot--container">
      <hot-poster
        :imgUrl="topTile.imgUrl"
        :name="topTile.name"
        :channelName="topTile.channelName"
        :counts="topTile.counts"
      >
        <mo-progress :value="topTile.progress"></mo-progress>
      </hot-poster>
      <div class="moki-hot__bottom">
        <hot-poster
          v-for="(tile,index) in bottomTile"
          :key="index"
          :imgUrl="tile.imgUrl"
          :name="tile.name"
          :channelName="tile.channelName"
          :counts="tile.counts"
          :isSub="true"
        >
          <mo-progress :value="tile.progress"></mo-progress>
        </hot-poster>
      </div>
    </div>
  </div>
</template>
<script>
import hotPoster from './hot-poster.vue'

export default {
  components: {
    hotPoster
  },
  props: {
    view: Object
  },
  computed: {
    topTile () {
      return this.view.topTile
    },
    bottomTile () {
      return this.view.bottomTile
    }
  }
}
</script>
<style lang="scss" scoped>
@include b(hot) {
  display: flex;
  flex-direction: column;
  width: unit(914);

  @include m(title) {
    @include T(13);
    margin-bottom: unit(15);
  }

  @include m(container) {
    display: flex;
    flex-direction: column;

    @include e(bottom) {
      display: flex;
      margin-top: unit(20);

      .moki-tile {
        margin-right: unit(20);

        &:nth-child(2) {
          margin-right: unit(0);
        }
      }
    }
  }
}
</style>
