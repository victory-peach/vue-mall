<template>
    <div class="content">
        <div class="search-content">
            <div class="arrow">
              <van-icon name="arrow-left" class="arrow" size="44px" @click="$router.goBack()"/>
            </div>
            <van-search
            class="search"
            v-model="value"
            show-action
            :placeholder=place
            @search="onSearch"
            @input="input"
            @focus="focus"
            >
            <template #action v-if="showList && likeList">
                <span @touchend="onSearch(value)">搜索</span>
            </template>
            <template #action v-else>
                <van-icon
                name="cart-o"
                @click="$router.push('/home/shopping')"
                :badge="badge" id="shopping-car"
                class="shop-cart"/>
            </template>
            </van-search>
        </div>
        <div class="list">
        <van-list v-if="showList && likeList">
            <van-cell
            class="list-item"
            v-for="like in likeList"
            :key="like.id"
            @search="onSearch(like.title)"
            @click="onSearch(like.title)"
            >
            <template>
              <!-- <span v-html="formatLike(like.title)"></span> -->
            </template>
            </van-cell>
        </van-list>
        </div>
        <div class="goods-list" v-if="!showList">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check="false"
            >
            <goods-card
            v-for="good in goodsList"
            :key="good.id"
            v-bind="good"
            :num="count[good.id]"
            ></goods-card>
            </van-list>
        </div>
        <div class="history" v-if="showList && likeList">
          <history @search="onSearch" :historyData="historyList"></history>
        </div>
    </div>

</template>
<script>
import { mapState } from 'vuex';
import goodsCard from '../components/GoodsCard.vue';
import history from '../components/HistoryList.vue';

export default {
  data() {
    return {
      place: '大苹果',
      value: this.place,
      timer: null,
      likeList: [],
      finished: false,
      loading: false,
      size: 8,
      page: 1,
      goodsList: [],
      showList: true,
      total: 0,
      historyList: [],
    };
  },
  components: {
    goodsCard,
    history,
  },
  computed: {
    ...mapState(['count']),
    badge() {
      return Object.values(this.count).reduce((prev, next) => prev + next, 0);
    },
  },
  methods: {
    async onLoad() {
      console.log('===');
      const searchData = await this.$api.requestSearch(this.value, this.page, this.size);
      this.showList = false;
      this.goodsList = [...this.goodsList, ...searchData];
      this.total = searchData.total;
      this.loading = false;
      this.page += 1;
      if (this.total <= this.goodsList.length) {
        this.finished = true;
      }
    },
    onSearch(like) {
      if (like) {
        this.value = like;
      } else {
        this.value = this.place;
      }
      const double = this.historyList.find((item) => item.value === like);
      if (double) {
        double.time = Date.now();
      } else {
        this.historyList.unshift({ value: this.value, time: Date.now() });
        if (this.historyList.length > 10) {
          this.historyList.pop();
        }
        localStorage.setItem('history', JSON.stringify(this.historyList));
      }
      this.historyList.sort((a, b) => b.time - a.time);
      console.log(this.historyList);
      this.goodsList = [];
      this.page = 1;
      this.likeList = [];
      this.loading = false;
      this.finished = false;
      this.onLoad();
    },
    async input() {
      console.log('dsf');
      if (this.value === '') {
        this.likeList = [];
        return;
      }
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      } else {
        this.timer = setTimeout(async () => {
          console.log(this.value);
          const data = await this.$api.requestLikesearch(this.value);
          console.log(data);
          this.likeList = data;
          clearTimeout(this.timer);
          this.timer = null;
        }, 300);
      }
    },
    focus() {
      this.showList = true;
    },
    formatLike(like) {
      const reg = new RegExp(this.value, 'g');
      return like.title.replace(reg, this.value.fontcolor('red'));
    },
  },
  created() {
    this.historyList = JSON.parse(localStorage.getItem('history')) || [];
  },
};
</script>
<style scoped lang="less">
.content{
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: #fff;
    overflow: auto;
.search-content{
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .arrow{
        width: 22px;
    }
    .search{
        flex: 1;
        .shop-cart{
        font-size: 20px;
    }
    }
}
    .list{
        position: absolute;
        top: 40px;
        z-index: 100;
        left: 0;
        right: 0;
        .list-item{
        padding: 10px 40px;
        box-sizing: border-box;
    }
    }
.goods-list{
    position: absolute;
    top: 50px;
    width: 345px;
    left: 30px;
    height: 80vh;
    overflow: auto;
}
.history{
  position: absolute;
  top: 60px;
  left: 40px;
  width: 350px;
  z-index: 1;
}
}
</style>
