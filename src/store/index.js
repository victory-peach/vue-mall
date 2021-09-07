import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getCookie, removeCookie } from '@/util/cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 控制左侧导航状态改变（是否展开）,
    user: getCookie(),
    // categoryList: [],
    allRoutes: null,
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUser(state, data) {
      state.user = data;
    },
    logOut(state) {
      // state.user = {
      //   appkey: '',
      //   email: '',
      //   role: '',
      //   username: '',
      // };
      state.user = getCookie();
    },
    // setCategoryList(state, data) {
    //   state.categoryList = data;
    // },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUser({ commit }, data) {
      setCookie(data);
      commit('setUser', data);
    },
    logOut({ commit }) {
      removeCookie();
      commit('logOut');
    },
    // categoryAll({ commit }) {
    //   categoryApi.getCitems().then((res) => {
    //     commit('setCategoryList', res.data.data);
    //   });
    // },
  },
  modules: {
  },
});
