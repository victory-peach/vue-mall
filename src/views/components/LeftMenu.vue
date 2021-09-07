<template>
  <div class="home-menu">
    <a-menu
      class="menu"
      :default-selected-keys="[
        $router.currentRoute.matched[1]
          ? $router.currentRoute.matched[1].name
          : '',
      ]"
      :default-open-keys="[$router.currentRoute.matched[0].name]"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <!-- {{ $router.currentRoute.matched[1].name }} -->
      <!-- {{ $router.currentRoute.matched[0].name }} -->
      <template v-for="route in $store.state.allRoutes">
        <a-sub-menu v-if="route.meta.hidden" :key="route.name">
          <span slot="title">
            <a-icon type="home" />
            <span>{{ route.meta.title }}</span>
          </span>
          <template v-for="child in route.children">
            <a-menu-item :key="child.name" v-if="child.meta.hidden">
              <router-link :to="{ name: child.name }">
                {{ child.meta.title }}
              </router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>

      <!-- <a-sub-menu :key="$router.currentRoute.matched[0].name">
        <span slot="title"><a-icon type="appstore" /><span>商品</span></span>
        <a-menu-item key="1">
          <router-link :to="{ name: 'List' }"> 商品列表 </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link :to="{ name: 'Add' }"> 添加商品 </router-link>
        </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11"> Option 11 </a-menu-item>
          <a-menu-item key="12"> Option 12 </a-menu-item>
        </a-sub-menu>
      </a-sub-menu> -->
    </a-menu>
  </div>
</template>
<script>
export default {
  created() {
    console.log('created');
    // console.log(this.$router);
    // console.log(this.$store.state.allRoutes);
  },
};
</script>
