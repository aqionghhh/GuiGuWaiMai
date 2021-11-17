// 入口文件
import Vue from 'vue'
import App from './App'
//引入路由器
import router from './router'

Vue.config.productionTip = false;//阻止vue在启动时生成生产提示

new Vue({
  el: '#app',
  render: h => h(App),
  router
})