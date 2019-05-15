<template>
  <div class="slide-poster">
    <div class="slide-poster--title">
      <span class="title">{{title}}</span>
      <mo-icon class="moki-next__icon" name="arrow-right-s" :size="24"></mo-icon>
    </div>
    <div class="slide-poster--pictures">
      <ul class="slide-poster__container">
        <poster
        v-for="(poster,index) in posters"
        :key="index"
        :name="poster.name"
        :subname="poster.subname"
        :imgUrl="poster.imgUrl"
      >
        <mo-progress :value="poster.progress"></mo-progress>
      </poster>
      </ul>
    </div>
  </div>
</template>
<script>
import poster from './poster.vue'
export default {
  name: 'slide-poster',
  components: {
    poster
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    posters: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.slide-poster {
    margin-top: unit(80);

    &--title {
        @include T(13);
        fill: $C31;
        margin-bottom: unit(20);

        .title {
            vertical-align: middle;
        }

    }

    &--pictures {
        .slide-poster__container {
            display: flex;
            width: unit(1380);
            overflow: hidden;
        }
    }
}
</style>
