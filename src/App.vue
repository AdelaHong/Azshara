<template>
  <div id="app">
    <!-- 广告组件 -->
    <banner v-if="isShowBanner" :views="promoViews"/>
    <header>
      <header-wrap></header-wrap>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <footer-wrap></footer-wrap>
    </footer>
      <!-- 此区域，描述项目整体背景图 -->
    <div id="frosted" :style="{'background-image':'url('+bgUrl+')'}">
    </div>
    <moki-dialog/>
    <snackBar/>
  </div>
</template>

<script>
import headerWrap from './views/Header'
import footerWrap from './views/Footer'
import banner from './components/Banner'
import mokiDialog from './views/Dialog'
import snackBar from '@components/SnackBar'
import { mapState } from 'vuex'
export default {
  components: {
    headerWrap,
    footerWrap,
    banner,
    mokiDialog,
    snackBar
  },
  computed: {
    ...mapState({
      bgUrl: s => s.bgroundUrl,
      isShowBanner: s => s.isShowBanner
    }),
    ...mapState('HOME', {
      promoViews: s => s.promoViews
    })
  }
}
</script>

<style lang="scss">
@import "@styles/common.scss";
</style>
