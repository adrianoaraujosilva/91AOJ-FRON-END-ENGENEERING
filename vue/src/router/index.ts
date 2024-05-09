import LoginView from '@/components/LoginComponent.vue'
import TasksView from '@/components/TarefasComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated, logout } from '@/services/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/tarefas',
      name: 'tarefas',
      component: () => TasksView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isAuthenticated()) {
      next()
      return
    }
    next('/')
  }
  next()
})

export default router
