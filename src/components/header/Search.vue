<template>
  <div class="search-container">
    <el-row class="search">
      <el-col :span="6">
        <div class="left">
          <router-link to="/">
            <img
              src="https://s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
              alt="美团"
            />
          </router-link></div
      ></el-col>
      <el-col :span="12">
        <div class="right">
          <el-input
            v-model="input"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
          ></el-input>
          <div class="default" v-if="isFocus && !input">
            <dl>
              <dt>热门搜索</dt>
              <dd>故宫博物院</dd>
              <dd>故宫珍宝馆</dd>
              <dd>北京欢乐谷</dd>
            </dl>
          </div>
          <div class="suggest" v-if="isFocus && input">
            <ul>
              <li v-for="(item, index) in searchList" :key="index">
                <router-link :to="{ name: 'goods', params: { name: item } }">{{
                  item
                }}</router-link>
              </li>
            </ul>
          </div>
          <el-button icon="el-icon-search"></el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      isFocus: false,
      searchList: ['烧烤'],
    };
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        // console.log(this)
        this.isFocus = false;
      }, 250);
    },
  },
};
</script>
<style scoped lang="less">
.search-container {
  width: 100%;
  height: 157px;
  background-color: #fff;
  padding-top: 28px;
  box-sizing: border-box;
  .search {
    width: 1190px !important;
    margin: 0 auto;
    .left {
      img {
        width: 126px;
        height: 46px;
      }
    }
    .right {
      width: 550px;
      height: 40px;
      position: relative;
      .el-input {
        width: 100%;
        .el-input__inner {
          // border: none;
          border-top-right-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
        }
      }
      .el-button {
        width: 80px;
        position: absolute;
        top: 1px;
        right: 0;
        background-color: #ffc300;
        border: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        &:hover {
          color: #222222;
        }
        i {
          color: #222222 !important;
          font-weight: bold;
        }
      }
      .default {
        width: 85%;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-top: none;
        position: absolute;
        z-index: 999;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 10%);

        dl {
          margin: 0;
          font-size: 12px;
          padding: 10px 0;
          dt {
            text-align: center;
            margin-bottom: 10px;
            font-weight: bold;
          }
          dd {
            display: inline-block;
            text-align: center;
            margin-left: 10px;
          }
        }
      }
      .suggest {
        font-size: 12px;
        position: absolute;
        top: 40px;
        left: 0px;
        width: 85%;
        border: 1px solid #e5e5e5;
        border-top: none;
        background: #fff;
        z-index: 999;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 10%);

        ul {
          padding: 0;
          margin: 0;
          li {
            list-style: none;
            padding: 6px 6px;
            a {
              text-decoration: none;
              color: #000;
              font-size: 12px;
              &:hover {
                color: #ffc300;
              }
            }
          }
        }
      }
    }
  }
}
</style>
