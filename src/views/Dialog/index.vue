<template>
    <div class="moki-dialog" v-if="isShow">
        <LoginDialog/>
    </div>
</template>
<script>
import LoginDialog from './LoginDialog.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    LoginDialog
  },
  computed: {
    ...mapGetters('DIALOG', {
      isShow: 'dialogShow'
    })
  }
}
</script>
<style lang="scss" scoped>
@include b(dialog){
    position: fixed;
    z-index: 999;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    background-color: $C09;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
