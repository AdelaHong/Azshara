<template>
  <div class="moki-next">
    <div class="moki-next--title">
      <span class="moki-next__title">{{$t('broadcast.nextTitle')}}</span>
      <mo-icon class="moki-next__icon" name="arrow-right-s" :size="24"></mo-icon>
    </div>
    <div class="moki-next--poster">
      <div class="moki-next__top">
        <next-poster
          v-for=" (tile,index) in largeTile"
          :key="index"
          :imgUrl="tile.imgUrl"
          :name="tile.name"
          :subname="tile.subname"
        ></next-poster>
      </div>
      <div class="moki-next__bottom">
        <next-poster
          v-for=" (tile,index) in mediumTile"
          :key="index"
          :imgUrl="tile.imgUrl"
          :name="tile.name"
          :subname="tile.subname"
          type="medium"
        ></next-poster>
        <div class="moki-next__bottom-right">
          <next-poster
            v-for=" (tile,index) in smallTile"
            :key="index"
            :imgUrl="tile.imgUrl"
            :name="tile.name"
            :subname="tile.subname"
            type="small"
          ></next-poster>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import nextPoster from './next-poster.vue'

export default {
  name: 'nextProgram',
  components: {
    nextPoster
  },
  props: {
    view: {
      type: Object,
      default: () => ({
        largeTile: '',
        mediumTile: '',
        smallTile: ''
      }),
      required: true
    }
  },
  computed: {
    largeTile () {
      return this.view.largeTile
    },
    mediumTile () {
      return this.view.mediumTile
    },
    smallTile () {
      return this.view.smallTile
    }
  }
}
</script>
<style lang="scss" scoped>
@include b(next) {
    margin-top: unit(80);
    @include m(title) {
        margin-bottom: unit(20);

        @include e(title) {
            vertical-align: middle;
            @include T(13);
        }

        @include e(icon) {
            fill: $C31;
        }
    }

    @include m(poster) {
        @include e(top) {
            display: flex;

        }
        @include e(bottom){
            margin-top: unit(20);
            display: flex;
            @include e(bottom-right){
                display: flex;
                flex-direction: column;
            }
        }
    }
}
</style>
