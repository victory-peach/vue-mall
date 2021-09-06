<template>
  <div class="menu-index">
    <el-row>
      <el-col :span="4">
        <LeftMenu />
      </el-col>
      <el-col :span="20" class="mr">
        <RightList />
      </el-col>
    </el-row>
    <el-row>
      <Container :list='movieList'/>
    </el-row>
    <el-row>
      <Recommend />
    </el-row>
    <el-row>
      <Like />
    </el-row>
    <el-row>
      <Nav />
    </el-row>
  </div>
</template>

<script>
import LeftMenu from '@/components/index/menu/LeftMenu.vue'
import RightList from '@/components/index/menu/RightList.vue'
import Container from '@/components/index/menu/Container.vue'
import Recommend from '@/components/index/menu/Recommend.vue'
import Like from '@/components/index/menu/Like.vue'
import Nav from '@/components/index/menu/Nav.vue'
// import instance from '@/axios/axios.js'

export default {
  data () {
    return {
      movieList: null
    }
  },
  created () {

  },
  components: {
    LeftMenu,
    RightList,
    Container,
    Recommend,
    Like,
    Nav
  }
}
</script>

<style scoped lang="less">
.menu-index {
  // position: absolute;
  // background-color: orange;
  .el-row {
    width: 1190px !important;
    margin: 0 auto;
    .container {
      margin-top: 40px;
    }
  }
}
</style>
