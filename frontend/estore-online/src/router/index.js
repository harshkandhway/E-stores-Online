import Router from 'vue-router'
import stores from '@/stores'
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
            component: AppCart,
            props: true,
            meta: {
                authorize: [ 'customer' ]
            }
        },
        {
            name: 'ProductDetail',
            path: '/store/product/productDetails',
            component: ProductDetail,
            props: true,
            meta
        },
        {
            name: 'StoreRegistration',
            path: '/registerstore',
            component: StoreRegistration,
            props: true,
            meta
        },
        // {
        //     name: 'PageNotFound',
        //     path: '*',
        //     component: PageNotFound
        // }

        {    name: 'StoreManagement',
            path: '/storemanage',
            component: StoreManagement,
            meta: {
                authorize: [ 'admin' ]
            }
        },
        {    name: 'StoreForm',
            path: '/storeform',
            component: StoreForm,
            props: true,
            meta: {
                authorize: [ 'admin' ]
            }
        },
        {    name: 'RequestedStore',
            path: '/requestedstore',
            component: RequestedStore,
            props: true,
            meta: {
                authorize: [ 'admin' ]
            }
        },

        {
            name: 'ProductManagement',
            path: '/productmanage',
            component: ProductManagement,
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
            component: AddProduct,
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
    
    // else if((to.name==='Login' && stores.getters.isAuthenticated) && stores.state.auth.role=='user'){
    //     console.log('second if')
    //     return next({
    //         name:'ProductManagement'
    //     })
    // }

    else if(to.name==='AppProduct' && !stores.getters.isAuthenticated){
        console.log('3rd if')
        return next({
            name:'Login'
        })
    }

    else if(to.name==='Login' && stores.getters.isAuthenticated && stores.state.auth.role=='admin'){
        console.log('4th if')
        return next({
            name:'StoreManagement'
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
    // if( to.name !== 'Login' && !stores.getters.isAuthenticated ) {
    //     return next({
    //         name: 'Login'
    //     });
    // }
    // if( to.name !== 'HomePage' && !stores.getters.isAuthenticated ) {
    //     return next({
    //         name: 'HomePage'
    //     });
    // }
    
    // if(to.name=='Login' && stores.getters.isAuthenticated){
    //     return next({
    //         name: 'HomePage'
    //     });
    // }
    // if(to.name=='Register' && !stores.getters.isAuthenticated){
    //     return next({
    //         name: 'Register'
    //     });
    // }
    // if(to.name=='Register' && stores.getters.isAuthenticated){
    //     return next({
    //         name: 'HomePage'
    //     });
    // }
    // if(to.name=='StoreRegistration' && stores.getters.isAuthenticated){
    //     return next({
    //         name: 'StoreRegistration'
    //     });
    // }
    // if(to.name=='StoreRegistration' && !stores.getters.isAuthenticated){
    //     return next({
    //         name: 'Register'
    //     });
    // }
    // if(to.name=='StoreManagement' && stores.state.auth.role=='user'){
    //     return next({
    //         name: 'ProductManagement'
    //     });
    // }
    // if(to.name=='StoreForm' && stores.state.auth.role=='user'){
    //     return next({
    //         name: 'ProductManagement'
    //     });
    // }
    // if(to.name=='RequestedStore' && stores.state.auth.role=='user'){
    //     return next({
    //         name: 'ProductManagement'
    //     });
    // }
    // if(to.name=='StoreManagement' && stores.state.auth.role=='customer'){
    //     return next({
    //         name: 'AppProduct'
    //     });
    // }
    // if(to.name=='StoreForm' && stores.state.auth.role=='customer'){
    //     return next({
    //         name: 'AppProduct'
    //     });
    // }
    // if(to.name=='RequestedStore' && stores.state.auth.role=='customer'){
    //     return next({
    //         name: 'AppProduct'
    //     });
    // }
    next();
});

export default router;