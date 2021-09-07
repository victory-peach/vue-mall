<template>
    <div>
        <!-- {{ goodsList }} -->
        <div class="header van-hairline--top-bottom">
            <div :class="{ active : headerType=='all' }" @touchend = "changeType('all')">综合</div>
            <div :class="{ active : headerType=='sale' }" @touchend = "changeType('sale')">销量</div>
            <div class="price"
            @touchend = "changeType('price')"
            :class="{'price-up': headerType === 'price-up',
                     'price-down': headerType === 'price-down'}"
            >价格</div>
        </div>
        <div class="goods-list">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check="false"
            >
            <goods-card
            v-for="good in goodsList"
            :key="good.id"
            v-bind="good"
            :num="count[good.id]"
            ></goods-card>
            </van-list>
          </van-pull-refresh>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import goodsCard from './GoodsCard.vue';

export default {
  components: {
    goodsCard,
  },
  data() {
    return {
      headerType: 'all',
      isLoading: false,
      finished: false,
      loading: false,
      page: 1,
    };
  },
  methods: {
    ...mapMutations(['resetGoodslist']),
    ...mapActions(['goodsGet']),
    onRefresh() {
      this.loading = true;
      this.isLoading = true;
      this.finished = false;
      this.resetGoodslist();
      this.goodsGet({ page: this.page, sort: this.headerType });
      this.finished = true;
      this.isLoading = false;
      this.loading = false;
    },
    async onLoad() {
      this.finished = false;
      this.page += 1;
      this.loading = true;
      const result = await this.goodsGet({ page: this.page, sort: this.headerType });
      if (result) {
        this.loading = false;
      } else {
        this.finished = true;
      }
    },
    changeType(type) {
      if (type === 'price') {
        if (this.headerType === 'price-up') {
          this.headerType = 'price-down';
        } else {
          this.headerType = 'price-up';
        }
      } else {
        this.headerType = type;
      }
      this.onRefresh();
    },
  },
  computed: {
    ...mapState(['goodsList']),
    ...mapState(['count']),
  },
};
</script>
<style lang="less" scoped>
.header{
    height: 25px;
    width: 296px;
    // background-color: aquamarine;
    position: relative;
    right: 0;
    left: 79px;
    display: flex;
    justify-content: flex-end;
    line-height: 25px;
    text-align: center;
    >div{
        width: 50px;
        color: #cecece;
        font-size: 14px;
    }
    .active, .price-up, .price-down{
        font-weight: bold;
        color: #ff1a90;
    }
    .price{
        margin-right: 8px;
        position: relative;
    }
    .price::before{
        position: absolute;
        right: 0;
        content: '';
        // display: inline-block;
        border: 4px solid transparent;
        border-bottom-color: #cecece;
        // border-style: solid;
        // border-width: 4px;
        top: 3px;
    }
    .price::after{
        content: '';
        border: 4px solid transparent;
        border-top-color: #cecece;
        // border-style: solid;
        // border-width: 4px;
        position: absolute;
        right: 0;
        bottom: 3px;
    }
    .price-down::before{
        border-bottom-color: #ff1a90;
    }
    .price-up::after{
        border-top-color: #ff1a90;
    }
}
.goods-list{
  position: fixed;
  right: 0;
  bottom: 50px;
  top: 175px;
  width: 296px;
  // background: #f40;
  overflow: auto;
}
.van-pull-refresh{
  overflow: unset!important;
}
</style>
