<template>
  <div class="hot-container">
    <dl>
      <dt>{{ title }}:  </dt>
      <div class="list">
        <dd v-for="item in list" :key="item.id" :class="{ 'normal' : item.name }" @click="active">
          <a href="javascript:void(0)" :class="{ 'normal' : item.name }" v-if='href'>{{ item.name }}</a>
          <a :href="'#city-'+item" :class="{ 'normal' : item.name }" v-else>{{ item }}</a>
        </dd>
      </div>
    </dl>
  </div>
</template>
<script>
export default {
  props: ['list', 'title'],
  computed: {
    href () {
      for (const item of this.list) {
        if (typeof item !== 'string') {
          return true
        }
      }
      return false
    }
  },
  methods: {
    active (e) {
      if (this.href) {
        this.$store.state.position = e.target.innerText
        this.$router.push({ path: 'index' })
      }
    }
  }
}
</script>
<style scoped lang="less">
.hot-container {
  dl {
    margin: 0;
    display: flex;
    padding: 30px 0;
    .list{
      // align-items: center;
      max-width: 1000px;
      margin-top: 2px;
      dd{
        display: inline-block;
        margin: 0 10px;
        width: 25px;
        height: 25px;
        &.normal{
          margin: 0 20px;
          width: auto;
          height: auto;
          }
        a{
          text-decoration: none;
          font-size: 15px;
          text-align: center;
          color: #222;
          &.normal{
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
