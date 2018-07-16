import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import TestRules from '@/components/TestRules'
import Parent from '@/practice/Parent'

// const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Helloword',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/test',
      name:'test',
      component: TestRules
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Parent',
      name: 'Parent',
      component: Parent
    }
  ]
})
