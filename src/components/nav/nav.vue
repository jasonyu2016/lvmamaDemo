<template>
  <div class="navbar">
    <a href="#" class="navbar-l">长沙</a>
    <h1>{{$route.params.id}}</h1>
    <a href="#" class="navbar-r"></a>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      msg: '新闻'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  background: url('../../../static/images/my.png') no-repeat 50% 50%;
  background-size: .375rem;
}
</style>
