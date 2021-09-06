<template>
  <div class="nav-container">
    <el-row>
      <Nav />
    </el-row>
    <el-row>
      <Search :class="{ 'h': $route.name != 'index'}"/>
    </el-row>
  </div>
</template>

<script>
import Nav from '@/components/header/Nav.vue'
import Search from '@/components/header/Search.vue'

export default {
  components: {
    Nav,
    Search
  },
  mounted () {
    // console.log(this.$route)
  }
}
</script>

<style scoped lang="less">
.nav-container{
    width: 100%;
    box-shadow: 0 2px 27px 0 rgba(0, 0, 0 , 0.1);
  .h{
    height: 122px;
  }
}
</style>
