import axios from 'axios';
// import Vue from  'vue';

function products(storeId){
    return axios.get(`http://localhost:8080/api/v1/stores/${storeId}/products`,{withCredentials:true
},{headers:{
        'Content-Type': 'application/json',
        // 'Authorization' : Vue.$cookies.get('token')
    }})
    .then(res=>{
        return res.data;
    }).catch(error=>error)
}

function singleProduct(storeId,productId){
    return axios.get(`http://localhost:8080/api/v1/stores/${storeId}/products/${productId}/`,{withCredentials:true
},{headers:{
        'Content-Type': 'application/json',
        // 'Authorization' : Vue.$cookies.get('token')
    }})
    .then(res=>{
        return res.data;
    }).catch(error=>error)
}

export{
    products,singleProduct
}