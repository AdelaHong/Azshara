<template>
  <div class="moki-recommend" v-if="posters.length>0">
    <div class="moki-recommend__title">
      <span>{{title}}</span>
      <mo-icon class="right-icon" name="arrow-right-s" :size="24"></mo-icon>
    </div>
    <div class="moki-recommend__posters">
      <div class="poster-container" :style="{'transform':'translateX('+unitMoveLeft+')'}">
        <div class="poster-group" v-for="(tile,index) of tiles" :key="index">
          <div class="big">
            <poster
              :backgroundUrl="tile.bigTile.backgroundUrl"
              :title="tile.bigTile.title"
              :subtitle="tile.bigTile.subtitle"
              :meta="tile.bigTile.meta"
            />
          </div>
          <div class="medium">
            <div
              class="column"
              v-for="(mediumItem,indexMedium) of tile.mediumTiles"
              :key="indexMedium"
            >
              <poster
                class="item"
                v-for="(item,index) of mediumItem"
                :key="index"
                :backgroundUrl="item.backgroundUrl"
                :title="item.title"
                :subtitle="item.subtitle"
                :meta="item.meta"
                :type="
                (indexMedium === 0 && index === 1)
                || (indexMedium === 1 && index === 0)
                ?'mediumTile':'halfTile'"
              />
            </div>
          </div>
          <div class="small">
            <poster
              v-for="(item,index) of tile.smallTiles"
              :key="index"
              type="smallTile"
              :backgroundUrl="item.backgroundUrl"
              :title="item.title"
              :subtitle="item.subtitle"
              :meta="item.meta"
            />
          </div>
        </div>
      </div>
    </div>
    <mo-icon
      class="moki-recommend__left"
      name="arrow-left-s"
      :size="36"
      @click="movePosterContainer('left')"
    ></mo-icon>
    <mo-icon
      class="moki-recommend__right"
      name="arrow-right-s"
      :size="36"
      @click="movePosterContainer('right')"
    ></mo-icon>
  </div>
</template>
<script>
import Poster from './Poster.vue'
import UIConstant from '@utils/UIConstant'
export default {
  name: 'recommend',
  components: {
    Poster
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    posters: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    moveLeft: 0,
    stepCount: 1
  }),
  computed: {
    /**
     * 通过数据进行显示分组
     */
    tiles () {
      let posterSize = this.posters.length
      let tiles = []
      if (posterSize > 0) {
        for (let i = 0; i < this.groupSize; i++) {
          tiles.push({
            bigTile: this.posters[i * UIConstant.SHOW_VIEW],
            mediumTiles: [
              this.posters.slice(i * UIConstant.SHOW_VIEW + 1, i * UIConstant.SHOW_VIEW + 3),
              this.posters.slice(i * UIConstant.SHOW_VIEW + 3, i * UIConstant.SHOW_VIEW + 5)
            ],
            smallTiles: this.posters.slice(i * UIConstant.SHOW_VIEW + 5, i * UIConstant.SHOW_VIEW + 7)
          })
        }
      }
      return tiles
    },
    unitMoveLeft () {
      return this.moveLeft / 16 + 'rem'
    },
    groupSize () {
      return Math.ceil(this.posters.length / UIConstant.SHOW_VIEW) || 0
    }
  },
  methods: {
    movePosterContainer (moveDir) {
      if (moveDir === 'left') {
        if (this.moveLeft < 0) {
          this.moveLeft += 1380
          this.stepCount--
        }
      }

      if (moveDir === 'right') {
        if (this.stepCount < this.groupSize) {
          this.moveLeft -= 1380
          this.stepCount++
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@include b(recommend) {
  margin-top: unit(80);
  position: relative;
  &:hover {
    .moki-recommend__left,
    .moki-recommend__right {
      display: inline-block;
    }
  }
  @include e(title) {
    @include T(13);
    margin-bottom: unit(15);
    fill: $C31;
    .right-icon {
      margin-left: unit(10);
    }
  }
  @include e(posters) {
    overflow: hidden;
    .poster-container {
      display: flex;
      transition: transform $transition-time;
      .poster-group {
        display: flex;

        .big {
          margin-right: unit(20);
          width: unit(380);
        }
        .medium {
          width: unit(780);
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          align-content: space-between;
          .column {
            flex-basis: 100%;
            display: flex;
            justify-content: space-between;
          }
        }
        .small {
          margin-left: unit(20);
          width: unit(180);
        }
      }
    }
  }
  @include e(left) {
    fill: $C35;
    cursor: pointer;
    position: absolute;
    left: unit(-36);
    top: 50%;
    display: none;
    &:hover {
      display: inline-block;
    }
  }
  @include e(right) {
    fill: $C35;
    cursor: pointer;
    position: absolute;
    right: unit(-36);
    top: 50%;
    display: none;
    &:hover {
      display: inline-block;
    }
  }
}
</style>
