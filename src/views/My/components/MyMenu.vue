<template>
  <div class="c-my-menu">
    <div class="c-my-menu__avatar" @click="handleChosen(UIConstant.MENU_BASIC)"
         :class="[{'is-active':UIConstant.MENU_BASIC === chosenMenu}]">
      <img class="avatar" :src="basicInfo.avatarUrl">
      <span class="username">{{basicInfo.username}}</span>
      <span class="rating-level">{{basicInfo.ratingLevel}}</span>
    </div>
    <div class="c-my-menu__menus">
      <div class="menu-item" v-for="(menuInfo,mIndex) of menuInfos" :key="mIndex">
        <div class="first-level" v-if="menuInfo.firstMenu!==''">{{$t(menuInfo.firstMenu)}}</div>
        <div class="second-level" v-for="(secInfo,msIndex) of menuInfo.secondMenu" :key="msIndex"
             @click="handleChosen(secInfo.id)" :class="[{'is-active':secInfo.id === chosenMenu}]">
          <mo-icon class="icon" :name="secInfo.iconName" type="fill" :size="16"></mo-icon>
          <span class="second-level-title">{{$t(secInfo.name)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UIConstant from '@utils/UIConstant'

export default {
  name: 'myMenu',
  data: () => ({
    UIConstant
  }),
  props: {
    basicInfo: {
      type: Object,
      default: () => ({})
    },
    menuInfos: {
      type: Array,
      default: () => []
    },
    chosenMenu: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleChosen (chosenId) {
      this.$emit('click', chosenId)
    }
  }
}
</script>
<style lang="scss" scoped>
  @include component(my-menu) {
    height: unit(980);
    width: unit(264);
    background-color: $C18;
    .is-active {
      border-left: unit(4) solid $C04;
      background-color: $C03;
    }
    @include e(avatar) {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: unit(1) solid $C21;
      .avatar {
        margin-top: unit(40);
        margin-bottom: unit(20);
        width: unit(76);
        height: unit(76);
        border-radius: 50%;
      }
      .username {
        @include T(23);
        width: unit(204);
        height: unit(30);
        line-height: unit(30);
        text-align: center;
        margin-bottom: unit(42);
        @include text-overflow;
      }
      .rating-level {
        @extend .username;
        @include T(23);
        color: $C35;
      }
    }
    @include e(menus) {
      height: 100%;
      display: flex;
      flex-direction: column;
      .menu-item {
        margin-top: unit(10);
        border-bottom: unit(1) solid $C21;

        &:last-child {
          border-bottom: none;
        }

        .first-level {
          @include T(16);
          color: $C35;
          height: unit(40);
          line-height: unit(40);
          text-indent: unit(30);
        }

        .second-level {
          cursor: pointer;
          @include T(29);
          color: $C35;
          height: unit(40);
          line-height: unit(40);
          text-indent: unit(30);
          transition: $transition-time;

          &:last-child {
            margin-bottom: unit(10);
          }

          &:hover {
            background-color: $C03;
            color: $C31;
            fill: $C31;
          }

          .icon {
            fill: $C35;
            margin-right: unit(25);
          }

          .second-level-title {
          }
        }
      }
    }
  }
</style>
