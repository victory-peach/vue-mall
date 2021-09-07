<template>
  <div :class="{ 'home-list': true, 'menu-fold': $store.state.collapsed }">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item><a href="">首页</a></a-breadcrumb-item>
        <a-breadcrumb-item>商品</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="user">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          {{ $store.state.user.username }} <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item @click="logOut">
            <a href="javascript:;">退出登录</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    logOut() {
      this.$store.dispatch('logOut');
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
