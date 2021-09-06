<template>
  <el-row class="nav">
    <el-col :span="12">
      <LeftNav />
    </el-col>
    <el-col :span="12">
      <RightNav />
    </el-col>
  </el-row>
</template>

<script>
import LeftNav from '@/components/header/LeftNav.vue'
import RightNav from '@/components/header/RightNav.vue'

export default {
  components: {
    LeftNav,
    RightNav
  }
}
</script>

<style scoped lang="less">
@import "~@/assets/header/nav.less" ;

.nav {
  width: 1190px !important;
  margin: 0 auto;
  background-color: #f8f8f8;
}
</style>
