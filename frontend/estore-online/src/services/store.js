import axios from 'axios';
import Vue from  'vue';

function store() {
    let loader = Vue.$loading.show({loader:'dots'})
    return axios.get(`/api/v1/stores`, {
        withCredentials: true
    }, {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization' : Vue.$cookies.get('token')
        }
    })
        .then(res => {
            loader.hide()
            return res.data;
        }).catch(error => {
            loader.hide()
            Vue.$toast.open({
                message: "Failed to fetch data",
                duration: 3000,
                type: 'error',
            });
            return error})
}

function reqStore() {
    let loader = Vue.$loading.show({loader:'dots'})
    return axios.get(`/api/v1/stores/requests`, {
        withCredentials: true
    }, {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization' : Vue.$cookies.get('token')
        }
    })
        .then(res => {
            loader.hide()
            return res.data;
        }).catch(error => {
            loader.hide()
            Vue.$toast.open({
                message: "Failed to fetch data",
                duration: 3000,
                type: 'error',
            });
            return error})
}

function getSingleStore(storeId){
    let loader = Vue.$loading.show({loader:'dots'})
    return axios.get(`/api/v1/stores/${storeId}`, {
        withCredentials: true
    }, {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization' : Vue.$cookies.get('token')
        }
    })
        .then(res => {
            loader.hide()
            return res.data;
        }).catch(error => {
            loader.hide()
            Vue.$toast.open({
                message: "Failed to fetch data",
                duration: 3000,
                type: 'error',
            });
            return error})
}

function deleteStore(storeId){
    let loader = Vue.$loading.show({loader:'dots'})
    return axios.delete(`/api/v1/stores/${storeId}`, {
        withCredentials: true
    }, {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization' : Vue.$cookies.get('token')
        }
    })
        .then(res => {
            loader.hide()
            return res.data;
        }).catch(error => {
            loader.hide()
            Vue.$toast.open({
                message: "Failed to fetch data",
                duration: 3000,
                type: 'error',
            });
            return error})
}

function modifyStore(storeId,form) {
    let loader = Vue.$loading.show({loader:'dots'})
    return axios
        .patch(
            `/api/v1/stores/${storeId}`,form, {
                withCredentials: true
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        },
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
        .catch(() => {
            loader.hide()
            Vue.$toast.open({
                message: "Failed to fetch data 1111",
                duration: 3000,
                type: 'error',
            });
        });
}

function createStore(form) {
    let loader = Vue.$loading.show({loader:'dots'})
    return axios.post(`/api/v1/stores`, form,{
        withCredentials: true
    }, {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization' : Vue.$cookies.get('token')
        }
    })
        .then(res => {
            loader.hide()
            Vue.$toast.open({
                message: "Thanks for your request, Your store would be listed soon",
                duration: 8000,
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
            return error})
}

function storeImage(storeId,image) {
    let loader = Vue.$loading.show({loader:'dots'})
    return axios
        .post(
            `/api/v1/stores/${storeId}/uploadImage`,image, {
                withCredentials: true
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        },
        )
        .then(res => {
            loader.hide()
            Vue.$toast.open({
                message: "Store Image added successfully",
                duration: 3000,
                type: 'success',
            });
            return res.data
        })
        .catch(() => {
            loader.hide()
            Vue.$toast.open({
                message: "Failed to fetch data 1111",
                duration: 3000,
                type: 'error',
            });
        });
}

export {
    store,getSingleStore,deleteStore,modifyStore,createStore,reqStore,storeImage
}