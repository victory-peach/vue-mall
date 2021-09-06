<template>
  <div class="card-container" v-if="data">
    <router-link to="/">
      <div class="image">
        <img
          class="img"
          :src="data.coverImage"
          alt=""
        />
        <img
          class="avater"
          :src="data.hostAvatarUrl"
          alt=""
        />
      </div>
      <div class="text">
        <p class="title">{{ data.title }}</p>
        <p class="sec">
          <span>整套{{ data.layoutRoom }}居室·可住{{ data.maxGuestNumber }}人</span><span> | {{ data.locationArea }}</span>
        </p>
        <p>￥<span class="price">{{ data.price }}</span></p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['data']
}
</script>

<style scoped lang="less">
.card-container {
  a{
    text-decoration: none;
  }
  .image {
    height: 223px;
    position: relative;
    img {
      width: 100%;
      height: 208px;
      border-radius: 4px;
      &.avater {
        width: 52px;
        height: 52px;
        border: 2px solid #fff;
        box-sizing: border-box;
        border-radius: 50%;
        position: absolute;
        bottom: -12px;
        right: 15px;
      }
    }
  }
  .text {
    p {
      margin: 0;
      font-size: 14px;
      font-weight: 500;
      color: #FF6600;
      padding: 4px 0;
      span.price{
        font-size: 22px;
        letter-spacing: -0.8px;
      }
      &.title{
        width: 297px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        font-weight: 400;
        color: #222;
        margin: 7px 0;
        padding: 0;
      }
      &.sec{
        font-size: 12px;
        color: #999;
        padding: 0;
      }
    }
  }
}
</style>
