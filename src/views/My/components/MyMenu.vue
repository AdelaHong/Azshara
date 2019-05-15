<template>
  <div class="moki-my-menu">
    <div class="moki-my-menu__avatar">
      <img class="avatar" :src="basicInfo.avatarUrl">
      <span class="username">{{basicInfo.username}}</span>
      <span class="rating-level">{{basicInfo.ratingLevel}}</span>
    </div>
    <div class="moki-my-menu__menus">
      <div class="menu-item" v-for="(menuInfo,Mindex) of menuInfos" :key="Mindex">
        <div class="first-level">{{$t(menuInfo.firstMenu)}}</div>
        <div class="second-level" v-for="(secInfo,Msindex) of menuInfo.secondMenu" :key="Msindex">
          <mo-icon class="icon" :name="secInfo.iconName" type="fill" :size="16"></mo-icon>
          <span class="second-level-title">{{$t(secInfo.name)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myMenu',
  props: {
    basicInfo: {
      type: Object,
      default: () => ({})
    },
    menuInfos: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
@include b(my-menu) {
  height: unit(980);
  width: unit(264);
  background-color: $C18;
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
    justify-content: center;
    padding: 0 unit(30);
    .menu-item {
      margin-top: unit(10);
      margin-bottom: unit(10);
      .first-level {
        @include T(16);
        color: $C35;
        height: unit(40);
        line-height: unit(40);
      }
      .second-level {
        @include T(29);
        color: $C35;
        height: unit(40);
        line-height: unit(40);
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
