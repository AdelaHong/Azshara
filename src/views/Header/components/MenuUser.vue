<template>
  <div class="c-user-drop-down">
    <template v-if="!isLogin">
      <mo-button type="mini" @click="handleClick(UIConstant.USER_LOGIN)">{{$t('menu.loginButtonText')}}</mo-button>
    </template>
    <template v-else>
      <div class="c-user-drop-down__user-main" @click="handleShowMore">
        <img class="avatar" :src="userInfo.imgUrl" :alt="userInfo.imgUrl">
        <div class="user-name">{{userInfo.userId}}</div>
        <mo-icon class="arrow-icon" name="arrow-down-s" type="fill" :size="16"></mo-icon>
      </div>
      <div class="c-user-drop-down__top-arrow" v-show="menus.length && isShowFeatureMenu"></div>
      <ul class="c-user-drop-down__submenu" v-show="menus.length && isShowFeatureMenu">
        <li class="user-id">
          <span>{{'user id: d12348475322232'}}</span>
        </li>
        <li class="feature-item" v-for="(menu,index) of menus" :key="index">
          <mo-icon class="icon" :name="menu.iconName" type="fill" :size="16"></mo-icon>
          <span class="item-name">{{$t(menu.name)}}</span>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import UIConstant from '@utils/UIConstant'

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
    UIConstant,
    isShowFeatureMenu: false
  }),
  methods: {
    handleClick (constant) {
      this.$emit('click', constant)
    },
    handleShowMore () {
      this.isShowFeatureMenu = true
    }
  }
}
</script>

<style scoped lang="scss">
  @include component(user-drop-down) {
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
      .arrow-icon {
        fill: $C35;
      }
    }
    @include e(top-arrow){
      border: 8px solid transparent;
      border-bottom: 8px solid $C12;
      width: 0;
      height: 0;
      position: absolute;
      top: unit(32);
      left:unit(72);
      z-index: 4;
    }
    @include e(submenu){
      width: unit(218);
      position: absolute;
      background-color: $C12;
      top: unit(48);
      left: unit(-32);
      @include M(5);
      @include rc(1);
      z-index: 4;
      .user-id {
        @include T(32, $C31);
        @include text-overflow;
        margin: unit(20) unit(20) unit(10) unit(20);
      }
      .feature-item{
        height: unit(32);
        @include T(32, $C35);
        text-indent: unit(20);
        display: flex;
        align-items: center;
        &:last-child{
          margin-bottom: unit(20);
        }
        &:hover {
          background-color: $C03;
          color: $C31;
          fill: $C31;
        }
        .icon{
          margin-left: unit(20);
          fill: $C35;
        }
        .item-name{

        }
      }
    }
  }
</style>
