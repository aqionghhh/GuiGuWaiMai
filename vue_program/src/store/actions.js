/**
 * 通过mutation间接更新state的多个方法的对象
 */
import { RECEIVE_ADDRESS, RECEIVE_CATGORYS, RECEIVE_SHOPS } from './mutation-types'
import { reqAddress, reqFoodCategorys, reqShops } from '../api'

export default {//要有与后台交互的异步actions
  //异步获取地址
  async getAddress({ commit, state }) {
    //发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //根据结果提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, { address })
    }
  },
  //异步获取食品分类列表
  async getCategorys({ commit }) {
    //发送异步ajax请求
    const result = await reqFoodCategorys()
    //根据结果提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATGORYS, { categorys })
    }
  },
  //异步获取商家列表
  async getShops({ commit, state }) {
    //发送异步ajax请求
    const { longitude, latitude } = state
    const result = await reqShops(longitude, latitude)
    //根据结果提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, { shops })
    }
  }
}