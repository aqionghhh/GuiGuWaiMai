// 入口文件
import Vue from 'vue'
import App from './App'
import store from './store'
import './common/stylus/mixins.styl'
import 'swiper/dist/css/swiper.css'
//引入路由器
import router from './router'
//引入组件库（在main.js里引入时为了做成全局标签）
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.min.css'
//注册全局组件标签
Vue.component(Button.name, Button)//<mt-button></mt-button>

//引入mockServer
import './mock/mockServer';

Vue.config.productionTip = false;//阻止vue在启动时生成生产提示

new Vue({
  el: '#app',
  render: h => h(App),
  router,//使用上vue-router
  store,//使用上vuex
})