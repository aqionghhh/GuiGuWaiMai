<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide/>
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