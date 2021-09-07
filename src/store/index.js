import Vue from 'vue';
import Vuex from 'vuex';
import API from '../API/request';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideList: [],
    goodsList: [],
    showContent: false,
    type: null,
    size: 5,
    count: {},
    category: '',
  },
  mutations: {
    sideAdd(state, list) {
      state.sideList = list;
    },
    setCategory(state, type) {
      state.category = type;
    },
    goodsAdd(state, list) {
      state.goodsList = [...state.goodsList, ...list];
      // console.log(state.goodsList);
    },
    resetGoodslist(state) {
      state.goodsList = [];
    },
    setType(state, type) {
      state.type = type;
    },
    setCount(state, count) {
      state.count = count;
    },
    changeStorage(state, { id, value }) {
      if (state.count[id]) {
        if ((state.count[id] === 1 && value === -1) || (value === -Infinity)) {
          Vue.delete(state.count, id);
        } else {
          Vue.set(state.count, id, state.count[id] + value);
        }
      } else {
        Vue.set(state.count, id, 1);
      }
      localStorage.setItem('goods', JSON.stringify(state.count));
    },
  },
  actions: {
    async sideGet({ state, commit }, type) {
      state.showContent = false;
      const value = await API.requestSide(type);
      console.log(type);
      console.log(value);
      commit('setCategory', type);
      commit('sideAdd', value);
      state.showContent = true;
    },
    async goodsGet(context, params) {
      const type = params.type || context.state.type;
      console.log(context.state.category);
      const goods = await API.requestGoods(type,
        params.page,
        context.state.size,
        params.sort,
        context.state.category);
      console.log(goods);
      context.commit('goodsAdd', goods);
      context.commit('setType', type);
      if (goods.total > context.state.goodsList.length) {
        return true;
      }
      return false;
    },
  },
  modules: {
  },
});
