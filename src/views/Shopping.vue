<template>
    <div class="wrap">
        <div class="nav">
          <van-nav-bar
            title="购物车"
            right-text="删除"
            @click-right="del"
          />
        </div>
        <div class="cart-list">
            <van-checkbox-group v-model="result" ref="checkboxGroup">
                <div class="cart-item" v-for="list in idResult" :key="list.id">
                    <van-checkbox :name="list.id" class="radio"></van-checkbox>
                    <goods-card v-bind="list" :num="count[list.id]"></goods-card>
                </div>
            </van-checkbox-group>
        </div>
        <div >
            <van-submit-bar
            class="cart-submit"
            :price="allprice"
            :button-text="`去结算(${totalNum})`"
            @submit="onSubmit">
            <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
            </van-submit-bar>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import { Toast, Dialog } from 'vant';
import goodsCard from '../components/GoodsCard.vue';

export default {
  data() {
    return {
      idResult: [],
      result: [],
      checked: false,
    };
  },
  components: {
    goodsCard,
  },
  computed: {
    ...mapState(['count']),
    totalNum() {
      const checkedgoods = this.idResult.filter((item) => this.result.includes(item.id));
      const checkedNum = checkedgoods.reduce(
        (prev, next) => prev + (this.count[next.id] || 0),
        0,
      );
      return checkedNum;
    },
    allprice() {
      const checkedgoods = this.idResult.filter((item) => this.result.includes(item.id));
      return checkedgoods.reduce(
        (prev, next) => Math.round((this.count[next.id] || 0) * next.price * 100 + prev), 0,
      );
    },
  },
  methods: {
    ...mapMutations(['changeStorage']),
    async del() {
      if (this.result.length === 0) {
        Toast('您还没有选择商品哦');
        return;
      }
      try {
        await Dialog.confirm({
          title: '确认删除',
          message: '您是否要删除已选中商品？',
        });
        this.result.forEach((id) => {
          this.changeStorage({ id, value: -Infinity });
          this.idResult = this.idResult.filter((item) => !(this.result.includes(item.id)));
        });
      } catch (error) {
        Toast('取消');
      }
    },
    checkAll() {
      if (this.checked) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll(false);
      }
    },
    onSubmit() {
      console.log(this.result);
    },
    async getcartData() {
      const ids = Object.keys(this.count);
      const result = await this.$api.requestId(ids.join());
      this.idResult = result;
      console.log(result);
    },
  },
  watch: {
    result() {
      if (this.result.length === this.idResult.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
  },
  created() {
    this.getcartData();
  },
};
</script>
<style scoped lang="less">
.nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.cart-list{
    position: absolute;
    top: 50px;
    z-index: -2;
    width: 100vw;
    // height: 100vh;
    // overflow: auto;
    padding: 5px 10px 120px 24px;
    box-sizing: border-box;
    .cart-item{
        display: flex;
        align-items: center;
        .radio{
            margin-right: 10px;
        }
    }
}
.cart-submit{
    position: fixed;
    bottom: 49px;
    z-index: -2;
}
</style>
