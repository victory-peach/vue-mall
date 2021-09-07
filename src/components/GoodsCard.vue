<template>
        <div class="card-wrapper van-hairline--bottom">
                <div class="img">
                    <img :src="images[0]" alt="" ref="imgDom">
                </div>
                <div class="right-text">
                    <h2 class="overhidden">{{ title }}</h2>
                    <h3 class="h3-text1">{{ desc }}</h3>
                    <h3 class="h3-text2">
                        <div v-for="i in tags" :key="i">
                            {{ i }}
                        </div>
                    </h3>
                    <div class="bottom-text">
                        <h2>￥{{ price }}</h2>
                        <div class="contral">
                            <div @touchend="changeData( id , -1)" v-if="num">
                                <img src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png" alt="">
                            </div>
                            <div class="text" v-if="num">{{ num }}</div>
                            <div @touchend="changeData( id , 1)">
                                <img src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
        </div>
</template>
<script>
import { mapMutations } from 'vuex';
import Animate from '../tools/animate';

export default {
  props: ['tags', 'images', 'desc', 'title', 'price', 'id', 'num'],
  methods: {
    ...mapMutations(['changeStorage']),
    changeData(id, num) {
      this.changeStorage({ id, value: num });
      if (num === -1) {
        return;
      }
      const { top: imgTop, left: imgLeft } = this.$refs.imgDom.getBoundingClientRect();
      const { offsetWidth: imgWidth, offsetHeight: imgHeight } = this.$refs.imgDom;
      const { top: carTop, left: carLeft } = document.getElementById('shopping-car').getBoundingClientRect();
      const { offsetWidth: carWidth, offsetHeight: carHeight } = document.getElementById('shopping-car');
      const endX = carLeft + carWidth / 2;
      const endY = carTop + carHeight / 2;
      Animate({
        startX: imgLeft,
        startY: imgTop,
        imgWidth,
        imgHeight,
        endX,
        endY,
        src: this.$refs.imgDom.src,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.card-wrapper{
    // background-color: wheat;
    width: 296px;
    height: 100px;
    display: flex;
    .img{
    margin-right: 20px;
        width: 90px;
        height: 90px;
        img{
            width: 90px;
            height: 90px;
        }
    }
    .right-text{
        // background-color: violet;
        flex: 1 0 0;
        h2{
            width: 170px;
            margin: 0;
            font-size: 13px;
            font-weight: normal;
            margin: 5px 0;
        }
        .h3-text1{
            width: 170px;
            margin: 0;
            font-size: 11px;
            color: #cecece;
                font-weight: normal;

        }
        .h3-text2{
            width: 170px;
            margin: 0;
            font-size: 10px;
            color: #cecece;
            margin: 4px 0;
            font-weight: normal;
            display: flex;
            >div{
                padding: 2px 2px;
                margin-right: 5px;
                border: 1px solid #cecece;
                border-radius: 3px;
            }
        }
        .bottom-text{
            position: relative;
            h2{
            width: 170px;
                margin: 0;
                font-weight: normal;
                color: #ff1a90;
                font-size: 14px;
            }
            .contral{
                display: flex;
                position: absolute;
                right: 10px;
                bottom: 0;
                justify-content: center;
                align-items: center;
                .text{
                font-size: 14px;
                margin: 0 4px;
                }
                img{
                    width: 16px;
                }
            }
        }
        .overhidden{
            // width: 30px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>
