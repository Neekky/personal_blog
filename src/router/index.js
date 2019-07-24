import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routerComponents from '@/components/global/autoLoading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: routerComponents.get('HelloWorld')
    }
  ]
})
