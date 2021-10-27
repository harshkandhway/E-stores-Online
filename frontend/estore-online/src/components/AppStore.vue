<template>
     <div class="store-page">
      <div class="store-page-child">
          <h1 class="small-screen">Stores</h1>
          <hr/>
          <div class="store-class">
              <div class="store-details" v-for="(store,index) in stores" :key="index" @click="seeProduct(store.products,store._id)">
                  <!--  -->
                 <div class="store-img">
                     <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/4e/41/1b/domino-s-pizza-brakpan.jpg">
                 </div>
              </div>
          </div>
      </div>
   </div>
</template>

<script>
import {store} from '@/services/store'
export default{
    name: 'AppStore',
    data(){
        return{
            stores: []
        }
    },
    methods:{
        seeProduct(products,storeId){
            // console.log(products);
            // console.log(storeId);
           this.$store
        .commit('setStoreId', storeId)
        console.log('vuex store',this.$store.state.auth.storeId)
            this.$router.push({
                        name: 'AppProduct',
                        params: {
                            storeId: storeId
                        }
                    });
        }
    },
    created(){
        store().then(data=>{
            this.stores = data.store;
            console.log("is auth", this.$store.getters.isAuthenticated);
            // console.log(this.stores)
        })
        .catch(error=>error)

    }
}
</script>

<style scoped>
.store-page{
    width:90%;
    margin:50px auto;
}

.store-page-child{
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    /* align-items: center; */
}
.store-class{
  margin-top:10px;
  display:inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  /* align-items: center; */
}
.store-details{
    flex-basis:10%;
    width: 100%;
    border-radius:6px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border:none;
    outline:0;
    padding:0;
    cursor: pointer;
    border-radius: 15px;
    /* margin:0 30px 30px 0; */
    margin: 30px 30px;
    /* margin-top:0;  */
}
.store-details:hover{
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.30), 0 12px 12px rgba(0, 0, 0, 0.27);
}
.store-img{
    width:350px;
    height:350px;
    border-radius: 15px;
}
.store-img img{
    width:100%;
    height:100%;
    padding: 0;
    border-radius: 15px;
}
@media screen and (max-width:1400px)
{
    .store-class{
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
}
@media screen and (max-width:500px)
{
    .store-img{
        width:200px;
        height:200px;
    }
    .small-screen{
        font-size:25px;
    }
}
</style>