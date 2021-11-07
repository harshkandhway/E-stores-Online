import axios from 'axios';
import Vue from 'vue';

function showMe() {
    let loader = Vue.$loading.show({ loader: 'dots' })
    return axios.get(`/api/v1/users/showMe`, {
        withCredentials: true
    }, {
        headers: {
            'Content-Type': 'application/json',
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
            return error
        })
}

function getSingleUser(userId) {
    let loader = Vue.$loading.show({ loader: 'dots' })
    return axios.get(`/api/v1/users/${userId}`, {
        withCredentials: true
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => {
            loader.hide()
            return res.data;
        }).catch(error => {
            loader.hide()
            Vue.$toast.open({
                message: "Failed to fetch data of user",
                duration: 3000,
                type: 'error',
            });
            return error
        })
}

function modifyUser(userId, form) {
    let loader = Vue.$loading.show({ loader: 'dots' })
    return axios
        .patch(
            `/api/v1/users/updateUser/${userId}`, form, {
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
                message: "User modified successfully",
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
            return error
        });
}

export {
    showMe, modifyUser, getSingleUser
}