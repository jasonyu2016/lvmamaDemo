<template>
  <div class="iconnav">
	<ul class="list">
		<li v-for="item in images"><a href="#"><img :src="item.url"></a></li>
	</ul>

	<div class="qinzi">
	  	<ul class="qzlist">
	  		<li v-for="item in qinzi"><a href="#"><img :src="item.url"></a></li>
	  	</ul>
	</div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      images: [
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
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
	}
	.qinzi .qzlist li:nth-of-type(1) {
		
	}
	.qinzi .qzlist li:nth-of-type(2) {
		float: right;

	}	
	.qinzi .qzlist li:nth-of-type(3) {
		float: right;
	}	
</style>
