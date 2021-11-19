<template>
  <div id="app">
    <router-view></router-view>
    <!-- 当前路由下的meta里的showFooter属性是否为true，为true就展示FooterGuide -->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide';

export default {
  components:{
    FooterGuide
  }
};
</script>

<style  rel="stylesheet/stylus">
#app {
  width:100%;
  height:100%;
  color: read;
}
</style>