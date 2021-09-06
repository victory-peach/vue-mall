<template>
  <ul :class="type.class">
    <li class="movie">{{ type.title }}</li>
    <li
      @mouseenter="change(item, index)"
      :class="{ active: index === currentIndex }"
      v-for="(item, index) in type.list"
      :key="index"
    >
      {{ typeof item === 'string' ? item : item.text }}
    </li>
    <!-- <li>即将上映</li> -->
    <a href=""> 全部<i class="el-icon-arrow-right" style="color: #fff"></i> </a>
  </ul>
</template>

<script>
// import instance from '@/axios/axios.js'

export default {
  props: ['type'],
  data () {
    return {
      // col: this.nav.back
      currentIndex: 0
      // allData: {},
      // movieList: {}
    }
  },
  methods: {
    change (item, index) {
      this.currentIndex = index
      // ajax请求
      if (typeof item === 'string') {
        this.$emit('currentData', item)
      } else {
        this.$emit('currentData', item.tab)
      }
    }
  }
}
</script>
<style scoped lang="less">
ul {
  &.recommend {
    background: linear-gradient(
        to right,
        rgb(243, 182, 74) 2%,
        rgb(242, 197, 69) 97%
      )
      rgb(243, 182, 74);
  }
  &.like {
    background: linear-gradient(
        to right,
        rgb(88, 174, 221) 2%,
        rgb(66, 191, 205) 97%
      )
      rgb(88, 174, 221);
  }
  height: 44px;
  padding: 0;
  margin: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  a {
    // display: inline-block;
    text-decoration: none;
    width: 42px;
    height: 44px;
    line-height: 44px;
    padding: 0 5px;
    font-size: 14px;
    color: #fff;
    float: right;
    margin-right: 12px;
  }
  li {
    line-height: 44px;
    font-size: 14px;
    color: #fff;
    display: inline-block;
    padding: 0 5px;
    position: relative;
    cursor: pointer;
    &.movie {
      font-size: 18px;
      margin-left: 13px;
      margin-right: 10px;
    }
    &.active::after {
      // display: inline-block;
      // width: 4px;
      // height: 4px;
      // content: '';
      position: absolute;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 7px solid #fff;
      content: "";
      display: block;
      width: 2px;
      height: 0;
      top: 35px;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
}
</style>
