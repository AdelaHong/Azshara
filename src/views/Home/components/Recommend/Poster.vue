<template>
  <div class="moki-poster" :class="'is-'+type">
    <div class="moki-poster__image" :style="{'background-image':'url('+backgroundUrl+')'}"></div>
    <div class="moki-poster__default"></div>
    <div class="moki-poster__mask">
      <div class="title" :title="title">{{title}}</div>
      <div class="subtitle" :title="subtitle">{{subtitle}}</div>
      <div class="meta">
        <span>{{meta}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'poster',
  props: {
    type: {
      type: String,
      default: 'bigTile',
      validator: value =>
        ['bigTile', 'mediumTile', 'halfTile', 'smallTile'].includes(value)
    },
    posterIndex: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    meta: {
      type: Number,
      default: 0
    },
    backgroundUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin posterSize($w, $h) {
  width: unit($w);
  height: unit($h);
}

@mixin bg {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}

@mixin mask {
  width: 100%;
  @include M(2);
  height: unit(260);
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

@include b(poster) {
  position: relative;
  cursor: pointer;
  @include when(bigTile) {
    @include posterSize(380, 504);
    @include e(image) {
      @include bg;
    }
    @include e(default) {
    }
    @include e(mask) {
      @include mask;
      .title {
        @include T(22);
        margin-left: unit(20);
        @include text-overflow;
      }
      .subtitle {
        @include T(26);
        margin-left: unit(20);
      }
      .meta {
        @include T(27);
        margin-left: unit(20);
        margin-bottom: unit(20);
      }
    }
  }
  @include when(mediumTile) {
    @include posterSize(380, 243);
    @include e(image) {
      @include bg;
    }
    @include e(default) {
    }
    @include e(mask) {
      @include mask;
      height: unit(160);
      .title {
        @include T(23);
        margin-left: unit(20);
        @include text-overflow;
      }
      .subtitle {
        @include T(29);
        margin-left: unit(20);
      }
      .meta {
        @include T(27);
        margin-left: unit(20);
        margin-bottom: unit(25);
      }
    }
  }
  @include when(halfTile) {
    @extend .is-mediumTile;
    @include e(image) {
      width: unit(180);
    }
    @include e(mask) {
      left: unit(180);
      width: unit(200);
    }
  }
  @include when(smallTile) {
    @extend .is-bigTile;
    @include posterSize(180, 242);
    margin-bottom: unit(20);
    &:last-child {
      margin-bottom: unit(0);
    }
    @include e(image) {
    }
    @include e(mask) {
      height: unit(160);
      .title {
        @include T(23);
        margin-left: unit(20);
        @include text-overflow;
      }
      .subtitle {
        @include T(29);
        margin-left: unit(20);
      }
      .meta {
        @include T(27);
        margin-left: unit(20);
        margin-bottom: unit(25);
      }
    }
  }
}
</style>
