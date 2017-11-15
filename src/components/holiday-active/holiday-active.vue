<template>
  <div class="holiday-active">
    <div class="nav">
      <ul>
        <li class="active">度周末</li>
        <li>度长假</li>
      </ul>
    </div>
    <!--活动列表-->
  	<ul class="list">
  		<li v-for="item in data">
        <a href="#">
          <img :src="item.url">
          <h4>{{item.title}}</h4>
          <p>{{item.article}}</p>
        </a>
      </li>
  	</ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
      	{url:'./static/images/zm1.jpg',title:"这是一个标题",article:"这里是段落描述"},
      	{url:'./static/images/zm2.jpg',title:"这是一个标题",article:"这里是段落描述"},
      	{url:'./static/images/zm3.jpg',title:"这是一个标题",article:"这里是段落描述"},
        {url:'./static/images/zm4.jpg',title:"这是一个标题",article:"这里是段落描述"},
      	{url:'./static/images/zm5.jpg',title:"这是一个标题",article:"这里是段落描述"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
