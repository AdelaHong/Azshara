<template>
  <div class="moki-tile" :class="{'is-big':!isSub}">
    <template v-if="!isSub">
      <div class="moki-tile--img" :style="{'background-image':'url('+imgUrl+')'}"></div>
      <mo-icon name="clapperboard" type="fill" :size="100" class="moki-tile--default"></mo-icon>
      <div class="moki-tile--mask">
        <div class="moki-tile__name" :title="name">{{name}}</div>
        <div class="moki-tile__meta">
          <mo-icon class="user-icon" name="user-3" :size="24"></mo-icon>
          <span class="user-count">{{counts}}</span>
          <span class="channel">{{channelName}}</span>
        </div>
        <div class="moki-tile__progress">
          <slot></slot>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="moki-tile--img-small" :style="{'background-image':'url('+imgUrl+')'}"></div>
      <mo-icon name="clapperboard" type="fill" :size="80" class="moki-tile--default"></mo-icon>
      <div class="moki-tile--mask-small">
        <div class="moki-tile__name-small" :title="name">{{name}}</div>
        <div class="moki-tile__meta-small">
          <mo-icon class="user-icon-small" name="user-3" :size="20"></mo-icon>
          <span class="user-count-small">{{counts}}</span>
          <span class="channel-small">{{channelName}}</span>
        </div>
        <div class="moki-tile__progress-small">
          <slot></slot>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import mixins from '@/utils/mixin'
export default {
  name: 'hotPoster',
  mixins: [mixins],
  props: {
    name: {
      type: String,
      default: ''
    },
    counts: {
      type: Number,
      default: 0
    },
    channelName: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    },
    isSub: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    widthUnit () {
      return this.width / 16 + 'rem'
    },
    heightUnit () {
      return this.height / 16 + 'rem'
    }
  }
}
</script>
<style lang="scss" scoped>
@include b(tile) {
    position: relative;
    width: unit(446);
    height: unit(250);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    @include when(big) {
        width: unit(914);
        height: unit(514);
    }

    @include m(img) {
       background-size: 100% 100%;
       width: 100%;
       height: 100%;
    }
    @include m(default){
        position: absolute;
        z-index: -1;
    }

    @include m(mask) {
        width: 100%;
        height: unit(216);
        position: absolute;
        bottom: 0;
        left: 0;
        @include M(2);

        @include e(name) {
            width: unit(914 - 40);
            color: $C31;
            margin-top: unit(88);
            @include T(22);
            margin-left: unit(20);
            margin-bottom: unit(15);
            @include text-overflow;
        }

        @include e(progress) {
            position: absolute;
            bottom: 0;
            height: unit(4);
            width: 100%;
            z-index: 1;
        }

        @include e(meta) {
            margin-left: unit(20);

            .user-icon {
                fill: $C36;
                margin-right: unit(10);
            }

            .user-count {
                color: $C36 !important;
                @include T(26);
                vertical-align: middle;
                margin-right: unit(10);
            }

            .channel {
                color: $C31;
                @include T(26);
                vertical-align: middle;
            }
        }
    }

    @include m(img-small) {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
    }

    @include m(default){
        position: absolute;
        z-index: -1;
        fill: $C35;
    }

    @include m(mask-small) {
        width: 100%;
        height: unit(160);
        position: absolute;
        bottom: 0;
        left: 0;
        @include M(2);

        @include e(name-small) {
            color: $C31;
            @include T(23);
            margin-left: unit(20);
            margin-bottom: unit(8);
            margin-top: unit(72);
            @include text-overflow;
        }

        @include e(progress-small) {
            position: absolute;
            bottom: 0;
            height: unit(4);
            width: 100%;
        }

        @include e(meta-small) {
            margin-left: unit(20);

            .user-icon-small {
                fill: $C36;
                margin-right: unit(10);
            }

            .user-count-small {
                color: $C36 !important;
                @include T(27);
                vertical-align: middle;
                margin-right: unit(10);
            }

            .channel-small {
                color: $C31;
                @include T(27);
                vertical-align: middle;

            }
        }
    }
}
</style>
