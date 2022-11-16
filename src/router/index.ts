import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import ColumnDetail from '@/views/ColumnDetail.vue'
import CreatePosts from '@/views/CreatePosts.vue'
import { useUserStore } from '@/stores/user'
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: Home },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                redirectAlreadyLogin: true,
            },
        },
        {
            path: '/column/:id',
            name: 'column',
            component: ColumnDetail,
        },
        {
            path: '/create',
            name: 'create',
            component: CreatePosts,
            meta: {
                requireLogin: true,
            },
        },
    ],
})
router.beforeEach((to, from, next) => {
    const store = useUserStore()
    if (to.meta.requireLogin && !store.user.isLogin) {
        next({ name: 'login' })
    } else if (to.meta.redirectAlreadyLogin && store.user.isLogin) {
        next('/')
    } else {
        next()
    }
})

export default router
