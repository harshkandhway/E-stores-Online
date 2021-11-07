<template>
  <div>
    <div class="main-container">
      <div class="product-base">
        <div
          class="product-design"
          v-for="(product,index) in products"
          :key="index"
        >
          <div class="img">
            <img :src="product.imageUrl" />
          </div>
          <div class="product-details">
            <div class="name-price">
              <h5 class="m-small">{{product.productName}}</h5>
              <h6 class="m-small">Rs. {{product.price}}</h6>
            </div>
            <div style="margin:10px" v-if="role === 'customer'">
              <v-btn elevation="2" class="ma-4">Add to cart</v-btn>
            </div>
            <div style="margin:10px" v-if="role === 'user'">
              <v-btn elevation="2" class="ma-4" @click="modifyProduct(product._id)">Modify</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import {showMe,getSingleUser} from '@/services/user'
import { products } from "@/services/product";
import {getSingleStore} from "@/services/store"
import AppFooter from "@/components/AppFooter"
export default {
  name: "ProductManagement",
components:{
    AppFooter
  },
  data() {
    return {
      products: [],
      update: false,
      register: false,
      userId:'',
      storeId: '',
      storeImage: ''
    };
  },
  methods: {
modifyProduct(productId){
  console.log(productId)
  this.update = true
  this.$store
        .commit('setProductId', productId)
  this.$store
        .commit('setStoreId', this.storeId)
  this.$router.push({
    name:"ProductForm",
    params:{
      productId:productId,
      storeId:this.storeId,
      update: this.update
    }
  })
}

  },
   computed:{
      isAuthenticated(){
          return this.$store.getters.isAuthenticated;
      },
      role(){
          return this.$store.state.auth.role
      },
      storeImageComputed(){
        return this.$store.state.auth.storeImage
      },
      productImageComputed(){
        return this.$store.state.auth.productImage
      }
  },
  created() {
    showMe().then(data=>{
      this.userId = data.user.userId
      getSingleUser(this.userId).then(data=>{
        this.$store
        .commit('setRole', data.user.role)
        this.storeId = data.user.storeId
        getSingleStore(this.storeId).then(data=>{
          this.$store.commit('setStoreImage', data.store.imageUrl)
        products(this.storeId).then(data=>{
          this.products = data
          console.log('product dash',this.products)
        })
        })
        

      })
    })
  }
};
</script>

<style scoped>
.modify-product-btn{
  width: 55%;
}
</style>