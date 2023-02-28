import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home/userInfo',
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/userInfo',
    component: () => import('../components/layouts/Home.vue'),
    children: [
      {
        path: 'userInfo',
        name: 'UserInfo',
        meta: { title: 'UserInfo' },
        component: () => import('../views/UserInfo.vue'),
      },
      {
        path: 'firstMenu',
        name: 'FirstMenu',
        meta: { title: 'FirstMenu' },
        component: () => import('../views/FirstMenu.vue')
      },
      {
        path: 'secondMenu',
        name: 'SecondMenu',
        meta: { title: 'FirstMenu' },
        component: () => import('../views/SecondMenu.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router