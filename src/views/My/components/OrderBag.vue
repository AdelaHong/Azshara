<template>
  <div class="c-bag" @click="handleClick">
    <div class="c-bag__theme">
      <mo-icon class="icon" :name="type" :size="56" type="fill"></mo-icon>
    </div>
    <div class="c-bag__content">
      <div class="title">{{title}}</div>
      <div class="subtitle">{{subtitle}}</div>
      <div class="meta">{{meta}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderBag',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    meta: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'vip',
      validate: (value) => ['vip', 'wallet', 'refund'].includes(value)
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
<style lang="scss" scoped>
  @include component(bag) {
    display: inline-flex;
    width: unit(523);
    height: unit(140);
    background-color: $C19;
    cursor: pointer;
    &:hover {
      @include e(theme) {
        background-color: $C03;
      }
    }
    &:active {
      @include e(theme) {
        background-color: $C04;
      }
      @include e(content) {
        border-right: unit(7) solid $C04;
      }
    }
    @include e(theme) {
      @include rc(1);
      transition: all $transition-time;
      width: unit(110);
      background-color: $C21;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        fill: $C31;
      }
    }
    @include e(content) {
      @include rc(1);
      width: unit(413);
      background-color: $C17;
      border-right: unit(7) solid $C21;
      transition: all $transition-time;
      .title {
        @include T(26);
        margin: unit(20) 0 unit(20) unit(30);
      }
      .subtitle {
        margin-left: unit(30);
        @include T(32, $C35);
      }
      .meta {
        margin-left: unit(30);
        @include T(32, $C35);
      }
    }
  }
</style>
