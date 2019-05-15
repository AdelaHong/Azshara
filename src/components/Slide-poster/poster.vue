<template>
  <div class="poster" :class="'poster-'+type">
    <div class="poster-pictures" :class="'size-'+type">
      <img :src="imgUrl" :alt="name">
      <slot></slot>
    </div>
    <div class="poster-title">{{name}}</div>
    <div class="poster-subtitle">{{subname}}</div>
  </div>
</template>
<script>
export default {
  name: 'poster',
  props: {
    name: {
      type: String,
      default: ''
    },
    subname: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical', 'bgVertical'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    heightUnit () {
      return this.height / 16 + 'rem'
    },
    widhtUnit () {
      return this.width / 16 + 'rem'
    }
  }
}
</script>
<style lang="scss" scoped>
.poster {
    margin-right: unit(20);
    &:last-child{
        margin-right: unit(0);
    }
    .poster-pictures {
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        .mok-progress{
            position: absolute;
            bottom: 0;
        }
    }

    .poster-title {
        @include T(29);
        color: $C31;
        margin-top: unit(15);
    }

    .poster-subtitle {
        @include T(32);
        color: $C35;
        margin-top: unit(10);
    }
}

.size-horizontal {
    width: unit(330);
    height: unit(186);
}

.poster-horizontal{
    width: unit(330);
}

.size-vertical {}
</style>
