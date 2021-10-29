import Router from 'vue-router'
// import stores from '@/stores'
import AppCart from '@/components/AppCart'
import HomePage from '@/components/HomePage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AppStore from '@/components/AppStore'
import AppProduct from '@/components/AppProduct'
import ProductDetail from '@/components/ProductDetail'
import StoreRegistration from '@/components/StoreRegistration'
// import PageNotFound from '@/components/PageNotFound';
import StoreManagement from '@/components/AdminDashboard/StoreManagement'
import StoreForm from '@/components/AdminDashboard/StoreForm'
import ProductManagement from '@/components/UserDashboard/ProductManagement'
import RequestedStore from '@/components/AdminDashboard/RequestedStore'
import ProductForm from '@/components/UserDashboard/ProductForm'
import AddProduct from '@/components/UserDashboard/AddProduct'


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
        {
            name: 'StoreRegistration',
            path: '/registerstore',
            component: StoreRegistration,
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
        {    name: 'StoreForm',
            path: '/storeform',
            component: StoreForm,
            props: true
        },
        {    name: 'RequestedStore',
            path: '/requestedstore',
            component: RequestedStore,
            props: true
        },

        {
            name: 'ProductManagement',
            path: '/productmanage',
            component: ProductManagement,
            props: true
        },
        {    name: 'ProductForm',
            path: '/productform',
            component: ProductForm,
            props: true
        },
        {
            name: 'AddProduct',
            path: '/addproduct',
            component: AddProduct,
            props: true
        }
    ]
})

export default router;