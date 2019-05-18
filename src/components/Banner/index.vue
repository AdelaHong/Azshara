<template>
  <div class="c-banner">
    <div
      class="c-banner--picture"
      :style="{'background-image':'url('+currentCarousel.backgroundUrl+')'}"
    ></div>
    <div class="c-banner--mask">
      <div class="container">
        <div class="c-banner__info">
          <div class="title">{{currentCarousel.title}}</div>
          <div class="subtitle">{{currentCarousel.subtitle}}</div>
          <div class="meta">{{currentCarousel.meta}}</div>
          <mo-button type="primary">{{currentCarousel.buttonText}}</mo-button>
        </div>
        <div class="c-banner__dot-posters">
          <div class="top-arrow"  @click="switchPicture(SWITCH_DIR.UP)">
            <mo-icon name="arrow-up-s" type="fill" :size="24"></mo-icon>
          </div>
          <div class="poster-container">
            <div class="posters">
              <div
                class="carousel-poster"
                v-for="(view,index) of views"
                :class="{'is-chosen': chosenIndex === index}"
                :key="index"
                :style="{'background-image':'url('+ view.miniPosterUrl+')'}"
                @click="chosenPic(index)"
              ></div>
            </div>
          </div>
          <div class="bottom-arrow" @click="switchPicture(SWITCH_DIR.DOWN)">
            <mo-icon name="arrow-down-s" type="fill" :size="24"></mo-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { setInterval, clearInterval } from 'timers'
const SWITCH_DIR = {
  UP: '1',
  DOWN: '2'
}
const AUTO_TIME = 10 * 1000
let autoSwitchTimmer = null
export default {
  name: 'banner',
  data: () => ({
    chosenIndex: 0,
    SWITCH_DIR: {
      UP: '1',
      DOWN: '2'
    }
  }),
  props: {
    views: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    currentCarousel () {
      return this.views[this.chosenIndex] || {}
    }
  },
  methods: {
    chosenPic (index) {
      this.chosenIndex = index
    },
    switchPicture (swicthDirec) {
      let maxIndex = this.views.length - 1
      if (SWITCH_DIR.UP === swicthDirec) {
        if (this.chosenIndex < 0) {
          this.chosenIndex = maxIndex
        } else {
          this.chosenIndex -= 1
        }
      }
      if (SWITCH_DIR.DOWN === swicthDirec) {
        if (this.chosenIndex >= maxIndex) {
          this.chosenIndex = 0
        } else {
          this.chosenIndex += 1
        }
      }
    },
    autoSwitch () {
      clearInterval(autoSwitchTimmer)
      autoSwitchTimmer = setInterval(() => {
        this.switchPicture(this.SWITCH_DIR.DOWN)
      }, AUTO_TIME)
    }
  },
  created () {
    this.autoSwitch()
  },
  destroyed () {
    clearInterval(autoSwitchTimmer)
  }
}
</script>

<style lang="scss" scoped>
@include when(chosen) {
  transform: scale(1.1);
  filter: brightness(100%) !important;
}
@include component(banner) {
  position: relative;
  height: unit(580);
  background-color: $C06;
  @include M(5);

  @include m(picture) {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(30%);
  }
  @include m(mask) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index: 1;
    .container {
      width: unit(1380);
      height: 100%;
      margin: 0 auto;
      position: relative;
      @include e(info) {
        margin-left: unit(30);
        width: unit(700);
        position: absolute;
        bottom: unit(78);
        .title {
          @include T(20);
          margin-bottom: unit(40);
        }
        .subtitle {
          @include T(32);
          margin-bottom: unit(15);
        }
        .meta {
          @include T(30);
          color: $C23;
          margin-bottom: unit(40);
        }
      }
      @include e(dot-posters) {
        width: unit(200);
        height: unit(470);
        @include rc(1);
        background-color: $C10;
        position: absolute;
        right: unit(10);
        top: unit(80);
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        .top-arrow {
          fill: $C47;
          display: flex;
          justify-content: center;
          cursor: pointer;
          &:hover {
            fill: $C43;
          }
        }
        .poster-container {
          width: unit(170);
          height: unit(400);
          margin-left: unit(16);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          .carousel-poster {
            width: unit(154);
            height: unit(94);
            margin-bottom: unit(8);
            transition: $transition-time;
            cursor: pointer;
            filter: brightness(50%);
            &:hover {
              transform: scale(1.1);
              filter: brightness(50%);
            }
          }
        }
        .bottom-arrow {
          @extend .top-arrow;
        }
      }
    }
  }
}
@media screen and (max-width: unit(1380)) {
  @include b(banner) {
    height: unit(480);
    .container {
      width: unit(980);
    }
  }
}
</style>
