<template>
  <el-container>
    <el-header height="">
      <Header />
    </el-header>
    <el-main :class="{'mt' : $route.name != 'index'}">
            <router-view></router-view>
        </el-main>
    <el-footer height=""><Footer /></el-footer>
  </el-container>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped lang="less">
.el-header, .el-footer{
  padding: 0;
}
.el-main{
  margin-top: -50px;
  &.mt{
    margin-top: 20px;
  }
  padding: 0;
}
.el-footer{
  margin-top: 40px;
}
</style>
