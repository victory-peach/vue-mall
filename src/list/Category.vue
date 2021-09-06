<template>
  <div class="category-container">
    <dl>
      <dt class="category">{{ title }}</dt>
      <dt class="all"><a href="javascript:void(0);">全部</a></dt>
      <div class="list">
        <dd  v-for="item,index in list" :key="item.type" @mouseenter="show(item, index)" @mouseleave="leave">
          {{ item.name  }}<i class="el-icon-caret-bottom"></i>
        </dd>
      </div>
      <div
        class="hover-list"
        v-show="currentItem"
        @mouseenter="listEnter"
        @mouseleave="listLeave"
        ref="sublist"
      >
        <div v-if="currentItem">
        <h2>{{ currentItem.subtype[0].title }}</h2>
          <a href="">全部</a>
          <a href="" v-for="sub,i in currentItem.subtype[0].items" :key="i">{{
            sub
          }}</a>
        </div>
      </div>
    </dl>
  </div>
</template>
<script>
export default {
  data () {
    return {
      flag: false,
      currentItem: null,
      timer: null,
      subTitle: ''
    }
  },
  props: ['list', 'title'],
  methods: {
    show (item, index) {
      this.currentItem = item
      this.$refs.sublist.style.top = `${42}px`
      this.$refs.sublist.style.left = `${176 + index * 120}px`
      this.subTitle = item.title
      // console.log(this.$refs.sublist);
    },
    leave () {
      this.timer = setTimeout(() => {
        this.currentItem = null
      }, 200)
    },
    listEnter () {
      clearTimeout(this.timer)
    },
    listLeave () {
      this.currentItem = null
    }
  }
}
</script>
<style scoped lang="less">
.category-container {
  // margin-top: 10px;
  // border: 1px solid #000;
  padding: 15px 20px 0;
  background-color: #fff;
  dl {
    margin: 0;
    padding: 15px 20px 0 20px;
    display: flex;
    position: relative;
    dt {
      font-size: 14px;
    }
    .category {
      width: 80px;
      height: 22px;
    }
    .all {
      width: 48px;
      padding: 0 10px;
      text-align: center;
      height: 22px;
      line-height: 22px;
      border-radius: 100px;
      background: linear-gradient(to bottom right, #ffd000, #ffbd00);
      color: #222222;
      a {
        color: #333;
        text-decoration: none;
        // padding: 0 10px;
        display: inline-block;
      }
    }
    .list {
      // position: relative;
      margin-left: 30px;
      // border-bottom: 1px solid #e5e5e5;
      padding-bottom: 15px;

      dd {
        margin: 0;
        width: 120px;
        height: 28px;
        display: inline-block;
        color: #666;
        font-size: 14px;
        cursor: pointer;
        i {
          font-size: 4px;
        }
      }
    }
    .hover-list {
      // display: none;
      width: 512px;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      position: absolute;
      z-index: 99999999;
      // top: 26px;
      // left: -22px;
      padding: 19px 15px 9px 15px;
      box-sizing: border-box;
      &::before {
        content: "";
        border-bottom: 6px solid #e5e5e5;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        position: absolute;
        top: -6px;
        left: 30px;
      }
      &::after {
        content: "";
        border-bottom: 6px solid #fff;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        position: absolute;
        top: -4px;
        left: 30px;
      }
      h2 {
        width: 52px;
        height: 22px;
        font-size: 16px;
        margin: 0;
        color: #ccc;
        font-weight: normal;
        margin-left: 10px;
        margin-bottom: 11px;
        white-space: nowrap;
      }
      a {
        text-decoration: none;
        color: #666;
        font-size: 12px;
        display: inline-block;
        min-width: 120px;
        padding: 0 10px;
        margin-bottom: 5px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
