import Router from 'vue-router'
// import stores from '@/stores'
import AppCart from '@/components/AppCart'
import HomePage from '@/components/HomePage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AppStore from '@/components/AppStore'
import AppProduct from '@/components/AppProduct'
// import PageNotFound from '@/components/PageNotFound';


const router = new Router({
    mode: 'history',
    routes:[
        {
            nme: 'HomePage',
            path:'/',
            component:HomePage
        },
        {
            name: 'Login',
            path: '/login',
            component: Login
        },
        {
            name: 'Register',
            path: '/register',
            component: Register
        },
        {
            name: 'AppStore',
            path: '/store',
            component: AppStore,
            children:[
                {
                    name: 'AppProduct',
                    path: '/store/product',
                    component: AppProduct
                },
                {
                    name: 'AppCart',
                    path: '/store/cart',
                    component: AppCart
                }
            ]
        },
        // {
        //     name: 'PageNotFound',
        //     path: '*',
        //     component: PageNotFound
        // }
    ]
})

export default router;