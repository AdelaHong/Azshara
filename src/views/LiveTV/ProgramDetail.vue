<template>
  <div class="moki-detail">
    <div class="moki-detail--poster">
        <img class="poster" src="http://img5.mtime.cn/CMS/News/2019/05/04/140021.38161755_620X620.jpg" alt="">
    </div>
    <div class="moki-detail--text">
      <div class="moki-detail__title">
        <div class="title">权力的游戏</div>
        <div class="subtitle">第八季首播集最受关注 将迎来最后决战</div>
      </div>
      <div class="moki-detail__description">
        <p>时光网讯 美剧《权力的游戏》第八季第一集被收录吉尼斯世界纪录，这一次被认证为“全球最受欢迎的剧集首播”(Most in-demand TV premiere)。根据电视内容Parrot Analytics提供的数据，在4月14日这一天，《权力的游戏》第八季第一集全球人均需求25.46%，成为历史新高，剧集在美国、英国和法国最受欢迎。《权力的游戏》第八季是最终季，共有6集，讲述了龙母和异鬼、瑟曦太后之间最后的权力争斗。在刚刚播出的第八季第三集中，人类和异鬼的战争已经结束，接下来就要迎来龙母和瑟曦太后的最终对决</p>
      </div>
      <div class="moki-detail__button">
        <mo-button type="primary">dsadas</mo-button>
        <mo-button type="mini" iconName="lock">提醒</mo-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@include b(detail) {
    display: flex;
    @include m(poster) {
        margin-right: unit(30);
        .poster{
            width: unit(610);
            height: unit(344);
        }
    }

    @include m(text) {
        @include e(title) {
            .title {
                @include T(22);
                color: $C31;
                margin-bottom: unit(20);
            }

            .subtitle {
                @include T(29);
                color: $C31;
                margin-bottom: unit(20);
            }
        }

        @include e(description) {
            @include T(29);
            color: $C35;
        }
        @include e(button){
            margin-top: unit(20);
        }
    }
}
</style>
