import {login} from "@/services/login.js"
import { logout,register } from "@/services/login";
// import Vue from 'vue';
// const KEY_TOKEN = 'token';
const KEY_EMAIL = 'email';
const KEY_NAME = 'name';
const KEY_ROLE = 'role';
const STORE_ID = 'storeId';
const PRODUCT_ID = 'productId';
const ADDRESS = 'address';
const STORE_EMAIL = 'storeEmail';
const STORE_IMAGE = 'storeImage';
const PRODUCT_IMAGE = 'productImage';
const CART_ITEMS = 'cartItems'

const auth={
    state:{
        // token: Vue.$cookies.get( KEY_TOKEN ) || '',
        email: localStorage.getItem( KEY_EMAIL ) || '',
        name: localStorage.getItem( KEY_NAME ) || '', 
        role: localStorage.getItem(KEY_ROLE) || '',
        storeId: localStorage.getItem(STORE_ID) || '',
        productId: localStorage.getItem(PRODUCT_ID) || '',
        address: localStorage.getItem(ADDRESS) || '',
        storeEmail: localStorage.getItem(STORE_EMAIL) || '',
        storeImage: localStorage.getItem(STORE_IMAGE) || '',
        productImage: localStorage.getItem(PRODUCT_IMAGE) || '',
        cartItems:JSON.parse(localStorage.getItem(CART_ITEMS)) || []

    },
    mutations: {
        // setToken( state, token ) {
        //     state.token = token;
        // },
        setEmail( state, email ) {
            state.email = email;
        },
        setName( state, name ) {
            state.name = name;
        },
        setRole(state, role){
            state.role = role
        },
        setStoreId(state, storeId){
            state.storeId = storeId
            localStorage.setItem(STORE_ID, storeId);
        },
        setProductId(state, productId){
            state.productId = productId
            localStorage.setItem(PRODUCT_ID, productId);
        },
        setAddress(state, address){
            state.address = address
            localStorage.setItem(ADDRESS, address);
        },
        setStoreEmail(state, storeEmail){
            state.storeEmail = storeEmail
            localStorage.setItem(STORE_EMAIL, storeEmail);
        },
        setStoreImage(state, storeImage){
            state.storeImage = storeImage
            localStorage.setItem(STORE_IMAGE, storeImage);
        },
        setProductImage(state, productImage){
            state.productImage = productImage
            localStorage.setItem(PRODUCT_IMAGE, productImage);
        },
        setCartItem(state,cartItems){
            state.cartItems = cartItems
            localStorage.setItem(CART_ITEMS,JSON.stringify(cartItems))
        }

    },
    getters:{
        isAuthenticated(state){
            return !!state.role
        }
    },
    actions:{
        login(context,credentials){
            return login(credentials)
                .then(data=>{
                    const{ user } = data
                    // console.log("hello",data)
                    console.log(user)
                    // Vue.$cookies.set(KEY_TOKEN,token);
                    localStorage.setItem(KEY_EMAIL, user.email);
                    localStorage.setItem(KEY_NAME, user.name);
                    localStorage.setItem(KEY_ROLE, user.role);
                    
                    // context.commit("setToken",token);
                    context.commit("setEmail",user.email);
                    context.commit("setName",user.name);
                    context.commit("setRole",user.role);
                    return user.email;
                });   
        },
        register(context,credentials){
            return register(credentials)
                .then(data=>{
                    const{ user } = data
                    // console.log("hello",data)
                    console.log(user)
                    // Vue.$cookies.set(KEY_TOKEN,token);
                    localStorage.setItem(KEY_EMAIL, user.email);
                    localStorage.setItem(KEY_NAME, user.name);
                    localStorage.setItem(KEY_ROLE, user.role);
                    
                    // context.commit("setToken",token);
                    context.commit("setEmail",user.email);
                    context.commit("setName",user.name);
                    context.commit("setRole",user.role);
                    return user.email;
                })
        },
        // storeIdAccess({commit},storeId){
        //     Vue.$cookies.set(STORE_ID, storeId);
        //     commit('setStoreId')
        // },
        logout( { commit } ) {
      logout()
        .then(data => {
            localStorage.removeItem( KEY_EMAIL );
            localStorage.removeItem( KEY_NAME );
            localStorage.removeItem( KEY_ROLE );
            localStorage.removeItem( STORE_ID );
            localStorage.removeItem( PRODUCT_ID );
            commit( 'setStoreId', '' );
            commit( 'setEmail', '' );
            commit( 'setName', '' );
            commit( 'setRole', '' );
            
            commit( 'setProductId', '' );
          this.$router.push({
            name: "login"
          });
          console.log(data);
        })
        .catch(error => error);
            // this.$cookies.delete( KEY_TOKEN );
            return Promise.resolve();
        }
    }
};

export default auth