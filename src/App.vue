<template>
  <div id="app">
    <div class="navbar">
      <a href="#" class="navbar-l">长沙</a>
      <h1>{{$route.name}}</h1>
      <a href="#" class="navbar-r"></a>
    </div> 
    <!-- <navbar></navbar> -->
    <router-view></router-view>

    <div class="footer">
      <ul>
        <li><router-link :to="{path:'/index'}"><i>icon</i><span>首页</span></router-link></li>
        <li><router-link :to="{path:'/news'}"><i>icon</i><span>资讯</span></router-link></li>
        <li><router-link :to="{path:'/profile'}"><i>icon</i><span>我的</span></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
// import navbar from './components/nav/nav'

export default {
  components:{
    // navbar:navbar
  },
  data(){
    return {
      title:'首页',
      ids:'',
      name:''
    }
  },
  methods:{
    changeTitle(i){
      this.title = i;
    }
  },
  created(){
    // var ids = this.$route.params.id;
    // console.log(ids);
    // var names = this.$route.query.name;
    // console.log(names);
    console.log(this.$route);
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
/*navbar*/
.navbar {
  width: 100%;
  background: #fff;
  text-align:center;
  height: .75rem;
  line-height: .75rem;
  position: fixed;
  top: 0;
  z-index: 999;
}
.navbar h1 {
  margin-left: .75rem;
  margin-right: .75rem;
}
.navbar .navbar-l {
  position: absolute;
  top: 0;
  left: 0;
  width: .75rem;
  height: .75rem;
}
.navbar .navbar-l:after {
  content: '';
  width: .125rem;
  height: .125rem;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
  transform: rotate(-45deg);
  display: inline-block;
  position: absolute;
  top: 50%;
  right: -.0625rem;
  margin-top: -.0625rem;
  vertical-align: middle;
  margin-left: .15625rem;
}
.navbar .navbar-r {
  position: absolute;
  top: 0;
  right: 0;
  width: .75rem;
  height: .75rem;
  background: url('../static/images/my.png') no-repeat 50% 50%;
  background-size: .375rem;
}

.footer {
  width: 100%;
  padding: .09875rem 0;
  background: #ccc;
  position: fixed;
  bottom: 0;
  z-index: 11;
  border-top: 1px #f7f7f7 solid;
}
.footer ul {
  display: flex;
}
.footer ul li {
  width: 33.3333333%;
  box-sizing: border-box;
}
.footer ul li:nth-of-type(2) {
  border-left: 1px #f7f7f7 solid;
  border-right: 1px #f7f7f7 solid;
}
.footer ul li span {
  font-size: .15625rem;
  display: block;
}
</style>
