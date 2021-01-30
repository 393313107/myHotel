import Vue from 'vue'
import Router from 'vue-router'

const layout = () => import('@/page/layout/index')
const welcome = () => import('@/page/welcome/index')
const owner = () => import('@/page/owner/index')
const user = () => import('@/page/user/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/layout/welcome',
      children: [
        {
          path: '/layout/welcome',
          name: 'welcome',
          component: welcome
        },
        {
          path: '/layout/owner',
          name: 'owner',
          component: owner
        },
        {
          path: '/layout/user',
          name: 'user',
          component: user
        }
      ]
    }
  ]
})
