<template>
  <div class="listcard-container">
    <el-row v-for="(good, index) in goods" :key="good.itemId">
      <el-col :span="6">
        <router-link :to="'index'">
          <img :src="good.imgUrl" alt="" />
          <span class="badge">{{ index + 1 }}</span>
        </router-link>
      </el-col>
      <el-col :span="18">
        <div class="up-container">
          <router-link to="/">
            <h2>{{ good.title }}</h2>
          </router-link>
          <p class="rate">
            <el-rate
              v-model="good.score"
              disabled
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
            <span>很好</span>
            <span>{{ good.score }}分</span>
            <span class="highlight">{{ good.commentNum }}人评论</span>
          </p>
          <p class="address">
            <span v-for="(t, i) in good.tab" :key="t"
              >{{ t + (i < good.tab.length - 1 ? "|" : "") }}
            </span>
            <span class="ml">{{ good.address }}</span>
          </p>
          <p class="peo-avg">人均￥{{ good.avgPrice }}</p>
        </div>
        <div class="bottom-container">
          <ul>
            <router-link
              to="/"
              v-for="item in good.dealItems.slice(0, 2)"
              :key="item.title"
            >
              <li>
                <p>{{ item.title }}</p>
                <p class="price-all">
                  <span class="high-price"> ¥{{ item.price }} </span>
                  <span> 门市价¥{{ item.counterPrice }} </span>
                </p>
              </li>
            </router-link>
            <router-link
              v-show="show"
              to="/"
              v-for="item in good.dealItems.slice(2)"
              :key="item.title"
            >
              <li>
                <p>{{ item.title }}</p>
                <p class="price-all">
                  <span class="high-price"> ¥{{ item.price }} </span>
                  <span> 门市价¥{{ item.counterPrice }} </span>
                </p>
              </li>
            </router-link>
            <p v-if="good.dealItems.length > 2" @click="showActive" class="toggle-btn">
              <span>{{
                show ? "收起" : `更多${good.dealItems.slice(2).length}个优惠`
              }}</span>
              <i
                :class="{
                  'el-icon-arrow-up': show == true,
                  'el-icon-arrow-down': show == false,
                }"
              ></i>
            </p>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: ["goods"],
  methods: {
    showActive() {
      this.show = !this.show;
    },
  },
};
</script>
<style scoped lang="less">
.listcard-container {
  .el-row {
    padding: 20px 0 16px 0;
    border-bottom: 1px solid #e5e5e5;
    .el-col:nth-child(1) {
      position: relative;
      a {
        text-decoration: none;
        color: #fff;
      }
      img {
        width: 220px;
        height: 125px;
        border-radius: 4px;
      }
      .badge {
        position: absolute;
        top: 3px;
        left: -3px;
        width: 20px;
        background-color: #fb6433;
        border-radius: 2px;
        display: inline-block;
        text-align: center;
        font-size: 12px;
      }
    }
    .el-col:nth-child(2) {
      .up-container {
        padding-bottom: 10px;
        border-bottom: 1px dotted #e5e5e5;
        margin-left: 10px;
        a {
          text-decoration: none;
          color: #333;
          h2 {
            font-weight: 500;
            margin: 0;
            font-size: 16px;
          }
        }
        p {
          margin: 0;
          margin-top: 6px;
          &.rate {
            display: flex;
            span {
              font-size: 12px;
              margin-right: 10px;
              color: #666;
              &.highlight {
                color: #ff9900;
              }
            }
            .el-rate {
              //   width: 84px;
              i {
                background-color: #000 !important;
                margin-right: 0;
              }
            }
          }
          &.address {
            font-size: 12px;
            color: #333;
            .ml {
              margin-left: 10px;
            }
          }
          &.peo-avg {
            color: #666;
            font-size: 12px;
          }
        }
      }
      .bottom-container {
        margin-left: 10px;
        ul {
          padding: 0;
          margin: 0;
          margin-top: 10px;
          a {
            text-decoration: none;
          }
          li {
            padding: 6px 10px 8px;
            list-style: none;
            &:hover {
              background-color: #f8f8f8;
              border-radius: 4px;
              > p:nth-child(1) {
                color: #ff9900;
              }
            }
            p {
              margin: 0;
              color: #666;
              font-size: 14px;
              &.price-all {
                font-size: 12px;
                color: #999;
                span.high-price {
                  font-size: 15px;
                  color: #ff6600;
                  margin-right: 10px;
                }
              }
            }
          }
          .toggle-btn{
            text-align: left;
            margin: 0;
            margin-top: 16px;
            line-height: 1;
            color: #666;
            font-size: 12px;
            cursor: pointer;
            padding-left: 10px;
          }
        }
      }
    }
  }
}
</style>
