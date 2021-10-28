import axios from 'axios';
import Vue from  'vue';

function products(storeId){
    let loader = Vue.$loading.show({loader:'dots'})
    return axios.get(`/api/v1/stores/${storeId}/products`,{withCredentials:true
},{headers:{
        'Content-Type': 'application/json',
        // 'Authorization' : Vue.$cookies.get('token')
    }})
    .then(res=>{
        loader.hide()
        return res.data;
    }).catch(error=>{
        loader.hide()
        Vue.$toast.open({
            message: "Failed to fetch data",
            duration: 3000,
            type: 'error',
        });
        return error})
}

function singleProduct(storeId,productId){
    let loader = Vue.$loading.show({loader:'dots'})
    return axios.get(`/api/v1/stores/${storeId}/products/${productId}/`,{withCredentials:true
},{headers:{
        'Content-Type': 'application/json',
        // 'Authorization' : Vue.$cookies.get('token')
    }})
    .then(res=>{
        loader.hide()
        return res.data;
    }).catch(error=>{
        loader.hide()
        Vue.$toast.open({
            message: "Failed to fetch data",
            duration: 3000,
            type: 'error',
        });
        return error})
}

function deleteProduct(storeId,productId) {
    let loader = Vue.$loading.show({loader:'dots'})
    return axios
        .delete(
            `/api/v1/stores/${storeId}/products/${productId}`, null, {
                withCredentials: true
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        )
        .then(res => {
        loader.hide()
            Vue.$toast.open({
                message: "Store modified successfully",
                duration: 3000,
                type: 'success',
            });
            return res.data
        })
        .catch(error => {
            loader.hide()
            Vue.$toast.open({
                message: "Failed to fetch data",
                duration: 3000,
                type: 'error',
            });
            return error});
}

function modifyProduct(storeId,productId,form) {
    let loader = Vue.$loading.show({loader:'dots'})
    return axios
        .patch(
            `/api/v1/stores/${storeId}/products/${productId}`, form, {
                withCredentials: true
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        )
        .then(res => {
        loader.hide()
            Vue.$toast.open({
                message: "Store modified successfully",
                duration: 3000,
                type: 'success',
            });
            return res.data
        })
        .catch(error => {
            loader.hide()
            Vue.$toast.open({
                message: "Failed to fetch data",
                duration: 3000,
                type: 'error',
            });
            return error});
}

export{
    products,singleProduct,deleteProduct,modifyProduct
}