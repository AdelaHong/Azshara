<template>
    <div class="moki-program">
        <div class="moki-program--logo">
            <img class="logo" :src="logoUrl" :alt="title">
        </div>
        <div class="moki-program--icons">
            <mo-icon name="lock" type="fill" :size="14"></mo-icon>
        </div>
        <div class="moki-program--name">
            <div class="moki-program__title">{{title}}</div>
            <div class="moki-program__subtitle">{{subtitle}}</div>
        </div>
        <div class="moki-program--progress">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'program',
  props: {
    logoUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }

  }
}
</script>
<style lang="scss" scoped>
@include b(program) {
    height: unit(72);
    display: flex;
    align-items: center;
    position: relative;
    @include m(logo) {
        width: unit(54);
        height: unit(54);
        margin-left: unit(20);
        margin-right: unit(15);
        .logo{
            width: 100%;
            height: 100%;
        }
    }

    @include m(icons) {
        height: 100%;
        fill: $C31;
        margin-right: unit(15);
    }

    @include m(name) {

        @include e(title) {
            @include T(29);
            color: $C31;
            @include text-overflow;
            width: unit(328);
            margin-top: unit(15);
        }

        @include e(subtitle) {
            @include T(32);
            color: $C35;
            @include text-overflow;
            width: unit(328);
            margin-bottom: unit(9);
        }

    }
    @include m(progress){
        position: absolute;
        width: unit(328);
        bottom: 0;
        right: 0;
    }
}
</style>
