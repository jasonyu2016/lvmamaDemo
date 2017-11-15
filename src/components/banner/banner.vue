<template>
	<mt-swipe :auto="4000">
	  <mt-swipe-item v-for="item in img">
	  	<img :src="item.url">
	  </mt-swipe-item>
	</mt-swipe>
</template>
<script>

export default {
  data() {
    return {
      img: [
      	{url:'./static/images/banner1.jpg'},
      	{url:'./static/images/banner2.jpg'},
      	{url:'./static/images/banner3.jpg'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
