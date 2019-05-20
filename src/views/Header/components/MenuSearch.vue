<template>
  <div class="c-search">
    <mo-input type="search" :isError="false" placeholder="默认设置" v-model="searchKey"></mo-input>
    <div class="c-search__results"></div>
  </div>
</template>

<script>
export default {
  name: 'MenuSearch',
  data: () => ({
    searchKey: ''
  })
}
</script>

<style scoped lang="scss">
  @include component(search) {
    @include e(results) {
      width: unit(320);
      background-color: $C12;
      @include rc(1);

    }
  }
</style>
