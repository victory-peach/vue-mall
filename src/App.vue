<template>
  <div id="app">
    <transition :name="transitionName" :mode="this.$router.back ? 'out-in' : 'in-out'">
    <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
// import Home from './views/Home.vue';

export default {
  data() {
    return {
      transitionName: 'left',
    };
  },
  // components: {
  //   Home,
  // },
  created() {
    const count = JSON.parse(localStorage.getItem('goods')) || {};
    this.$store.commit('setCount', count);
  },
  watch: {
    $route(to, from) {
      if (to.name === 'classify' && from.name === 'search') {
        this.$router.back = true;
      }
      if (this.$router.back) {
        this.transitionName = 'right';
      } else {
        this.transitionName = 'left';
      }
      this.$router.back = false;
    },
  },
};
</script>
<style lang="less">
.view{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition:  transform .3s linear;
}
  .left-enter{
    transform: translate(100%, 0);
  }
  .right-leave-to{
    transform: translate(100%, 0);
  }
</style>
