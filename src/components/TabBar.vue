<template>
  <div>
    <van-tabbar fixed route class="cart">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/home/classify">分类</van-tabbar-item>
      <van-tabbar-item
      icon="cart-o"
      :badge="badge"
      to="/home/shopping"
      id="shopping-car">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
    badge() {
      return Object.values(this.count).reduce((prev, next) => prev + next, 0);
    },
  },
};
</script>
<style scoped>
.cart{
  z-index: -1;
}
</style>
