// 路由器对象模块
//需要对项目路由进行拆分
//要知道是同级路由还是嵌套路由（即确定是兄弟关系还是父子关系）
//$router:路由器对象，包含一些操作路由的功能函数，来实现编程式导航（跳转路由）
//$toute:当前路由对象，一些当前路由信息数据的容器，path/meta/query/params

import Vue from 'vue';
import VueRouter from 'vue-router';
import Msite from '../pages/Msite/Msite';
import Search from '../pages/Search/Search';
import Order from '../pages/Order/Order';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {//登录组件是一级路由
      path: '/login',
      component: Login
    },
    {//购物组件是一级路由
      path: '/shop',
      component: Shop,
      children: [
        {//点餐路由
          path: '/shop/goods',
          component: ShopGoods
        },
        {///商家信息路由
          path: '/shop/info',
          component: ShopInfo
        },
        {//评论路由
          path: '/shop/ratings',
          component: ShopRatings
        },
        {//进入Shop路由后默认显示的二级路由
          path: '',
          redirect: '/shop/goods'
        },
      ]
    }
  ]
})