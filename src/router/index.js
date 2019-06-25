import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import brand from '@/components/brand'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/brand',
      name: 'Brand',
      component: brand
    }
  ],
  scrollBehavior(to, from,savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
