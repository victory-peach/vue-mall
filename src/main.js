import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import '@/assets/header/main.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.directive('document-click', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding) {
    // console.log(el, binding);
    document.addEventListener('click', binding.value)
    // document.onclick = binding.value  有坑
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
