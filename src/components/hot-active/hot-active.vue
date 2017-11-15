<template>
  <div class="hot-active">
  	<h3>热门活动</h3>
	<ul class="list">
		<li v-for="item in images"><a href="#"><img :src="item.url"></a></li>
	</ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
      	{url:'./static/images/r1.jpg'},
      	{url:'./static/images/r2.jpg'},
      	{url:'./static/images/r3.jpg'},
      	{url:'./static/images/r4.jpg'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hot-active {
		margin-top: .15625rem;
	}
	.hot-active h3 {
		font-size: .1875rem;
		text-align: left;
		padding-left: .15625rem;
		margin-bottom: .1875rem;
	}	
</style>
