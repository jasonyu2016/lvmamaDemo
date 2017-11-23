import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import News from '@/components/news/news.vue'
import Profile from '@/components/profile/profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      // name:'index',
      // component:Index
      redirect:'/index'
    },
    {
      path:'/index',
      name:'首页',
      component:Index
    },    
    {
      path:'/news',
      name:'资讯',
      component:News
    },
    {
      path:'/profile',
      name:'我的',
      component:Profile
    }
  ]
})
