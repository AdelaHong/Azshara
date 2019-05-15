<template>
  <div class="moki-login-dialog" v-if="isShow">
    <div class="moki-login-dialog--title">
      <span>{{$t('loginDialog.title')}}</span>
      <mo-icon class="close" name="close" :size="20" @click="cancel"></mo-icon>
    </div>
    <div class="moki-login-dialog--content">
      <mo-input v-model="userName" class="user-name"></mo-input>
      <mo-input v-model="userName" class="password" nativeType="password"></mo-input>
    </div>
    <div class="moki-login-dialog--remember">
      <mo-icon class="remember" name="close" :size="20"></mo-icon>
      <span class="info">{{$t('loginDialog.remember')}}</span>
    </div>
    <div class="moki-login-dialog--action">
      <mo-button class="login-button" type="primary">{{$t('loginDialog.buttonText')}}</mo-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    userName: '',
    password: ''
  }),
  computed: {
    ...mapState('DIALOG', {
      isShow: s => s.isShowLoginDialog
    })

  },
  methods: {
    ...mapMutations('DIALOG', {
      changeDialog4Login: 'CHANGE_LOGIN_DIALOG_STATUS'
    }),
    cancel () {
      this.changeDialog4Login(false)
    }
  }
}
</script>
<style lang="scss" scoped>
@include b(login-dialog) {
  width: unit(460);
  height: unit(331);
  background-color: $C14;
  @include m(title) {
    position: relative;
    text-align: center;
    height: unit(60);
    line-height: unit(60);
    width: 100%;
    border-bottom: unit(1) solid $C19;
    @include T(14);
    color: $C35;
    .close {
      position: absolute;
      right: unit(35);
      top:unit(20);
      fill: $C35;
      cursor: pointer;
    }
  }
  @include m(content) {
    text-align: center;
    .user-name {
      margin-top: unit(35);
      margin-bottom: unit(20);
    }
    .password {
      @extend .user-name;
       margin-top: unit(0);
    }
  }
  @include m(remember) {
    text-align: center;
    margin-bottom: unit(20);
    .remember {
      margin-right: unit(10);
    }
    .info {
      @include T(32);
    }
  }
  @include m(action) {
    text-align: center;
    margin-bottom: unit(35);
    .login-button{
      width: unit(300);
    }
  }
}
</style>
