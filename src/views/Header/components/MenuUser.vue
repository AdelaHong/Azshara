<template>
  <div class="c-user-drop-down">
    <template v-if="!isLogin">
      <mo-button type="mini" @click.stop="handleClick(UIConstant.USER_LOGIN)">{{$t('menu.loginButtonText')}}</mo-button>
    </template>
    <template v-else>
      <div class="c-user-drop-down__user-main" @click.stop="handleShowMore">
        <img class="avatar" :src="userInfo.imgUrl" :alt="userInfo.imgUrl">
        <div class="user-name">{{userInfo.username}}</div>
      </div>
      <div class="c-user-drop-down__top-arrow" v-show="menus.length && isShowFeatureMenu"></div>
      <ul class="c-user-drop-down__submenu" v-show="menus.length && isShowFeatureMenu">
        <li class="user-id" @click.stop="handleClick(UIConstant.MENU_BASIC)">
          <span>{{$t('menu.userId')}} {{userInfo.userId}}</span>
        </li>
        <li class="feature-item" v-for="(menu,index) of menus" :key="index"
            @click.stop="handleClick(menu.id)">
          <mo-icon class="icon" :name="menu.iconName" type="fill" :size="16"></mo-icon>
          <span class="item-name">{{$t(menu.name)}}</span>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import UIConstant from '@utils/UIConstant'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'menuUser',
  props: {
    menus: {
      type: Array,
      default: () => ([])
    },
    userInfo: {
      type: Object,
      default: () => ({})
    },
    isLogin: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    UIConstant
  }),
  computed: {
    ...mapState('HEADER', {
      isShowFeatureMenu: s => s.isShowFeatureMenu
    })
  },
  methods: {
    ...mapMutations('HEADER', {
      'changeFeatureMenu': 'CHANGE_FEATURE_MENU'
    }),
    handleClick (constant) {
      this.$emit('click', constant)
    },
    handleShowMore () {
      this.changeFeatureMenu(true)
    }
  }
}
</script>

<style scoped lang="scss">
  @include component(user-drop-down) {
    margin-left: unit(40);
    cursor: pointer;
    position: relative;
    .mok-button--mini {
      color: $C35;
    }
    @include e(title) {

    }
    @include e(user-main) {
      display: flex;
      align-items: center;
      .avatar {
        background-color: #000;
        width: unit(35);
        height: unit(35);
        border-radius: 50%;
      }
      .user-name {
        @include T(29, $C35);
        margin-left: unit(10);
        max-width: unit(100);
        @include text-overflow;
      }
    }
    @include e(top-arrow) {
      border: 8px solid transparent;
      border-bottom: 8px solid $C12;
      width: 0;
      height: 0;
      position: absolute;
      top: unit(42);
      left: unit(62);
      z-index: 4;
    }
    @include e(submenu) {
      width: unit(218);
      position: absolute;
      background-color: $C12;
      top: unit(58);
      left: unit(-40);
      @include M(5);
      @include rc(1);
      z-index: 4;
      .user-id {
        @include T(32, $C31);
        @include text-overflow;
        padding: unit(20) unit(20) unit(10) unit(20);

        &:hover {
          background-color: $C03;
        }
      }
      .feature-item {
        height: unit(32);
        @include T(32, $C35);
        text-indent: unit(20);
        display: flex;
        align-items: center;

        &:last-child {
          margin-bottom: unit(20);
        }

        &:hover {
          background-color: $C03;
          color: $C31;
          fill: $C31;
        }

        .icon {
          margin-left: unit(20);
          fill: $C35;
        }

        .item-name {

        }
      }
    }
  }
</style>
