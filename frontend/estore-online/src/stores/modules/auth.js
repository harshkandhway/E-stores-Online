import {login} from "@/services/login.js"
import Vue from 'vue';
const KEY_TOKEN = 'token';
const KEY_EMAIL = 'email';
const KEY_NAME = 'name';
const KEY_ROLE = 'role';
const STORE_ID = 'storeId'
const PRODUCT_ID = 'productId'

const auth={
    state:{
        token: Vue.$cookies.get( KEY_TOKEN ) || '',
        email: Vue.$cookies.get( KEY_EMAIL ) || '',
        name: Vue.$cookies.get( KEY_NAME ) || '',
        role: Vue.$cookies.get(KEY_ROLE) || '',
        storeId: Vue.$cookies.get(STORE_ID) || '',
        productId: Vue.$cookies.get(STORE_ID) || ''
    },
    mutations: {
        setToken( state, token ) {
            state.token = token;
        },
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
            Vue.$cookies.set(STORE_ID, storeId);
        },
        setProductId(state, productId){
            state.productId = productId
            Vue.$cookies.set(PRODUCT_ID, productId);
        }
    },
    getters:{
        isAuthenticated(state){
            return !!state.token
        }
        
    },
    actions:{
        login(context,credentials){
            return login(credentials)
                .then(data=>{
                    const{token,user}=data
                    Vue.$cookies.set(KEY_TOKEN,token);
                    Vue.$cookies.set(KEY_EMAIL, user.email);
                    Vue.$cookies.set(KEY_NAME, user.name);
                    Vue.$cookies.set(KEY_ROLE, user.role);
                    
                    context.commit("setToken",token);
                    context.commit("setEmail",user.email);
                    context.commit("setName",user.name);
                    context.commit("setRole",user.role);
                    return user.email;
                });
                
        },
        // storeIdAccess({commit},storeId){
        //     Vue.$cookies.set(STORE_ID, storeId);
        //     commit('setStoreId')
        // },
        logout( { commit } ) {
            localStorage.removeItem( KEY_TOKEN );
            localStorage.removeItem( KEY_EMAIL );
            localStorage.removeItem( KEY_NAME );
        
            commit( 'setToken', '' );
            commit( 'setEmail', '' );
            commit( 'setName', '' );

            return Promise.resolve();
        }
    }
};

export default auth