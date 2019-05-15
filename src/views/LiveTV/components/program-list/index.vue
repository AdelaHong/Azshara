<template>
  <div class="moki-programs">
    <div class="moki-programs--title">
      <mo-icon class="tv-icon" name="tv-2" :size="24"></mo-icon>
      <span class="title">{{$t('broadcast.programsTitle')}}</span>
      <mo-icon class="right-icon" name="arrow-right-s" :size="16"></mo-icon>
    </div>
    <div class="moki-programs--list">
      <virtual-list :size="72" :remain="11">
        <program
        v-for="(program,index) of view"
        :key="index"
        :logoUrl="program.logoUrl"
        :title="program.title"
        :subtitle="program.subtitle">
        <mo-progress :value="program.progress" :height="2"/>
        </program>
      </virtual-list>
    </div>
  </div>
</template>

<script>
import program from './program'
import virtualList from 'vue-virtual-scroll-list'
export default {
  name: 'programs',
  props: {
    view: {
      type: Array,
      default: () => []
    }
  },
  components: {
    virtualList,
    program
  }
}
</script>

<style lang="scss" scoped>
@include b(programs) {
    width: unit(445);

    @include m(title) {
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: flex-end;
        margin-bottom: unit(25);

        .tv-icon {
            fill: $C31;
            margin-right: unit(10);
        }

        .title {
            @include T(29);
            margin-right: unit(10);
        }

        .right-icon {
            fill: $C31;
        }
    }

    @include m(list) {
        background-color: rgb(53, 53, 51);
        height: unit(786);

        /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
        ::-webkit-scrollbar {
            width: unit(6);
            background-color: $C11;
        }

        /*定义滚动条轨道 内阴影+圆角*/
        /* 滚动槽 */
        ::-webkit-scrollbar-track {
            background-color: $C11;
        }

        /*定义滑块 内阴影+圆角*/
        /* 滚动条滑块 */
        ::-webkit-scrollbar-thumb {
            border-radius: unit(10);
            height: unit(40);
            background-color: $C03;
        }

        /*交互时样式设置*/
        ::-webkit-scrollbar-thumb:window-inactive {
            background-color: $C03;
        }

        /* 两边按钮设置*/
        ::-webkit-scrollbar-button {
            display: none;
        }
    }
}
</style>
