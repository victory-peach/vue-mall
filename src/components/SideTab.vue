<template>
  <div class="side-tab" ref="sideTab">
    <div
      v-for="(item, index) in sideList"
      :class="{ active: index === curIndex }"
      @touchend="selectItem(index, $event)"
      @touchstart="move = false"
      @touchmove="move = true"
      :key="item"
    >
      {{ index == 0 ? '全部' : item }}
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      move: false,
      curIndex: 0,
    };
  },
  methods: {
    ...mapMutations(['resetGoodslist']),
    ...mapActions(['goodsGet']),
    selectItem(index, e) {
      if (this.move) {
        return;
      }
      this.curIndex = index;
      this.tabmoveCenter(e);
      this.resetGoodslist();
      this.goodsGet({
        type: this.sideList[index], page: 1, size: 5, sort: 'all',
      });
    },
    tabmoveCenter(e) {
      const itemHeight = e.target.offsetHeight;
      const { sideTab } = this.$refs;
      const sidetabHeight = sideTab.offsetHeight;
      const itemTop = e.target.getBoundingClientRect().top - sideTab.getBoundingClientRect().top;
      //   sideTab.scrollTop += itemTop + itemHeight / 2 - sidetabHeight / 2;
      this.moveTo(sideTab.scrollTop, itemTop + itemHeight / 2 - sidetabHeight / 2);
      //   console.log(itemHeight, itemTop, sideTab.scrollTop, sidetabHeight);
    },
    moveTo(start, end) {
      const { sideTab } = this.$refs;
      let dis = 0;
      let speed = 5;
      if (end < 0) {
        speed *= -1;
      }
      const timer = setInterval(() => {
        dis += speed;
        sideTab.scrollTop = start + dis;
        if (Math.abs(dis) > Math.abs(end)) {
          sideTab.scrollTop = start + end;
          clearInterval(timer);
        }
      }, 2);
    },
  },
  computed: {
    ...mapState(['sideList']),
  },
  mounted() {
    // this.resetGoodslist();
    // this.goodsGet({
    //   type: this.sideList[0], page: 1, sort: 'all',
    // });
  },
};
</script>
<style lang="less" scoped>
.side-tab {
  width: 79px;
  position: fixed;
  left: 0;
  top: 150px;
  bottom: 50px;
  overflow: auto;
  border-right: 1px solid #ddd;
  &::-webkit-scrollbar {
    display: none;
  }
  div {
    height: 40px;
    text-align: center;
    line-height: 40px;
    position: relative;
  }
  .active {
    color: #ff1a99;
    font-weight: bold;
  }
  .active::before {
    background-color: #ff1a99;
    position: absolute;
    width: 6px;
    height: 18px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    content: "";
  }
}
</style>
