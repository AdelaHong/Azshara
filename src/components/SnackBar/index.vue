<template>
  <div class="c-snack-bar" v-if="isShowMessage">
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
@include component(snack-bar) {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 50%;
  max-width: unit(960);
  min-width: unit(360);
  max-height: unit(104);
  min-height: unit(56);
  padding: 0 unit(30);
  transform: translateX(-50%);
  background-color: $C14;
  @include rc(1);
  .messages {
    @include T(29);
  }
}
</style>
