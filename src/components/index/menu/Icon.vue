<template>
        <i class="iconfont color" :class="type"></i>
</template>

<script>
export default {
  props: {
    type: {
      required: true
    }
  }
}
</script>
<style scoped>
@import "//at.alicdn.com/t/font_2479048_9hlajkn1d2.css";
.icon-meishi{
  color: #FF8200;
}
.icon-waimai{
  color: #FFB500;
}
.icon-jiudian1{
  color: #9B5E3E;
}
</style>
