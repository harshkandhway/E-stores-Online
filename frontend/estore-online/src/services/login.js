import axios from 'axios';
import Vue from  'vue';

function login(credentials){
    const config = {
        method: 'POST',
        url: '/api/v1/auth/login',
        headers:{
            'Content-Type': 'application/json',
        },
        // withCredentials:true,
        data: credentials,
        
    }
    return axios(config).then((res)=>res.data)
    .catch(()=>Vue.$toast.open({
        message: "Invalid login id or password",
        duration: 3000,
        type: 'error',
      }))
}

function logout(){
    return axios.get(`/api/v1/auth/logout`,{withCredentials:true
},{headers:{
        'Content-Type': 'application/json',
        // 'Authorization' : Vue.$cookies.get('token')
    }})
    .then(res=>{
        return res.data;
    }).catch(error=>error)
}

export{
    login,
    logout
}