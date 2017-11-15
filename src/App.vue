<template>
  <div id="app">
    <navbar></navbar>
    <banner></banner>
    <subnav></subnav>
    <iconnav></iconnav>
    <hotactive></hotactive>
    <holidayactive></holidayactive>
    <tabbar></tabbar>
  </div>
</template>

<script>
//引入导航栏组件
import navbar from './components/navbar/navbar'
import banner from './components/banner/banner'
import subnav from './components/subnav/subnav'
import iconnav from './components/iconnav/iconnav'
import hotactive from './components/hot-active/hot-active'
import holidayactive from './components/holiday-active/holiday-active'
import tabbar from './components/footer/tabbar'

export default {
  components:{
    navbar:navbar,
    banner:banner,
    subnav:subnav,
    iconnav:iconnav,
    hotactive:hotactive,
    holidayactive:holidayactive,
    tabbar:tabbar
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  width: 100%;
}
a {
  text-decoration: none;
  color: #222;
}
html {
  font-size: 64px;
}
@media screen and (min-width:360px) {
  html {
    font-size: 72px;
  }
}
@media screen and (min-width:375px) {
  html {
    font-size: 75px;
  }
}
@media screen and (min-width:414px) {
  html {
    font-size: 82.8px;
  }
}
body {
  font-size: .1875rem;
  background: #f7f7f7;
  padding-bottom: .5625rem;
}
h1 {
  font-size: .21875rem;
}

</style>
