<template>
  <div :class="'next-poster-'+type" >
    <div :class="'img-'+type" :style="{'background-image':'url('+imgUrl+')'}"></div>
    <mo-icon :class="'default-'+type" name="clapperboard" type="fill" :size="80"></mo-icon>
    <div :class="'mask-'+type">
      <div class="name" :title="name">{{name}}</div>
      <div class="meta">
        <span class="subname">{{subname}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from '@/utils/mixin'
export default {
  name: 'next-poster',
  mixins: [
    mixins
  ],
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    subname: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'large',
      validator: (val) => {
        return ['large', 'medium', 'small'].indexOf(val) !== -1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.next-poster-large {
    position: relative;
    cursor: pointer;
    width: unit(680);
    height: unit(382);
    margin-right: unit(20);
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(2){
        margin-right: 0;
    }
    .img-large {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        position: absolute;
    }
    .default-large{
        position: absolute;
        z-index: -1;
        fill: $C35;
    }
    .mask-large {
        position: absolute;
        bottom: 0;
        left: 0;
        @include M(2);
        height: unit(230);
        width: 100%;
        z-index: 1;

        .name {
            @include T(22);
            margin-left: unit(20);
            margin-top: unit(140);
            @include text-overflow;
        }

        .meta {
            margin-left: unit(20);

            .subname {
                @include T(26);
                @include text-overflow;
            }
        }
    }

}
/*
left-poster
 311x540
mask 170 m2
mask-title left 20 t23 c31 bottom 14
t26 c31 bottom 20

right-poster 260x146
mask m2 90
mask-title t25 c31 bottom 10
t29 c31 bottom 15 left 12
*/
.next-poster-medium{
    position: relative;
    cursor: pointer;
    width: unit(540);
    height: unit(311);
    margin-right: unit(20);
    display: flex;
    justify-content: center;
    align-items: center;
    .img-medium {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        position: absolute;
    }
    .default-medium{
        position: absolute;
        z-index: -1;
        fill: $C35;
    }
    .mask-medium {
        position: absolute;
        bottom: 0;
        left: 0;
        @include M(2);
        height: unit(170);
        width: 100%;
        z-index: 1;

        .name {
            @include T(23);
            margin-left: unit(20);
            margin-top: unit(83);
            @include text-overflow;
        }

        .meta {
            margin-left: unit(20);

            .subname {
                @include T(26);
                @include text-overflow;
            }
        }
    }

}

.next-poster-small{
    position: relative;
    cursor: pointer;
    width: unit(260);
    height: unit(146);
    margin-bottom: unit(20);
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(2){
        margin-right: 0;
    }
    .img-small {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        position: absolute;
    }
    .default-small{
        position: absolute;
        z-index: -1;
        fill: $C35;
    }

    .mask-small {
        position: absolute;
        bottom: 0;
        left: 0;
        @include M(2);
        height: unit(90);
        width: 100%;
        z-index: 1;

        .name {
            @include T(25);
            margin-left: unit(20);
            margin-top: unit(24);
            @include text-overflow;
        }

        .meta {
            margin-left: unit(20);

            .subname {
                @include T(29);
                @include text-overflow;
            }
        }
    }

}
</style>
