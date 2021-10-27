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
    routes: [
        {
            nme: 'HomePage',
            path: '/',
            component: HomePage
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
        },
        {
            name: 'AppProduct',
            path: '/store/product',
            component: AppProduct,
            props: true
        },
        {
            name: 'AppCart',
            path: '/store/cart',
            component: AppCart,
            props: true
        },
        {
            name: 'ProductDetail',
            path: '/store/product/productDetails',
            component: AppCart,
            props: true
        }
        // {
        //     name: 'PageNotFound',
        //     path: '*',
        //     component: PageNotFound
        // }
    ]
})

export default router;