<template>
  <div class="footer">
	<ul>
		<li><a href="#"><i>icon</i><span>首页</span></a></li>
		<li><a href="#"><i>icon</i><span>资讯</span></a></li>
		<li><a href="#"><i>icon</i><span>我的</span></a></li>
	</ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '标题'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
