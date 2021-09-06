<template>
  <div class="rightNav-container">
    <ul>
      <li class="list p">
        <span>网站导航</span>
        <div class="net">
          <dl class="jiudian">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>火车票</dd>
            <dd>民宿</dd>
            <dd>经济型酒店</dd>
            <dd>主题酒店</dd>
            <dd>商务酒店</dd>
          </dl>
          <dl class="meishi">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烧烤</dd>
            <dd>自助餐</dd>
            <dd>火锅</dd>
            <dd>代金券</dd>
          </dl>
          <dl class="dianyin">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>热门影院</dd>
            <dd>热映电影口碑榜</dd>
            <dd>最受期待电影</dd>
            <dd>国内票房榜</dd>
            <dd>北美票房榜</dd>
            <dd>电影排行榜</dd>
          </dl>
          <dl class="phone">
            <dt>手机应用</dt>
            <dd>
              <a href="">
                <img
                  src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  alt=""
                />
              </a>
            </dd>
            <dd>
              <a href=""
                ><img
                  src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                  alt=""
              /></a>
            </dd>
            <dd>
              <a href=""
                ><img
                  src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                  alt=""
              /></a>
            </dd>
            <dd>
              <a href=""
                ><img
                  src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  alt=""
              /></a>
            </dd>
            <dd>
              <a href=""
                ><img
                  src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                  alt=""
              /></a>
            </dd>
          </dl>
        </div>
      </li>
      <li class="list">
        <span>美团规则</span>
        <dl class="rule">
          <dd>规则中心</dd>
          <dd>规则目录</dd>
          <dd>规则评议院</dd>
        </dl>
      </li>
      <li class="list">
        <span>商家中心</span>
        <dl class="center">
          <dd>美团餐饮商户中心</dd>
          <dd>登录商家中心</dd>
          <dd>美团智能收银</dd>
          <dd>我想合作</dd>
        </dl>
      </li>
      <li>
        <a href="">手机APP</a>
      </li>
      <li class="list">
        <a href="">我的美团</a>
        <dl>
          <dd>我的订单</dd>
          <dd>我的收藏</dd>
          <dd>抵用券</dd>
          <dd>账户设置</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.rightNav-container {
  position: absolute;
  z-index: 10000;
  right: 0;
  ul {
    margin: 0;
    padding: 0;
    height: 100px;
    li {
      float: right;
      font-size: 12px;
      list-style: none;
      position: relative;
      width: 78px;
      padding: 12px 14px 0;
      box-sizing: border-box;
      &:hover a{
        color: #ffc300;
      }
      a {
        text-decoration: none;
        color: #999;
      }
    }
    li.list {
      font-size: 12px;
      list-style: none;
      position: relative;
      width: 78px;
      padding: 12px 14px 0;
      box-sizing: border-box;
      // border-left: 1px solid transparent;
      // border-right: 1px solid transparent;
      color: #999;
      &::before {
        content: " ";
        display: block;
        background: #fff;
        height: 4px;
        width: 76px;
        position: absolute;
        top: 40px;
        right: 0;
      }
      &:hover {
        // box-shadow: 0 3px 5px 0 rgba(0 ,0 ,0 , 10%);
        border: 1px solid #e5e5e5;
        border-bottom: none;
        background-color: #fff;
        display: block;
        & span, & a{
          color: #ffc300;
        }
      }
      &:hover dl {
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 10%);
        border: 1px solid #e5e5e5;
        background-color: #fff;
        display: block;
      }
      &.p:hover div {
        border: 1px solid #e5e5e5;
        padding: 30px 36px 36px 47px;
      }
      a {
        text-decoration: none;
        color: #999;
      }
      dl {
        display: none;
        background-color: #fff;
        margin-bottom: 0;
        width: 78px;
        margin-left: -15px;
        box-sizing: border-box;
        &.center {
          width: 230%;
          background-color: #fff;
          margin-left: -48px;
        }
        &.rule {
          width: 78px;
          background-color: #fff;
          margin-left: -15px;
        }
        dd {
          margin: 0;
          line-height: 35px;
          text-align: center;
          white-space: nowrap;
          &:hover{
            cursor: pointer;
            color: #ffc300;
          }
        }
      }
      .net {
        // border: 1px solid #e5e5e5;
        // padding: 30px 36px 36px 47px;
        width: 1200px;
        box-sizing: border-box;
        border-top-left-radius: 4px;
        border-radius: 4px;
        border-top-right-radius: 0;
        background-color: #fff;
        margin-left: -1137px;
        display: flex;
        margin-top: 15px;
        dl {
          border: none;
          margin: 0;
          box-shadow: none;
          margin-right: 47px;
          dt {
            text-align: center;
            font-size: 14px;
            color: #222;
            margin-bottom: 26px;
          }
          dd {
            width: 33%;
            text-align: center;
            float: left;
          }
          &.jiudian {
            width: 234px;
          }
          &.meishi {
            width: 156px;
          }
          &.dianyin {
            width: 90px;
            dd {
              width: 100%;
            }
          }
          &.phone {
            width: 380px;
            margin-left: 47px;
            dd {
              margin: 0 8px;
              width: 60px;
              height: 60px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
