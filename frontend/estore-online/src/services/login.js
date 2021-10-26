import axios from 'axios';
import Vue from  'vue';

function login(credentials){
    const config = {
        method: 'POST',
        url: 'http://localhost:3001/api/v1/auth/login',
        headers:{
            'Content-Type': 'application/json',
        },
        data: credentials
    }
    return axios(config).then((res)=>res.data)
    .catch(()=>Vue.$toast.open({
        message: "Invalid login id or password",
        duration: 3000,
        type: 'error',
      }))
}

export{
    login
}