import Router from 'vue-router'
// import stores from '@/stores'
import AppCart from '@/components/AppCart'
import HomePage from '@/components/HomePage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AppStore from '@/components/AppStore'
import AppProduct from '@/components/AppProduct'
import ProductDetail from '@/components/ProductDetail'
// import PageNotFound from '@/components/PageNotFound';
import StoreManagement from '@/components/AdminDashboard/StoreManagement'
import ProductManagement from '@/components/AdminDashboard/ProductManagement'
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
            component: ProductDetail,
            props: true
        },
        // {
        //     name: 'PageNotFound',
        //     path: '*',
        //     component: PageNotFound
        // }

        {    name: 'StoreManagement',
            path: '/storemanage',
            component: StoreManagement,
        },
        {
            name: 'ProductManagement',
            path: '/storemanage/productmanage',
            component: ProductManagement,
            props: true
        },
    ]
})

export default router;