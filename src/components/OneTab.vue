<template>
<div class="one-tab" ref="oneTab">
  <div class="tab-item"
  v-for="(item, index) in menuList"
  :key="item.title"
  @touchend="selectItem(index, $event)"
  @touchstart="start"
  @touchmove="move">
    <div class="tab-img" :class="{active : index == curIndex}">
        <img :src="item.imgURL" />
    </div>
    <div class="tab-text" :class="{active : index == curIndex}">{{ item.title }}</div>
  </div>
</div>

</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      curIndex: 0,
      moveFlag: false,
      menuList: [
        {
          title: '时令水果',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg',
        },
        {
          title: '酒水冲调',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg',
        },
        {
          title: '安心乳品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg',
        },
        {
          title: '休闲零食',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg',
        },
        {
          title: '肉蛋食材',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg',
        },
        {
          title: '新鲜蔬菜',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg',
        },
        {
          title: '熟食餐饮',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg',
        },
        {
          title: '海鲜水产',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg',
        },
        {
          title: '粮油调味',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg',
        },
        {
          title: '某手美食',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg',
        },
        {
          title: '纸杯清洁',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg',
        },
        {
          title: '个人护理',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg',
        },
        {
          title: '美妆护肤',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg',
        },
        {
          title: '家居收纳',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg',
        },
        {
          title: '家用电器',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg',
        },
        {
          title: '3C数码',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg',
        },
        {
          title: '母婴用品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg',
        },
        {
          title: '鲜花绿植',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg',
        },
        {
          title: '宠物用品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg',
        },
        {
          title: '图书玩具',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg',
        },
        {
          title: '手表配饰',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
      ],
    };
  },
  methods: {
    ...mapActions(['sideGet']),
    selectItem(index, e) {
      if (this.moveFlag) {
        return;
      }
      this.curIndex = index;
      this.tabmoveCenter(e);
      // this.$store.dispatch('sideGet', this.menuList[index].title);
      this.sideGet(this.menuList[index].title);
    },
    start() {
      this.moveFlag = false;
    },
    move() {
      this.moveFlag = true;
    },
    tabmoveCenter(e) {
      // console.log(this.$refs);
      const { oneTab } = this.$refs;
      const itemWidth = e.target.offsetWidth;
      const itemLeft = e.target.getBoundingClientRect().left;
      const onetabWidth = oneTab.offsetWidth;
      //   oneTab.scrollLeft += itemLeft + itemWidth / 2 - onetabWidth / 2;
      this.moveTo(oneTab.scrollLeft, itemLeft + itemWidth / 2 - onetabWidth / 2);
    },
    //  缓缓运动
    moveTo(start, end) {
      let dis = 0;
      let speed = 5;
      if (end < 0) {
        speed *= -1;
      }
      const timer = setInterval(() => {
        dis += speed;
        // console.log(dis);
        this.$refs.oneTab.scrollLeft = start + dis;
        if (Math.abs(dis) > Math.abs(end)) {
          this.$refs.oneTab.scrollLeft = start + end;
          clearInterval(timer);
        }
      }, 2);
    },
  },
  mounted() {
    // console.log(this.$store);
    // this.$store.dispatch('sideGet', this.menuList[0].title);
    this.sideGet(this.menuList[0].title);
  },
};
</script>
<style lang="less" scoped>
.one-tab{
    width: 375px;
    height: 104px;
    overflow: auto;
    display: flex;
    // align-content: center;
    align-items: center;
    &::-webkit-scrollbar{
        display: none;
    }
    .tab-item{
        flex-shrink: 0;
        padding: 10px 5px;
        width: 50px;
        height: 70px;
        .tab-img{
            width: 50px;
            height: 50px;
            border-radius: 46px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                text-align: center;
                width: 45px;
                height: 45px;
                border-radius: 50%;
            }
            &.active{
            border: 2px solid #d13193;
            }
        }
        .tab-text{
            font-size: 12px;
            margin-top: 10px;
            &.active{
            background-color: #d13193;
            color: #fff;
            font-weight: bold;
            border-radius: 60px;
            }
        }

    }
}
</style>
