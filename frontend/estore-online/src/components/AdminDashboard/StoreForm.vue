<template>
<div>
    <div class="form-design">
       <div class="form-container">
            <div class="store-name">
                E-Stores Online
            </div>
            <div class="form-heading">
                Register Store
            </div>
            <!-- <div class="form-heading" v-if="!this.update">
                Update Store
            </div> -->
            <form @submit.prevent="modifyStore()">
            <div>
                <form>
                    <div class="name-category">
                        <div style="margin-right:10px">
                            <label for="fname" >Name</label>
                            <input type="text" id="fname" placeholder="Store Name" class="input-style" v-model="store.name"> 
                        </div>
                        <div>
                            <label for="text">Category</label>
                            <input type="text" placeholder="Store Category" class="input-style" v-model="store.category">
                        </div>
                    </div>
                </form>
            </div>
            <div class="form-heading">
                Address
            </div>
            <div>
                <form>
                    <div class="street-address">
                        <div>
                            <label for="text">Street</label>
                            <textarea type="textarea" placeholder="Street" class="input-style" v-model="store.address"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <label for="registered">Registered</label>
            <input type="checkbox" id="registered" style="margin-left:20px" v-model="store.registered">
            
                <input type="submit" value="Submit" class="submit">
            </form>
       </div>
       <div class="company-logo">
           <img src="https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/application/pictures/free-logo/original/v6YLFKFeJ-Fynd.jpeg" style="width:200px; height:200px;">
       </div>
    </div>
    <div class="main-container">
      <div class="product-base">
        <div
          class="product-design"
          v-for="(product,index) in store.products"
          :key="index"
        >
          <div class="img">
            <img src="https://4.imimg.com/data4/RE/BI/ANDROID-41682785/product-500x500.jpeg" />
          </div>
          <div class="wishlist">
            <v-btn class="mx-2" fab dark small color="pink">
              <v-icon dark>mdi-heart</v-icon>
            </v-btn>
          </div>
          <div class="product-details">
            <div class="name-price">
              <h5 class="m-small">{{product.productName}}</h5>
              <h6 class="m-small">{{product.price}}</h6>
            </div>
            <div style="margin:10px">
              <v-btn elevation="2" class="ma-4" @click="removeProduct(product._id)">Remove</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { deleteProduct } from "@/services/product";
import { getSingleStore, modifyStore} from "@/services/store";
// import Vue from 'vue'
export default{
    name:'StoreForm',
    // components:{
    // },
    props: {
        storeId: String,
    },
    data(){
        return{
            store: {}
        }
    },
    methods:{
        removeProduct(productId){
            // let loader = this.$loading.show({loader:'dots'})
            deleteProduct(this.storeId,productId)
            .then(data=>{
                // loader.hide()
                this.store.products = data.storeNew.products
                console.log(data)})
            .catch(error=>error)
        },
        modifyStore(){
            console.log(this.store)
            // let loader = this.$loading.show({loader:'dots'})
            modifyStore(this.storeId,this.store).then(data=>{
                // loader.hide()
                this.store=data.store})
            .catch(error=>error)
            }
        
    },
    
    created(){
        // let loader = this.$loading.show({loader:'dots'})
        getSingleStore(this.storeId || this.$store.state.auth.storeId)
        .then(data=>{
            // loader.hide()
            this.store=data.store
            console.log(this.store)})
        .catch(error=>error)
    }
}
</script>

<style scoped>
.form-design{
    width:60%;
    border:1px solid grey;
    height:auto;
    margin:60px auto;
    display:flex;
}
.form-container{
    padding:35px 25px;
    flex-basis: 75%;
}
.company-logo{
    margin:auto;
    flex-basis:25%;
}
.name-category{
    display:flex;
    justify-content: space-between;
}
.store-name{
     color:#33343b;
     font-size:25px;
     font-weight:500;
     margin:10px 0;
}
.form-heading{
     color:#33343b;
     font-size:20px;
     font-weight:500;
     margin:12px 0;
}
.input-style{
    border:1px solid #33343b;
    padding:8px;
    border-radius:3px;
    background-color: white;
    width:100%;
    margin-bottom:8px;
}
form label{
    font-size:18px;
    margin:8px 0;
}
.street-address{
    display:flex;
    flex-direction: column;
}
.city-state{
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.submit{
    margin-top:25px;
    width:100%;
    background-color:goldenrod;
    font-size:18px;
    padding:8px;
    color:white;
    font-weight:500;
}
@media screen and (max-width:1200px)
{ 
    .form-design{
        width:60%;
    }
    .company-logo{
        display:none;
    }
    .form-container{
        justify-content: center;
        align-items: center;
        flex-basis: 90%;
        margin:0 auto;
    }
}
@media screen and (max-width:1000px)
{
    .name-category{
        display: flex;
        flex-direction: column;
    }
    .city-state{
        display: flex;
        flex-direction: column;
    }
}
@media screen and (max-width:500px)
{
    .form-design{
        width:90%;
    }
    .form-container{
        width:100%;
    }
}
</style>