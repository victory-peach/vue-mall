<template>
  <div class="like-container">
    <CardNav :type="like" />
    <div class="content"  >
      <template v-for="item in dataList">
      <SmallCard :key="item.itemId" :likeData="item" />
      </template>
    </div>
  </div>
</template>

<script>
import CardNav from '@/components/index/card/CardNav.vue'
import SmallCard from '@/components/index/card/SmallCard.vue'

export default {
  data () {
    return {
      like: {
        class: 'like',
        title: '猜你喜欢',
        list: [
          {
            text: '为你甄选最合适的',
            tab: 'tianjin'
          }
        ]
      },
      dataList: [
        {
          areaName: '望京',
          avgPrice: 63,
          commentNum: 2255,
          consumeNum: null,
          detailUrl: '',
          firstCate: [1, 20557],
          imgUrl:
            'https://p0.meituan.net/merchant/5cfc2788fbec889cbf14e6a680a99e3d82463.jpg@267w_150h_1e_1c',
          itemId: '158907640',
          lowPrice: '98.0',
          saleNum: null,
          score: '4.6',
          title: '晓寿司（望京soho店）'
        }, {
          areaName: '昌平镇',
          avgPrice: 86,
          commentNum: 1038,
          consumeNum: null,
          detailUrl: '',
          firstCate: [1, 20557],
          imgUrl: 'https://p1.meituan.net/bbia/66fd7b3ea9b59d4687b42e07a514013593187.jpg@267w_150h_1e_1c',
          itemId: '178138654',
          lowPrice: '16.0',
          saleNum: null,
          score: '4.4',
          title: '屯老二农家铁锅炖（松园店）'
        }
      ]
    }
  },
  components: {
    CardNav,
    SmallCard
  }
}
</script>

<style scoped lang="less">
.like-container{
  margin-top: 40px;
  border: 1px solid #e5e5e5;
  border-top: none;
}
.content{
  background-color: #fff;
  padding: 10px 10px 20px 10px;
  box-sizing: border-box;
  .smallcard-container{
  padding: 10px;

  }
}
</style>
