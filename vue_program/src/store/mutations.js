/**
 * 直接更新state的多个方法的对象
 */
import Vue from 'vue'
import { RECEIVE_ADDRESS, RECEIVE_CATGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO, RESET_USER_INFO, RECEIVE_INFO, RECEIVE_RATINGS, RECEIVE_GOODS, DECREMENT_FOOD_COUNT, INCREMENT_FOOD_COUNT } from './mutation-types'

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
    } else {//直接++
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state, { food }) {
    if (food.count) {//只有有值才去减
      food.count--
    }
  },
}