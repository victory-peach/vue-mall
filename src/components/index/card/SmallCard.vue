<template>
  <div class="smallcard-container">
    <router-link to="/">
      <div class="el-card">
        <img
          :src="likeData.imgUrl"
          class="image"
        />
        <div class="text-info">
          <p> {{ likeData.title }}</p>
          <div class="star-wrapper">
            <div class="star">
              <ul class="star-common star-dark">
                <li>
                  <i class="iconfont icon-xingxing"></i>
                </li>
                <li>
                  <i class="iconfont icon-xingxing"></i>
                </li>
                <li>
                  <i class="iconfont icon-xingxing"></i>
                </li>
                <li>
                  <i class="iconfont icon-xingxing"></i>
                </li>
                <li>
                  <i class="iconfont icon-xingxing"></i>
                </li>
              </ul>
              <ul class="star-common star-light">
                <li><i class="iconfont icon-xingxing"></i></li>
                <li><i class="iconfont icon-xingxing"></i></li>
                <li><i class="iconfont icon-xingxing"></i></li>
                <li><i class="iconfont icon-xingxing"></i></li>
                <li><i class="iconfont icon-xingxing"></i></li>
              </ul>
            </div>
            <div class="comment">{{likeData.commentNum }}个评价</div>
          </div>

          <p class="address">{{ likeData.areaName }}</p>
          <p class="price">
            ￥<span class="price-num">{{ likeData.lowPrice }}</span
            ><span class="price-des">起</span>
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['likeData']
}
</script>
<style scoped lang="less">
@import "//at.alicdn.com/t/font_2479048_r6j3uvne9s.css";
.smallcard-container{
  display: inline-block;
  &:hover{
    background: #F4F4F4;
    transition: background-color 500ms;
    border-radius: 4px;
  }
  a {
  text-decoration: none;
  .el-card {
    border: none !important;
    img {
      height: 120px;
    }
    .text-info {
      margin-top: 10px;
      .star-wrapper {
        // display: inline-block;
        width: 100%;
        .star {
          display: inline-block;
          width: 84px;
          position: relative;
          height: 24px;
          .star-common {
            margin: 3px 0;
            width: 84px;
            padding: 0;
            white-space: nowrap;
            li {
              list-style: none;
              padding: 0 2px;
              display: inline-block;
              i {
                font-size: 12px;
                color: #c3c3c3;
              }
            }
          }
          .star-light {
            width: 88%;
            position: absolute;
            top: 0px;
            // left: 0;
            overflow: hidden;
            li {
              i {
                color: #ff9900;
              }
            }
          }
        }
         .comment {
          font-size: 12px;
          color: #999;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          display: inline-block;
          // width: 50px;
        }
      }
      p {
        margin: 0;
        font-size: 16px;
        line-height: 22px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #222;
        &.address {
          color: #999;
          font-size: 12px;
          margin-top: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 18px;
        }
        &.price {
          font-size: 14px;
          font-weight: 700;
          color: #ff6600;
          .price-num {
            font-size: 22px;
            letter-spacing: -0.5px;
            font-weight: normal;
          }
          .price-des {
            font-size: 12px;
            font-weight: 800;
            margin-left: 4px;
          }
        }
      }
    }
  }
}
}
</style>
