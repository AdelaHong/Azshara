<template>
  <nav
    class="moki-header"
    :class="[isScrollDown?'is-short':'',!isSpecialWeb?'is-big-wrap':'is-small-wrap']"
  >
    <div class="moki-header--container">
      <div class="moki-header__banner">
        <div class="logo">
          <img class="logo-main" src="../../assets/logo.png" alt>
        </div>
      </div>
      <ul class="moki-header__menus-md">
        <li class="menu" v-for="(item,index) in headerList" :key="index">
          <router-link class="item" :to="item.url">{{$t(item.name)}}</router-link>
        </li>
      </ul>
      <menu-search></menu-search>
      <div class="moki-header__history">
        <mo-icon name="time" :size="20"></mo-icon>
        <span class="text">{{$t('menu.history')}}</span>
      </div>
      <menu-user @click="targetAction" :isLogin="true" :userInfo="userInfo" :menus="featuresMenus()"></menu-user>
      <div class="moki-header__lang">中文</div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import MenuUser from './components/MenuUser.vue'
import MenuSearch from './components/MenuSearch.vue'
import UIConstant from '@utils/UIConstant'

export default {
  name: 'headerWrap',
  components: {
    MenuUser,
    MenuSearch
  },
  data: () => ({
    searchKey: '',
    userInfo: {
      imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1122649470,955539824&fm=27&gp=0.jpg',
      userId: '8902983-34854785',
      username: 'Login'
    }
  }),
  computed: {
    ...mapState('HEADER', {
      isShowMenu: s => s.isShowMenu,
      isScrollDown: s => s.isScrollDown,
      headerList: s => s.headerList,
      isSpecialWeb: s => s.isSpecialWeb
    })
  },
  methods: {
    ...mapGetters('MY', {
      'featuresMenus': 'featuresMenus'
    }),
    ...mapMutations('HEADER', {
      setMenuStatus: 'setMenuStatus',
      scrollListener: 'SCROLL_LISTENER',
      changeFeatureMenu: 'CHANGE_FEATURE_MENU'
    }),
    ...mapMutations('DIALOG', {
      switchLoginDialog: 'CHANGE_LOGIN_DIALOG_STATUS'
    }),
    userLogin () {
      this.setMenuStatus(false)
    },
    targetAction (evt) {
      this.changeFeatureMenu(false)
      switch (evt) {
        case UIConstant.USER_LOGIN:
          break
        case UIConstant.MENU_BASIC:
          break
      }
    }
  },
  mounted () {
    this.scrollListener()
    document.body.addEventListener('click', () => {
      this.changeFeatureMenu(false)
    })
  }
}
</script>

<style lang="scss" scoped>
  /*
  移动优先开发原则
  */

  @include b(header) {
    height: unit(60);
    width: 100%;
    background-color: $C06;
    @include when(big-wrap) {
      height: unit(200);
    }
    @include when(small-wrap) {
      height: unit(80);
      border-bottom: unit(1) solid $C23;
    }
    @include m(container) {
      height: unit(60);
      padding: 0 unit(10);

      @include e(banner) {
        height: 100%;
        width: 100%;
        display: flex;
        fill: $C34;

        .action {
          flex: (1/3);
          line-height: unit(60);
        }

        .search-menu {
          flex: (1/3);
        }

        .logo {
          flex: (1/3);
          line-height: unit(60);
          text-align: center;

          &-main {
            width: unit(40);
            height: unit(40);
            vertical-align: middle;
          }
        }
      }

      @include e(menus-md) {
        display: none;
      }
      @include e(input) {
        @extend .moki-header__menus-md;
      }
      @include e(histroy) {
        @extend .moki-header__menus-md;
      }

      @include e(avatar) {
        @extend .moki-header__menus-md;
      }
      @include e(lang) {
        @extend .moki-header__menus-md;
      }
      @include e(menus) {
        background-color: $C06;
        position: fixed;
        top: unit(60);
        bottom: 0;
        left: 0;
        right: 0;

        .router-link-exact-active,
        .router-link-active {
          color: $C32;

          &:after {
            content: "";
            width: 100% !important;
            height: unit(4);
            background-color: $C04 !important;
            left: 0;
            top: unit(30);
            position: absolute;
          }
        }

        .search {
          text-align: center;
        }

        .menus {
          height: 40%;
          width: 50%;
          margin: 0 auto;
          margin-top: 4em;

          .menu {
            text-align: center;
            height: 4em;
            position: relative;

            .item {
              text-align: center;
              @include T(29);
              cursor: pointer;

            }
          }

        }

        .login {
          text-align: center;
        }
      }
    }

  }

  @media screen and (min-width: unit(980)) {
    @include b(header) {
      width: 100%;
      display: flex;
      justify-content: center;
      @include M(1);

      @include when(short) {
        height: unit(80);
        background-color: $C06;
      }

      @include m(container) {
        display: flex;
        height: unit(80);
        padding: 0 unit(10);
        width: unit(980);
        align-items: center;
        transition: $transition-time;
        @include e(banner) {
          width: unit(120);
          height: unit(40);
          margin-right: unit(20);

          .action {
            display: none;
          }

          .logo {
            &-main {
              vertical-align: baseline;
            }
          }
        }

        @include e(menus-md) {
          display: flex;
          align-items: center;
          .router-link-exact-active,
          .router-link-active {
            color: $C32;

            &:after {
              content: "";
              width: 100% !important;
              height: unit(4);
              background-color: $C04 !important;
              left: 0;
              top: unit(25);
              position: absolute;
            }
          }
          .menu {
            cursor: pointer;
            margin-right: unit(10);

            .item {
              @include T(29);
              position: relative;
              will-change: transition;
              display: inherit;
              text-align: center;
              transition: $transition-time;

              &:after {
                transition: $transition-time;
                content: "";
                width: 0;
                height: unit(4);
                background-color: $C11;
                left: 0;
                top: unit(25);
                position: absolute;
              }

              &:hover {
                color: $C32;

                &:after {
                  content: "";
                  width: 100%;
                  height: unit(4);
                  background-color: $C04;
                  left: 0;
                  top: unit(25);
                  position: absolute;
                }

              }
            }
          }
        }
        @include e(histroy) {
          display: flex;
          align-items: center;
          fill: $C34;
          width: unit(100);
          .text {
            @include T(29, $C34);
            cursor: pointer;
          }
        }
        @include e(lang) {
          @include T(29, $C34);
          border: unit(1) solid $C34;
          width: unit(40);
          border-radius: unit(18);
          text-align: center;
          margin-left: unit(40);
        }
      }

    }

  }

  @media screen and (min-width: unit(1380)) {
    @include b(header) {
      @include m(container) {
        width: unit(1380);
        @include e(banner) {
          margin-right: unit(40);

          .action {
            display: none;
          }
        }
        @include e(menus-md) {
          .menu {
            cursor: pointer;
            margin-right: unit(40);
          }
        }

        @include e(input) {
          margin-right: unit(40);
          margin-left: unit(200);
        }
        @include e(histroy) {
          .text {
            margin-left: unit(10);
          }
        }
        @include e(lang) {
          margin-left: unit(40);
        }
      }

    }

  }
</style>
