<template>
  <div class="leftNav-container">
    <i class="el-icon-location">{{ $store.state.position }}</i>
    <router-link :to="{ name: 'changecity' }" class="change">切换城市</router-link>
    [
    <a href="">门头沟区大厂</a>
    <a href="">回族自治县</a>
    <a href="">廊坊</a>
    ]
    <div class="user-info">
      <router-link to="/" class="login">立即登录</router-link>
      <router-link to="/" class="register">注册</router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
.leftNav-container {
  padding: 12px 0;
  font-size: 12px;
  color: #999;
  .el-icon-location {
    color: #666;
  }
  a {
    margin: 0 4px;
    color: #999;
    text-decoration: none;
    &.change {
      background-color: #f4f4f4;
      color: #666;
      border: 1px solid #e5e5e5;
      padding: 0px 2px;
      margin: 0 4px;
    }
  }
  .user-info {
    display: inline-block;
    margin-left: 15px;
    a {
      color: #999;
      margin-left: 10px;
      text-decoration: none;
    }
    .login {
      color: #fe8c00;
    }
  }
}
</style>
