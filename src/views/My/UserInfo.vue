<template>
    <div class="moki-info">
      <order-bag title="测试标题" subtitle="测试标题" meta="测试标题"/>
      <order-bag title="测试标题" subtitle="测试标题" meta="测试标题"/>
      <order-bag title="测试标题" subtitle="测试标题" meta="测试标题"/>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import UIConstant from '@utils/UIConstant'
import OrderBag from './components/OrderBag.vue'
export default {
  name: 'userInfo',
  components: {
    OrderBag
  },
  data: () => ({}),
  mounted () {
    this.setMenuActive(UIConstant.MENU_BASIC)
  },
  methods: {
    ...mapMutations('MY', {
      'setMenuActive': 'SET_MENU_ACTIVE'
    })
  }
}
</script>

<style lang="scss" scoped>
@include b(info){
}
</style>
