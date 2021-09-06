<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>{{ $store.state.position }}美团</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $store.state.position }}{{ $route.params.name }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="less">
.el-breadcrumb{
    margin: 10px 0;
    font-size: 12px;
}
</style>
