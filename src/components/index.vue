<template>
  <div id="app">
    <!-- <div class="navbar">
      <a href="#" class="navbar-l">长沙</a>
      <h1>{{title}}</h1>
      <a href="#" class="navbar-r"></a>
    </div> -->
    <!-- <navbar></navbar> -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.url">
      </mt-swipe-item>
    </mt-swipe>

    <div class="subnav">
      <ul class="list">
        <li v-for="item in images"><a href="#"><img :src="item.url"></a></li>
      </ul>
    </div>

    <div class="iconnav">
      <ul class="list">
        <li v-for="item in iconnav"><a href="#"><img :src="item.url"></a></li>
      </ul>

      <div class="qinzi">
          <ul class="qzlist">
            <li v-for="item in qinzi"><a href="#"><img :src="item.url"></a></li>
          </ul>
      </div>
    </div>

    <div class="hot-active">
      <h3>热门活动</h3>
      <ul class="list">
        <li v-for="item in hot"><a href="#"><img :src="item.url"></a></li>
      </ul>
    </div>    

    <div class="holiday-active">
      <div class="nav">
        <ul>
          <li class="active">度周末</li>
          <li>度长假</li>
        </ul>
      </div>
      <!--活动列表-->
      <ul class="list">
        <li v-for="item in holiday">
          <a href="#">
            <img :src="item.url">
            <h4>{{item.title}}</h4>
            <p>{{item.article}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import navbar from './nav/nav'
export default {
  // components:{
  //   navbar:navbar
  // },  
  data(){
    return {
      title:'标题',
      banner: [
        {url:'./static/images/banner1.jpg'},
        {url:'./static/images/banner2.jpg'},
        {url:'./static/images/banner3.jpg'}
      ],
      images: [
        {url:'./static/images/subnav1.png'},
        {url:'./static/images/subnav2.png'},
        {url:'./static/images/subnav3.png'},
        {url:'./static/images/subnav4.png'},
        {url:'./static/images/subnav5.png'},
        {url:'./static/images/subnav6.png'}
      ],
      iconnav: [
        {url:'./static/images/j1.png'},
        {url:'./static/images/j2.png'},
        {url:'./static/images/j3.png'},
        {url:'./static/images/j4.png'},
        {url:'./static/images/j5.png'},
        {url:'./static/images/j6.png'},
        {url:'./static/images/j7.png'},
        {url:'./static/images/j8.png'}
      ],
      qinzi:[
        {url:'./static/images/t1.jpg'},
        {url:'./static/images/t2.jpg'},
        {url:'./static/images/t3.jpg'}
      ],
      hot: [
        {url:'./static/images/r1.jpg'},
        {url:'./static/images/r2.jpg'},
        {url:'./static/images/r3.jpg'},
        {url:'./static/images/r4.jpg'}
      ],
      holiday: [
        {url:'./static/images/zm1.jpg',title:"这是一个标题",article:"这里是段落描述"},
        {url:'./static/images/zm2.jpg',title:"这是一个标题",article:"这里是段落描述"},
        {url:'./static/images/zm3.jpg',title:"这是一个标题",article:"这里是段落描述"},
        {url:'./static/images/zm4.jpg',title:"这是一个标题",article:"这里是段落描述"},
        {url:'./static/images/zm5.jpg',title:"这是一个标题",article:"这里是段落描述"}
      ]                     
    }
  },
  methods:{

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
/** {
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
}*/

/*banner*/
.mint-swipe {
    position: relative;
    height: 1.5625rem;
    margin-bottom: .15625rem;
    margin-top: .75rem;
}
.mint-swipe-items-wrap {
    position: relative;
}
.mint-swipe-item {
    position: absolute;
}
/*subnav*/
.subnav {
  padding: 0 .15625rem;
}
.subnav .list {
  display: flex;
  flex-wrap: wrap;
}
.subnav .list li {
  width: 1.45833333rem;
  background: #ccc;
  margin-bottom: .15625rem;
  box-sizing: border-box;
}
.subnav .list li img {
  display: inline-block;
  vertical-align: middle;
}
.subnav .list li:nth-of-type(3n-1){
  margin-left: .15625rem;
  margin-right: .15625rem;
}
/*iconnav*/
.iconnav {

}
.iconnav .list {
  display: flex;
  flex-wrap: wrap;
}
.iconnav .list li {
  width: 1.25rem;
  box-sizing: border-box;
  background: #f7f7f7;
  border: 1px #e6e6e6 solid;
}
.iconnav .list li img {
  display: inline-block;
  vertical-align: middle;
}
.qinzi {
  margin-top: .15625rem;
}
.qinzi .qzlist {
  overflow: hidden;
}
.qinzi .qzlist li {
  width: 50%;
  float: left;
  font-size: 0;
}
.qinzi .qzlist li:nth-of-type(1) {
  
}
.qinzi .qzlist li:nth-of-type(2) {
  float: right;

} 
.qinzi .qzlist li:nth-of-type(3) {
  float: right;
}
/*hot-active*/
.hot-active {
  margin-top: .15625rem;
}
.hot-active h3 {
  font-size: .1875rem;
  text-align: left;
  padding-left: .15625rem;
  margin-bottom: .1875rem;
}
/*holiday*/
.holiday-active {
  margin-top: .15625rem;
  text-align: left;
}
.holiday-active .nav ul {
  display: flex;
  margin-bottom: .15625rem;
}
.holiday-active .nav ul li {
  width: 50%;
  height: .5rem;
  line-height: .5rem;
  position: relative;
  text-align: center;
}
.holiday-active .nav ul li.active:after {
  content: '';
  width: .5rem;
  border-bottom: 2px #f60 solid;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
}

.holiday-active .list li {
  padding-bottom: .15625rem;
  margin-bottom: .15625rem;
  background: #fff;
}
.holiday-active .list li h4,.holiday-active .list li p {
  padding-left: .15625rem;
}
.holiday-active .list li p {
  font-size: .15625rem;
  margin-top: .078125rem;
}
</style>
