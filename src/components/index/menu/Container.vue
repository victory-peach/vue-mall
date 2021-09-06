<template>
  <div class="container">
    <CardNav :type="movie" @currentData="getData" />
    <div class="movie-list">
      <div class="left-btn" @click="pre">
        <i class="el-icon-arrow-left" style="color: #fff"></i>
      </div>
      <div class="right-btn" @click="next">
        <i class="el-icon-arrow-right" style="color: #fff"></i>
      </div>
      <div class="slider clear-float" ref="slider">
        <div class="item" v-for="item in currentList" :key="item.id">
          <a href="">
            <img :src="item.imgUrl" alt="" class="img" @load="load"/>
            <img
              v-if="item.ver == 'IMAX'"
              src="//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png"
              class="film-mark"
              alt=""
            />
            <img
              v-else-if="item.ver == 'IMAX  3D'"
              src="https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png"
              class="film-mark"
              alt=""
            />
            <img
              v-else-if="item.ver == '3D'"
              src="https://s0.meituan.net/bs/fe-web-meituan/9d1997a/img/3d.png"
              class="film-mark"
              alt=""
            />
            <div class="info">
              <p class="people" v-if="item.flag === 'hot'">
                观众评<span>{{ item.sc }}</span>
              </p>
              <p class="people" v-if="item.flag === 'coming'">
                <span>{{ item.sc }}</span
                >人想看
              </p>
              <p class="title">{{ item.name }}</p>
              <el-button round size="mini" type="danger">{{
                item.flag === "hot" ? "购票" : "预约"
              }}</el-button>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="minsu">

  </div> -->
</template>
<script>
import CardNav from '../card/CardNav.vue'
import instance from '@/axios/axios.js'

export default {
  data () {
    return {
      page: 0,
      all: 1,
      movie: {
        // class: 'recommend',
        title: '猫眼电影',
        list: [
          {
            text: '正在热映',
            tab: 'hot'
          },
          {
            text: '即将上映',
            tab: 'coming'
          }
        ]
      },
      movieList: {},
      currentList: []
    }
  },
  props: ['list'],
  components: {
    CardNav
  },
  methods: {
    pre () {
      if (this.page === 0) {
        return
      }
      this.page--
      // console.log(this.$refs.slider)
      this.$refs.slider.style.left = `${this.page * 1165}px`
    },
    next () {
      if (this.page === this.all) {
        return
      }
      this.page++
      this.$refs.slider.style.left = `${-1165 * this.page}px`
    },
    getData (val) {
      if (val) {
        this.currentList = this.movieList[val]
      }
      // console.log(val)
    },
    load () {
      console.log('图片加载完成')
    }
  },
  created () {
    instance.get('/api/meituan/index/movie').then((res) => {
      this.movieList = res.data
      this.currentList = this.movieList.hot
      // console.log(res);
    })
  }
}
</script>

<style scoped lang="less">
.container {
  ul {
    height: 44px;
    padding: 0;
    margin: 0;
    background: linear-gradient(
        to right,
        rgb(250, 60, 104) 2%,
        rgb(254, 70, 77) 97%
      )
      rgb(250, 60, 104);
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
  .movie-list {
    //   height: 270px;
    margin-top: 2px;
    overflow: hidden;
    .slider {
      position: relative;
      width: 100000px;
      height: 297px;
      margin: 0 12px;
      left: 0px;
      transition: left 0.5s ease-out;
      &.clear-float::after {
        content: " ";
        visibility: hidden;
        display: block;
        height: 0;
        clear: both;
      }
      .item {
        margin-right: 19px;
        float: left;
        width: 214px;
        height: 297px;
        position: relative;
        a {
          .film-mark {
            width: 55px;
            height: 20px;
            position: absolute;
            top: 20px;
            left: -4px;
          }
          .img {
            border-radius: 4px;
            width: 100%;
            height: 100%;
          }
          .info {
            border-radius: 4px;
            width: 100%;
            height: 100px;
            position: absolute;
            bottom: 0;
            left: 0;
            // background-color: aqua;
            background-image: linear-gradient(
              -180deg,
              rgba(0, 0, 0, 0) 0%,
              rgba(29, 45, 55, 0.8) 99%
            );
            p {
              padding: 0;
              margin: 0;
              color: #fff;

              font-weight: 500;
              &.people {
                margin-top: 48px;
                padding-left: 10px;
                font-size: 12px;
                span {
                  font-size: 16px;
                  color: #fd9827;
                  font-weight: 500;
                }
              }
              &.title {
                padding-left: 10px;
                width: 6em;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }
            .el-button {
              position: absolute;
              bottom: 12px;
              right: 10px;
            }
          }
        }
      }
    }
    .left-btn,
    .right-btn {
      width: 40px;
      height: 40px;
      background-color: #333;
      opacity: 0.8;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      display: none;
      cursor: pointer;
    }
    .left-btn {
      position: absolute;
      left: -12px;
      top: 50%;
      z-index: 99;
    }
    .right-btn {
      position: absolute;
      right: 0;
      top: 50%;
      z-index: 99;
    }
    &:hover .left-btn,
    &:hover .right-btn {
      display: block;
    }
  }
}
</style>
