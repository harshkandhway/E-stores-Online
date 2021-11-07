import axios from 'axios';
import Vue from 'vue';

function login(credentials) {
    let loader = Vue.$loading.show({ loader: 'dots' })
    const config = {
        method: 'POST',
        url: '/api/v1/auth/login',
        headers: {
            'Content-Type': 'application/json',
        },
        data: credentials,
    }
    return axios(config).then((res) => {
        loader.hide()
        return res.data
    })
        .catch(() => {
            Vue.$toast.open({
                message: "Invalid login id or password",
                duration: 3000,
                type: 'error',
            })
            loader.hide()
        })
}

function register(credentials) {
    let loader = Vue.$loading.show({ loader: 'dots' })
    const config = {
        method: 'POST',
        url: '/api/v1/auth/register',
        headers: {
            'Content-Type': 'application/json',
        },
        data: credentials,
    }
    return axios(config).then((res) => {
        loader.hide()
        return res.data
    })
        .catch(() => {
            Vue.$toast.open({
                message: "Failed to register",
                duration: 3000,
                type: 'error',
            })
            loader.hide()
        })
}

function logout() {
    let loader = Vue.$loading.show({ loader: 'dots' })
    return axios.get(`/api/v1/auth/logout`, {
        withCredentials: true
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => {
            loader.hide()
            return res.data;
        }).catch(error => error)
}

export {
    login,
    logout,
    register
}