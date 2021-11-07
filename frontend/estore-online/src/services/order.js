import axios from 'axios';
import Vue from 'vue';

function createOrder(storeId, productId, form) {
    let loader = Vue.$loading.show({ loader: 'dots' })
    return axios.post(`/api/v1/order/${storeId}/products/${productId}/`, form, {
        withCredentials: true
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => {
            loader.hide()
            Vue.$toast.open({
                message: "Order Placed",
                duration: 3000,
                type: 'success',
            });
            return res.data;
        }).catch(error => {
            loader.hide()
            Vue.$toast.open({
                message: "Failed to fetch data",
                duration: 3000,
                type: 'error',
            });
            console.log(error)
        })
}

export {
    createOrder
}