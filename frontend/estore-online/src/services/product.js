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
    }).catch(error=>error)
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
    }).catch(error=>error)
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
        .catch(error => error);

}

export{
    products,singleProduct,deleteProduct
}