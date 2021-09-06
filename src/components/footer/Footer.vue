<template>
  <div class="footer-container">
    <el-row>
      <el-col :span="4">
        <dl>
          <dt>用户帮助</dt>
          <dd>申请退款</dd>
          <dd>常见问题</dd>
          <dd>用户协议</dd>
          <dd>隐私政策</dd>
          <dd>反诈骗公告</dd>
          <dd>消费者权益保障</dd>
        </dl>
        <dl>
          <dt>美团服务</dt>
          <dd>美团外卖</dd>
          <dd>美团酒店</dd>
          <dd>猫眼电影</dd>
          <dd>美团配送</dd>
          <dd>美团云</dd>
        </dl>
      </el-col>
      <el-col :span="5">
        <dl>
          <dt>商家合作</dt>
          <dd>美食商家入驻(非外卖)</dd>
          <dd>美团外卖开店申请</dd>
          <dd>美团餐饮系统</dd>
          <dd>美团配送合作申请</dd>
          <dd>美团餐饮培训</dd>
        </dl>
      </el-col>
      <el-col :span="5">
        <dl>
          <dt>用户帮助</dt>
          <dd>申请退款</dd>
          <dd>常见问题</dd>
          <dd>用户协议</dd>
          <dd>隐私政策</dd>
          <dd>反诈骗公告</dd>
          <dd>消费者权益保障</dd>
        </dl>
        <dl>
          <dt>美团服务</dt>
          <dd>美团外卖</dd>
          <dd>美团酒店</dd>
          <dd>猫眼电影</dd>
          <dd>美团配送</dd>
          <dd>美团云</dd>
        </dl>
      </el-col>
      <el-col :span="4">
        <dl>
          <dt>商家合作</dt>
        </dl>
        <dl>
          <dt>商家合作</dt>
          <dd>美食商家入驻(非外卖)</dd>
          <dd>美团外卖开店申请</dd>
          <dd>美团餐饮系统</dd>
          <dd>美团配送合作申请</dd>
          <dd>美团餐饮培训</dd>
        </dl>
        <dl>
          <dt>商家合作</dt>
          <dd>美食商家入驻(非外卖)</dd>
        </dl>
        <dl>
          <dt>商家合作</dt>
          <dd>美食商家入驻(非外卖)</dd>
        </dl>
      </el-col>
      <el-col :span="6">
        <dl>
          <dt>商家合作</dt>
          <dd>美食商家入驻(非外卖)</dd>
          <dd>美团外卖开店申请</dd>
          <dd>美团餐饮系统</dd>
          <dd>美团配送合作申请</dd>
          <dd>美团餐饮培训</dd>
        </dl>
        <dl>
          <dt>商家合作</dt>
          <dd>美食商家入驻(非外卖)</dd>
          <dd>美团外卖开店申请</dd>
          <dd>美团餐饮系统</dd>
          <dd>美团配送合作申请</dd>
          <dd>美团餐饮培训</dd>
        </dl>
        <dl>
          <dt>商家合作</dt>
          <dd>美食商家入驻(非外卖)</dd>
          <dd>美团外卖开店申请</dd>
          <dd>美团餐饮系统</dd>
          <dd>美团配送合作申请</dd>
          <dd>美团餐饮培训</dd>
        </dl>
        <dl>
          <dt>商家合作</dt>
        </dl>
        <dl>
          <dt>商家合作</dt>
        </dl>
      </el-col>
    </el-row>
    <el-row class="bottom">
      <p>©美团网团购 meituan.com京ICP证070791号京ICP备10211739号-1</p>
      <p>广播电视节目制作经营许可证（京）字第03889号</p>
      <p>食品经营许可证互联网药品信息服务资格证 (京)-经营性-2017-0014</p>
      <p>
        医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号
      </p>
      <p>平台EDI许可证</p>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.footer-container {
  .el-row {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    padding: 40px 45px;
    width: 1190px !important;
    margin: 0 auto;
    .el-col {
      width: 220px;
    }
    dt {
      font-size: 14px;
      color: #333;
      height: 28px;
      // height: ;
      line-height: 24px;
    }
    dd {
      font-size: 12px;
      color: #666;
      height: 24px;
      line-height: 24px;
      margin: 0;
    }
    &.bottom {
        padding: 15px 0 30px 20px;
        border: none;
      p {
        font-size: 12px;
        color: #999;
        margin: 0;
      }
    }
  }
  // background-color: orange;
}
</style>
