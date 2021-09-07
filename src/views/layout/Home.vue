<template>
  <div class="home">
    <left-menu :key="key"></left-menu>
    <div>
    <right-nav></right-nav>
    <router-view></router-view>
    </div>
    <!-- <products-list></products-list> -->
  </div>
</template>

<script>
import leftMenu from '../components/LeftMenu.vue';
import rightNav from '../components/RightNav.vue';
// import productsList from '../../components/ProductsList.vue';

export default {

  data() {
    return {
      key: new Date().getTime(),
    };
  },
  watch: {
    $route(a, b) {
      console.log(a, b);
      this.key = new Date().getTime();
    },
  },
  methods: {
  },
  components: {
    leftMenu,
    rightNav,
  },
  created() {
    console.log('======');
  },
  updated() {
    console.log('updata');
  },
};
</script>

<style  lang="less">
@import url("~@/assets/css/home.less");
</style>
