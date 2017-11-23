<template>
  <div class="news">
	{{msg}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '我的'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.news {
		margin-top: 1rem;
	}
</style>
