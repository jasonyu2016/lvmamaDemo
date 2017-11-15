<template>
  <div class="subnav">
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
      	{url:'./static/images/subnav1.png'},
      	{url:'./static/images/subnav2.png'},
      	{url:'./static/images/subnav3.png'},
      	{url:'./static/images/subnav4.png'},
      	{url:'./static/images/subnav5.png'},
      	{url:'./static/images/subnav6.png'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
