<template>
  <div class="moki-snack-bar" v-if="isShowMessage">
    <span class="messages">{{messages}}</span>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'snackBar',
  computed: {
    ...mapState({
      isShowMessage: s => s.isShowMessage,
      messages: s => s.messages
    })
  }
}
</script>

<style lang="scss" scoped>
@include b(snack-bar) {
  position: fixed;
  bottom: 0;
  left: 50%;
  padding: unit(20);
  transform: translateX(-50%);
  background-color: $C14;
  @include rc(1);
  .messages {
    @include T(29);
  }
}
</style>
