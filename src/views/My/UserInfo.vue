<template>
    <div class="moki-info">userInfo</div>
</template>
<script>
import { mapMutations } from 'vuex'
import UIConstant from '@utils/UIConstant'
export default {
  name: 'userInfo',
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

</style>
