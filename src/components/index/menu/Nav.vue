<template>
  <!-- 美团底部导航 -->
  <div class="nav-container">
    <div class="wrapper">
      <h2>美团导航</h2>
      <dl>
        <dt class="fl">热门城市</dt>
        <div class="fl">
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波</a> </dd>
          <dd><a href="">宁波nbsndbfnsbdn</a> </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav-container {
  margin-top: 40px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  width: 1190px;
  .wrapper {
    h2 {
      padding: 6px 0 0 20px;
      font-size: 16px;
      font-weight: 500;
      color: #222;
      margin: 0;
      height: 44px;
      line-height: 44px;
    }
    dl {
      margin: 0;
      height: 73px;
      .fl{
          float: left;
      }
      dt {
        box-sizing: border-box;
        width: 100px;
        font-size: 14px;
        color: #222;
        padding: 10px 0;
        text-align: center;
        display: inline-block;
      }
      div {
        width: 1090px;
        padding-top: 10px;
        height: 60px;
        border-bottom: 1px solid #e5e5e5;
        &:last-child{
            border-bottom: none;
        }
        dd {
          width: 100px;
          height: 17px;
          margin: 0;
          line-height: 17px;
          margin-bottom: 13px;
          display: inline-block;
          font-size: 12px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          a{
              color: #222;
              text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
