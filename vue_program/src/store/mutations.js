/**
 * 直接更新state的多个方法的对象
 */
import Vue from 'vue'
import { RECEIVE_ADDRESS, RECEIVE_CATGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO, RESET_USER_INFO, RECEIVE_INFO, RECEIVE_RATINGS, RECEIVE_GOODS, DECREMENT_FOOD_COUNT, INCREMENT_FOOD_COUNT, CLEAR_CART } from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address
  },
  [RECEIVE_CATGORYS](state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}//清空userInfo
  },

  [RECEIVE_INFO](state, { info }) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods
  },

  [INCREMENT_FOOD_COUNT](state, { food }) {
    if (!food.count) {//第一次增加
      // food.count = 1//新增一个count属性（这样写没有数据绑定效果，所以不会更新页面）
      //Vue提供的方法 //传入对象 属性名 属性值
      Vue.set(food, 'count', 1);//让新增的属性也有数据绑定
      //将food添加到cartFoods中
      state.cartFoods.push(food);
    } else {//直接++
      food.count++

    }
  },
  [DECREMENT_FOOD_COUNT](state, { food }) {
    if (food.count) {//只有有值才去减
      food.count--
      if (food.count === 0) {
        //将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)//移除数组中相应索引的食物
      }
    }
  },
  [CLEAR_CART](state) {
    //清除food中的count
    state.cartFoods.forEach(food => food.count = 0)//遍历数组cartFoods，把里面food的count全部设为0
    //移除购物车中所有购物项
    state.cartFoods = []
  },
}