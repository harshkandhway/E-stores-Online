import axios from 'axios';
// import Vue from  'vue';

function store(){
    return axios.get(`http://localhost:8080/api/v1/stores`,{withCredentials:true
},{headers:{
        'Content-Type': 'application/json',
        // 'Authorization' : Vue.$cookies.get('token')
    }})
    .then(res=>{
        return res.data;
    }).catch(error=>error)
}

export{
    store
}