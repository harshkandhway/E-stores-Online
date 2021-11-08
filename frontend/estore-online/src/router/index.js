import Router from 'vue-router'
import stores from '@/stores'
// import AppCart from '@/components/AppCart'
import HomePage from '@/components/HomePage'
// import Login from '@/components/Login'
// import Register from '@/components/Register'
import AppStore from '@/components/AppStore'
import AppProduct from '@/components/AppProduct'
// import ProductDetail from '@/components/ProductDetail'
// import StoreRegistration from '@/components/StoreRegistration'
// import PageNotFound from '@/components/PageNotFound'
// import StoreManagement from '@/components/AdminDashboard/StoreManagement'
// import StoreForm from '@/components/AdminDashboard/StoreForm'
// import ProductManagement from '@/components/UserDashboard/ProductManagement'
// import RequestedStore from '@/components/AdminDashboard/RequestedStore'
import ProductForm from '@/components/UserDashboard/ProductForm'
// import AddProduct from '@/components/UserDashboard/AddProduct'

const meta = {
    authorize:['admin','user','customer']
};
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
            component: () => import('@/components/Login')
        },
        {
            name: 'Register',
            path: '/register',
            component: () => import('@/components/Register')
        },
        {
            name: 'AppStore',
            path: '/store',
            component: AppStore,
            meta
        },
        {
            name: 'AppProduct',
            path: '/store/product',
            component: AppProduct,
            props: true,
            meta
        },
        {
            name: 'AppCart',
            path: '/store/cart',
            component: () => import('@/components/AppCart'),
            props: true,
            meta: {
                authorize: [ 'customer' ]
            }
        },
        {
            name: 'ProductDetail',
            path: '/store/product/productDetails',
            component: () => import('@/components/ProductDetail'),
            props: true,
            meta
        },
        {
            name: 'StoreRegistration',
            path: '/registerstore',
            component: () => import('@/components/StoreRegistration'),
            props: true,
            meta
        },
        {
            name: 'PageNotFound',
            path: '*',
            component: () => import('@/components/PageNotFound'),
        },

        {    name: 'StoreManagement',
            path: '/storemanage',
            component: () => import('@/components/AdminDashboard/StoreManagement'),
            meta: {
                authorize: [ 'admin' ]
            }
        },
        {    name: 'StoreForm',
            path: '/storeform',
            component: () => import('@/components/AdminDashboard/StoreForm'),
            props: true,
            meta: {
                authorize: [ 'admin' ]
            }
        },
        {    name: 'RequestedStore',
            path: '/requestedstore',
            component: () => import('@/components/AdminDashboard/RequestedStore'),
            props: true,
            meta: {
                authorize: [ 'admin' ]
            }
        },

        {
            name: 'ProductManagement',
            path: '/productmanage',
            component: () => import('@/components/UserDashboard/ProductManagement'),
            props: true,
            meta: {
                authorize: [ 'user' ]
            }
        },
        {    name: 'ProductForm',
            path: '/productform',
            component: ProductForm,
            props: true,
            meta: {
                authorize: [ 'user' ]
            }
        },
        {
            name: 'AddProduct',
            path: '/addproduct',
            component: () => import('@/components/UserDashboard/AddProduct'),
            props: true,
            meta: {
                authorize: [ 'user' ]
            }
        }
    ]
})

router.beforeEach(( to, from, next ) => {
    console.log('first if')
    const authorize = to.meta.authorize
    if(authorize && !stores.getters.isAuthenticated){
        return next({
            name:'Login'
        })
    }

    else if(to.name==='AppProduct' && !stores.getters.isAuthenticated){
        console.log('3rd if')
        return next({
            name:'Login'
        })
    }

    else{
        if( authorize && !authorize.includes( stores.state.auth.role ) ) {
            console.log('last if')
            return next({
                
                path: '/'
            });
        }
    }
    next();
});

export default router;