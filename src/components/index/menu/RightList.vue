<template>
  <div class="rightlist-container">
    <ul>
      <li>美团外卖</li>
      <li>猫眼电影</li>
      <li>美团酒店</li>
      <li>民宿 / 公寓</li>
      <li>商家入驻</li>
      <li>美团公益</li>
    </ul>
    <el-row class="right-top">
      <el-col :span="10" class="front">
        <div class="block">
          <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
          <el-carousel height="240px">
            <el-carousel-item v-for="item in carouselList" :key="item">
              <!-- <h3 class="small">{{ item }}</h3> -->
              <img :src="item" alt="" style="width: 100%; height: 100%">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="7" class="center">
        <!-- <a href="">

          </a> -->
      </el-col>
      <el-col :span="7" class="behind">
        <div class="avater">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div class="hi">Hi, 你好</div>
        <div>
          <el-button round>注册</el-button>
        </div>
        <div>
          <el-button round>立即登录</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row class="right-bottom">
      <el-col :span="6" class="main"
        ><img
          src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
          alt=""
      /></el-col>
      <el-col :span="6" class="main"
        ><img
          src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
          alt=""
      /></el-col>
      <el-col :span="6" class="main r1"
        ><img
          src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
          alt=""
      /></el-col>
      <el-col :span="6" class="r2">
        <div>
          <img
            src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            alt=""
          />
        </div>
        <p>美团APP手机版</p>
        <p class="mt">
          <span class="red">1元起</span>
          <span>吃喝玩乐</span>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carouselList: ['http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg', 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png', 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg']
    }
  }
}
</script>
<style scoped lang="less">
.rightlist-container {
  // background-color: rebeccapurple;
  height: 457px;
  margin-left: 40px;
  ul {
    padding: 0;
    li {
      list-style: none;
      display: inline-block;
      margin: 0 20px;
      color: #222;
      font-weight: 700;
      font-size: 16px;
    }
  }
  .right-top {
    margin-top: 21px;
    .front {
      width: 550px;
      height: 240px;
      // background-color: aquamarine;
    }
    .center {
      width: 150px;
      height: 240px;
      background-color: bisque;
      margin: 0 10px;
      background-image: url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg);
      background-size: cover;
    }
    .behind {
      width: 228px;
      height: 240px;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      div {
        text-align: center;
        margin: 10px 54px 15px;
        &.avater {
          margin-top: 30px;
          margin-bottom: 4px;
          img {
            border-radius: 50%;
            width: 47px;
            height: 47px;
            border: 4px solid #e5e5e5;
            margin: 0 auto;
            text-align: center;
          }
        }
        &.hi {
          margin: 0;
        }
        .el-button {
          background-color: transparent;
          color: #222;
          border: 1px solid #e5e5e5;
          &:hover {
            background-color: #f6f6f6;
            transition: background-color 0.5s;
          }
        }
      }
    }
  }
  .right-bottom {
    .main {
      width: 270px;
      height: 165px;
      margin: 10px 10px 0 0;
      background-color: aquamarine;
      img {
        width: 100%;
        height: 100%;
      }
      &.r1 {
        width: 150px;
        height: 165px;
        background-color: black;
      }
    }
  }
  .r2 {
    background-color: #fff;
    width: 228px;
    height: 165px;
    border: 1px solid #e5e5e5;
    margin-top: 10px;
    div {
      margin-top: 10px;
      margin-bottom: 2px;
      text-align: center;
      height: 99px;
      img {
        width: 95px;
        height: 95px;
      }
    }
    p {
      padding: 0;
      margin: 0;
      text-align: center;
      font-size: 16px;
      &.mt {
        margin-top: 2px;
        font-size: 12px;
        .red {
          color: #ec5330;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
