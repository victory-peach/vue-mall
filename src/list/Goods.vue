<template>
  <div class="goods-container">
    <el-row>
      <BreadCrumb />
    </el-row>
    <el-row>
      <el-col :span="19">
        <div class="border">
          <Category :list="categoryList" title="分类" />
        </div>
        <div class="goods-list">
          <ListNav />
          <ListCard :goods="goodsList" />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="wrapper">
          <h2>猜你喜欢</h2>
          <template v-for="item in dataList">
            <SmallCard :key="item.itemId" :likeData="item" />
          </template>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BreadCrumb from '@/list/BreadCrumb.vue'
import Category from '@/list/Category.vue'
import ListNav from '@/list/ListNav.vue'
import ListCard from '@/list/ListCard.vue'
import SmallCard from '@/components/index/card/SmallCard.vue'
import instance from '@/axios/axios.js'

export default {
  data () {
    return {
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
        },
        {
          areaName: '昌平镇',
          avgPrice: 86,
          commentNum: 1038,
          consumeNum: null,
          detailUrl: '',
          firstCate: [1, 20557],
          imgUrl:
            'https://p1.meituan.net/bbia/66fd7b3ea9b59d4687b42e07a514013593187.jpg@267w_150h_1e_1c',
          itemId: '178138654',
          lowPrice: '16.0',
          saleNum: null,
          score: '4.4',
          title: '屯老二农家铁锅炖（松园店）'
        }
      ],
      categoryList: [],
      regionList: [],
      goodsList: []
    }
  },
  components: {
    BreadCrumb,
    Category,
    ListNav,
    ListCard,
    SmallCard
  },
  created () {
    console.log(this.$route.params.name)
    instance.get('/api/meituan/index/nav').then((res) => {
      this.categoryList = res.data
    })
    instance.get('/api/meituan/list/goodsList/' + this.$route.params.name).then((res) => {
      this.goodsList = res.data
    })
    instance.get('/api/meituan/list/recommend.json').then((res) => {
      this.dataList = res.data
    })
  }
}
</script>
<style scoped lang="less">
.el-row {
  width: 1190px !important;
  margin: 0 auto;
  &:nth-child(2) {
    .el-col:nth-child(1) {
      width: 948px;
    }
    .el-col:nth-child(2) {
      margin-left: 10px;
    }
  }
}
.border {
  border: 1px solid #e5e5e5;
  border-radius: 4px;
}
.goods-list {
  border-radius: 4px;
  margin-top: 20px;
  border: 1px solid #e5e5e5;
  padding: 15px 20px 0;
  background-color: #fff;
}
.wrapper {
  width: 230px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding: 16px 20px 0;
  background-color: #fff;
  .smallcard-container {
    width: 230px;
    padding: 0;
    margin-bottom: 20px;
  }
}
h2 {
  font-size: 16px;
  color: #333333;
  line-height: 22px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 12px;
}
</style>
