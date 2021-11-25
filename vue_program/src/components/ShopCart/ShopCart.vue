<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left" @click="toggleShow">
          <div class="logo-wrapper">
            <div class="logo" :class="{ highlight: totalCount }">
              <i
                class="iconfont icon-gouwuchefill"
                :class="{ highlight: totalCount }"
              ></i>
            </div>
            <div class="num" v-if="totalCount">{{ totalCount }}</div>
          </div>
          <div class="price">￥{{ totalPrice }}</div>
          <div class="desc">另需配送费￥{{ info.deliveryPrice }}元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">{{ payText }}</div>
        </div>
      </div>
      <div class="shopcart-list" v-show="isShow">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty">清空</span>
        </div>
        <div class="list-content">
          <ul>
            <li class="food" v-for="(food, index) in cartFoods" :key="index">
              <span class="name">{{ food.name }}</span>
              <div class="price1">
                <span>￥{{ food.price }}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <div class="cartcontrol">
                  <CartControl :food="food" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="list-mask" v-show="isShow" @click="toggleShow"></div>
  </div>
</template>

<script>
import CartControl from "../CartControl/CartControl";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    CartControl,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
    },
  },
  computed: {
    ...mapState(["cartFoods", "info"]), //cartFoods是state里面的某个状态属性
    ...mapGetters(["totalCount", "totalPrice"]), //总数量和总价格
    payClass() {
      const { totalPrice } = this;
      const { minPrice } = this.info;
      return totalPrice >= minPrice ? "enough" : "not-enough"; //如果大于最小支付金额就返回enough类名，否则返回not-enough
    },
    payText() {
      const { totalPrice } = this;
      const { minPrice } = this.info;
      if (totalPrice === 0) {
        return `￥${minPrice}元起送`;
      } else if (totalPrice < minPrice) {
        return `还差￥${minPrice - totalPrice}元起送`;
      } else {
        return "结算";
      }
    },
  },
};
</script>

<style scoped>
.shopcart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;
}
.content {
  display: flex;
  background: #141d27;
  font-size: 0;
  color: rgba(255, 255, 255, 0.4);
}
.content-left {
  flex: 1;
}
.logo-wrapper {
  display: inline-block;
  vertical-align: top;
  position: relative;
  top: -10px;
  margin: 0 12px;
  padding: 6px;
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  border-radius: 50%;
  background: #141d27;
}
.logo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  text-align: center;
  background: #2b343c;
}
.icon-gouwuchefill {
  line-height: 44px;
  font-size: 24px;
  color: #80858a;
}
.highlight {
  color: #fff;
  background: green;
}
.num {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 16px;
  font-size: 9px;
  font-weight: 700;
  color: #ffffff;
  background: rgb(240, 20, 20);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
}
.price {
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  line-height: 24px;
  padding-right: 12px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}
.desc {
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: 15px;
  font-size: 10px;
}
.content-right {
  flex: 0 0 105px;
  width: 105px;
}
.pay {
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
}
.not-enough {
  background: #2b333b;
}
.enough {
  background: #00b43c;
  color: #fff;
}
.ball {
  position: fixed;
  left: 32px;
  bottom: 22px;
  z-index: 200;
  transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
}
.inner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: green;
  transition: all 0.4s linear;
}
.shopcart-list {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  transform: translateY(-100%);
}
.swipe-enter-active,
.swipe-leave-active {
  transition: transform 0.3s;
}
.swipe-enter,
.swipe-leave-to {
  transform: translateY(0);
}
.list-header {
  height: 40px;
  padding: 0 18px;
  background: #f3f5f7;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.title {
  float: left;
  font-size: 14px;
  color: rgb(7, 17, 27);
}
.empty {
  float: right;
  font-size: 14px;
  padding: 10px 0;
  color: rgb(0, 160, 220);
}
.list-content {
  width: 100%;
  max-height: 217px;
  overflow: hidden;
  background: #fff;
}
.food {
  position: relative;
  padding: 10px 0;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
}
.name {
  line-height: 24px;
  font-size: 14px;
  color: rgb(7, 17, 27);
  font-weight: 700;
}
.price {
  position: absolute;
  line-height: 24px;
  font-size: 14px;
}
ul {
  margin: 0;
  padding: 0 10px;
}
.price1 {
  position: absolute;
  line-height: 24px;
  font-size: 14px;
  bottom: 10px;
  right: 80px;
  font-weight: 700;
  color: red;
}
.cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: 20px;
}
.list-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  backdrop-filter: blur(10px);
  opacity: 1;
  background: rgba(7, 17, 27, 0.6);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0 background rgba(7, 17, 27, 0);
}
</style>