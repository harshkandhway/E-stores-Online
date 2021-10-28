import {login} from "@/services/login.js"
import { logout } from "@/services/login";
// import Vue from 'vue';
// const KEY_TOKEN = 'token';
const KEY_EMAIL = 'email';
const KEY_NAME = 'name';
const KEY_ROLE = 'role';
const STORE_ID = 'storeId'
const PRODUCT_ID = 'productId'

const auth={
    state:{
        // token: Vue.$cookies.get( KEY_TOKEN ) || '',
        email: localStorage.getItem( KEY_EMAIL ) || '',
        name: localStorage.getItem( KEY_NAME ) || '',
        role: localStorage.getItem(KEY_ROLE) || '',
        storeId: localStorage.getItem(STORE_ID) || '',
        productId: localStorage.getItem(STORE_ID) || ''
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
        }
    },
    getters:{
        isAuthenticated(state){
            return !!state.email
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

            commit( 'setEmail', '' );
            commit( 'setName', '' );
            commit( 'setRole', '' );
            commit( 'setStoreId', '' );
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