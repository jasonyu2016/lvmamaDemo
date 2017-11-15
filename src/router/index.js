import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/news/news.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/news',
      component:News
    }
  ]
})
