<template>
  <div class="c-search">
    <mo-input type="search" :isError="false" placeholder="默认设置" v-model="searchKey"
              @click.stop="handleFocus"></mo-input>
    <div class="c-search__results" v-show="isShowSearchResult">
      <div class="top-arrow"></div>
      <ul class="lists">
        <li class="recommend-item" v-show="isShowRecommend">
          <img class="poster-main"
               src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1122649470,955539824&fm=27&gp=0.jpg"
               alt="">
          <div class="title">
            <div class="mainTitle">mainTitle</div>
            <div class="subtitle">subtitle</div>
          </div>
        </li>
        <li class="item" v-for="(item,index) of results" :key="index"
            @click.stop="handleClick(item.id)">
          <span class="item-name">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MenuSearch',
  data: () => ({
    searchKey: '',
    _cacheSearchKey: '',
    results: [
      {
        id: '321312',
        name: 'casdsdada'
      }, {
        id: '321312',
        name: 'casdsdada'
      }, {
        id: '321312',
        name: 'casdsdada'
      }],
    isShowRecommend: false
  }),
  watch: {
    searchKey (newQuestion) {
      this._cacheSearchKey = newQuestion
      this.debouncedGetAnswer()
    }
  },
  created () {
    this.debouncedGetAnswer = this.$_.debounce(this.getAnswer, 500)
  },
  computed: {
    ...mapState('HEADER', {
      isShowSearchResult: s => s.isShowSearchResult
    })
  },
  methods: {
    ...mapMutations('HEADER', {
      changeSearchResult: 'CHANGE_SEARCH_RESULT'
    }),
    getAnswer () {
      this.isShowRecommend = this.$_.isEmpty(this._cacheSearchKey)
    },
    handleClick () {
    },
    handleFocus () {
      this.changeSearchResult(true)
    }
  }
}
</script>

<style scoped lang="scss">
  @include component(search) {
    position: relative;
    .top-arrow {
      border: 8px solid transparent;
      border-bottom: 8px solid $C12;
      width: 0;
      height: 0;
      position: absolute;
      z-index: 4;
      top: unit(-16);
      left: unit(156);
    }
    @include e(results) {
      @include M(5);
      width: unit(320);
      background-color: $C12;
      border-radius: unit(3);
      position: absolute;
      padding-top: unit(20);
      padding-bottom: unit(20);
      top: unit(60);
      left: unit(-17);
      .lists {
        border-radius: unit(3);

        .recommend-item {
          display: flex;

          .poster-main {
            margin-left: unit(20);
            margin-bottom: unit(15);
            width: unit(75);
            height: unit(103);
          }

          .title {
            .mainTitle {
              @include T(17);
              margin: unit(2) unit(15) unit(8) unit(15);
            }

            .subtitle {
              @include T(34);
              color: $C35;
              margin: unit(0) unit(15) unit(23) unit(15);
            }
          }
        }

        .item {
          background-color: $C14;
          height: unit(32);
          @include T(32);
          color: $C35;
          text-indent: unit(20);
          line-height: unit(32);
          cursor: pointer;

          &:hover {
            background-color: $C03;
            color: $C31;
          }
        }
      }
    }
  }
</style>
