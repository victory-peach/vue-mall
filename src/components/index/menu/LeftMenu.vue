<template>
  <div class="menu-container">
    <dl @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd
        @mouseenter="mouseEnter(item)"
        v-for="item in menuList"
        :key="item.id"
      >
        <Icon class="i" :type="item.type" />
        <a href="">{{ item.name }}</a>
        <i class="el-icon-arrow-right arrow"></i>
      </dd>
    </dl>
    <div class="model" v-if="currentItem" @mouseenter="modelEnter" @mouseleave="modelLeave">
      <template v-for="item,index in currentItem.subtype">
        <h2 :key="index">
          <a href="">{{ item.title }}</a>
        </h2>
        <a v-for="v, i in item.items" :key="v + '_' + i">{{ v }}</a>
      </template>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/index/menu/Icon.vue'
import instance from '@/axios/axios.js'
// const icons = ['icon-meishi', 'icon-waimai', 'icon-jiudian1']
export default {
  data () {
    return {
      currentItem: null,
      timer: null,
      menuList: [
        {
          type: 'icon-meishi',
          title: '美食',
          children: [
            {
              title: '美食',
              dsc: [
                '代金券',
                '甜点饮品',
                '火锅自助餐',
                '小吃快餐',
                '日韩料理',
                '西餐聚餐宴请',
                '烧烤烤肉',
                '东北菜',
                '川湘菜',
                '江浙菜'
              ]
            }
          ]
        },
        {
          type: 'icon-jiudian',
          title: '酒店',
          children: [
            {
              title: '酒店',
              dsc: [
                '经济',
                '舒适',
                '高档',
                '豪华'
              ]
            }
          ]
        }
      ]
    }
  },
  created () {
    instance.get('/api/meituan/index/nav').then(res => {
      // for (let i = 0; i < res.data.length; i++) {
      //   res.data[i].type = icons[i]
      // }
      // console.log(res)
      this.menuList = res.data
    })
  },
  computed: {
  },
  methods: {
    mouseEnter (item) {
      this.currentItem = item
    },
    mouseleave () {
      this.timer = setTimeout(() => {
        this.currentItem = null
      }, 200)
    },
    modelEnter () {
      clearTimeout(this.timer)
    },
    modelLeave () {
      this.currentItem = null
    }
  },
  components: {
    Icon
  }
}
</script>
<style scoped lang="less">
.menu-container {
  height: 473px;
  width: 230px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  position: relative;
  //   margin-top: -50px;

  // margin-top: -40px;
  // position: absolute;
  background-color: #fff;
  // background: linear-gradient(-180deg, rgba(2, 181, 157, .85) 2%, rgba(22, 146, 183, .85) 100%);
  // top: -30px;
  // z-index: 999;
  dl {
    dt {
      height: 50px;
      color: #222222;
      font-size: 16px;
      font-weight: bold;
      margin-left: 15px;
    }
    dd {
      margin: 0;
      padding: 2px 12px;
      position: relative;
      //   border-top: 1px solid #000;
      a {
        color: #646464;
        font-size: 12px;
        text-decoration: none;
        margin-left: 11px;
      }
      i.arrow {
        font-size: 8px;
        position: absolute;
        right: 12px;
        top: 8px;
        &:before {
          color: #222222;
        }
        //         &.icon-meishi{
        //             // position: none;
        // top: 0;
        // left: 0;
        //             width: 12px;
        //             height: 12px;
        //             color: rebeccapurple;
        //         }
      }
      &:hover {
        background: rgba(255, 150, 0, 0.08);
        cursor: pointer;
        a {
          font-weight: bold;
          color: #222222;
        }
        i.el-icon-arrow-right::before {
          color: #222222 !important;
        }
      }
    }
  }
  .model {
    width: 400px;
    height: 416px;
    background-color: #fff;
    position: absolute;
    z-index: 999;
    top: 60px;
    left: 229px;
    color: #222222;
    padding: 10px 30px;
    box-sizing: border-box;
    h2 {
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 10px;
        margin: 0;
      a {
        font-size: 16px;
        font-weight: 500;
        color: #222;
        cursor: pointer;
        text-decoration: none;
      }
    }
    a {
      color: #999;
      font-size: 12px;
      line-height: 15px;
      display: inline-block;
      margin-right: 16px;
      margin-top: 10px;
      cursor: pointer;
    }
  }
}
</style>
