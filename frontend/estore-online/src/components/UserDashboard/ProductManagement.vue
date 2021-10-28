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
    <Footer />
  </div>
</template>

<script>
// import AdminNav from '@/components/AdminDashboard/AdminNav'
import {showMe,getSingleUser} from '@/services/user'
import { products } from "@/services/product";
export default {
  name: "ProductManagement",
  components: {
    //   AdminNav
  },
  data() {
    return {
      products: [],
      update: false,
      register: false,
      userId:'',
      storeId: ''
    };
  },
  methods: {
    // seeProduct(products, productId) {
    //   // console.log(products);
    //   // console.log(productId);
    //   this.$product.commit("setProductId", productId);
    //   console.log("vuex product", this.$product.state.auth.productId);
    //   this.$router.push({
    //     name: "AppProduct",
    //     params: {
    //       productId: productId
    //     }
    //   });
    // }
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
      }
  },
  created() {
    showMe().then(data=>{
      this.userId = data.user.userId
      getSingleUser(this.userId).then(data=>{
        this.storeId = data.user.storeId
        products(data.user.storeId).then(data=>{
          this.products = data
          console.log('product dash',this.products)
        })

      })
    })
  }
    // getSingleStore(this.$store.state.auth.storeId)
    //   .then(data => {
    //     // loader.hide()
    //     this.store = data.store;
    //     // this.form.storeId = data.store._id
    //     this.userId = data.store.userId;
    //     getSingleUser(this.userId)
    //       .then(data => {
    //         this.form.role = data.user.role;
    //         this.form.name = data.user.name;
    //         this.form.email = data.user.email;
    //         this.form.storeId = data.user.storeId;
    //       })
    //       .catch(error => error);
    //     console.log("req store", this.store);
    //   })
    //   .catch(error => error);
};
</script>

<style scoped>
.modify-product-btn{
  width: 55%;
}
</style>