<template>
  <div class="listnav-container">
    <div class="all">智能排序</div>
    <div class="price">
      价格排序
      <i class="el-icon-caret-top up"></i>
      <i class="el-icon-caret-bottom down"></i>
    </div>
    <div class="people">人气最高</div>
    <div class="comment">评价最高</div>
  </div>
</template>

<style scoped lang="less">
.listnav-container {
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 15px;
  div {
    width: 96px;
    height: 20px;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    &.price {
      position: relative;
      i {
          font-size: 4px;
        &.up {
          position: absolute;
          top: 2px;
          right: 28px;
        }
        &.down {
          position: absolute;
          right: 28px;
          bottom: 0px;
        }
      }
    }
  }
}
</style>
