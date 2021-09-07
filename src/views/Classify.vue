<template>
  <div>
    <router-link to="/search" class="search">
      <van-icon name="search" />
      <div>荔枝特价9.99</div>
    </router-link>
    <one-tab></one-tab>
    <template v-if="showContent">
    <side-tab></side-tab>
    <goods-list></goods-list>
    </template>
    <!-- <van-loading /> -->
    <van-loading size="24px" vertical v-else>加载中...</van-loading>
  </div>
</template>

<style lang="less" scoped>
.search {
  width: 355px;
  height: 33px;
  color: #a1a1a1;
  margin: 11px auto 0;
  background-color: #eeeeee;
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import oneTab from '../components/OneTab.vue';
import sideTab from '../components/SideTab.vue';
import goodsList from '../components/GoodsList.vue';

export default {
  computed: {
    ...mapState(['showContent', 'sideList']),
  },
  methods: {
    ...mapMutations(['resetGoodslist']),
    ...mapActions(['goodsGet']),
  },
  components: {
    oneTab,
    sideTab,
    goodsList,
  },
  watch: {
    showContent() {
      if (this.showContent) {
        this.resetGoodslist();
        this.goodsGet({
          type: this.sideList[0], page: 1, sort: 'all',
        });
      }
    },
  },
};
</script>
