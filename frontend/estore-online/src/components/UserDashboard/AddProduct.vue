<template>
<div>
  
  <div class="form-design">
    <div class="form-container">
      <div class="store-name">E-Stores Online</div>
      <div class="form-heading" style="margin:20px 10px">Add Your Product</div>
      <div>
        <form @submit.prevent="createProduct">
          <div class="name-category">
            <div class="div1" style="margin:0 10px">
              <label for="text" >Product Name</label>

              <input type="text" placeholder="Product Name" class="input-style" v-model="product.productName"/>
            </div>
            <div class="div2" style="margin:0 10px">
              <label for="text">Product Brand</label>

              <input type="text" placeholder="Product Brand" class="input-style" v-model="product.productBrand"/>
            </div>
          </div>
          <div class="street-address" style="margin:0 10px">
            <div class="city-state">
              <div>
                <label for="text">Price</label>

                <input type="text" placeholder="Price" class="input-style" v-model="product.price"/>
              </div>
              <div>
                <label for="text">Size</label>

                <input type="text" placeholder="Size" class="input-style" v-model="product.size"/>
              </div>
            </div>
            <form class="product-detail" @submit.prevent="AddDetailToArray">
              <div>
                <label for="text">Product Detail</label>
                <input
                  type="text"
                  placeholder="Add Detail"
                  class="input-style"
                  required
                  v-model="tempdetail"
                />
              </div>
              <div>
                <input type="submit" value="Add" class="addbutton" />
                  <!-- <v-icon left> mdiDelete </v-icon> -->
               
              </div>
            </form>
            <div class="show-details">
              <div class="show-detail-div" v-for="(detail,index) in product.productDetails" :key="index">{{detail}}
                <b-icon icon="trash-fill" scale="1" variant="info" shift-h=2 style="cursor:pointer" @click="deleteDetail(index)"></b-icon>
              </div>
            </div>
            <div>
              <input type="submit" value="Modify Now" class="submit" />
              
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="company-logo">
      <img
        src="https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/application/pictures/free-logo/original/v6YLFKFeJ-Fynd.jpeg"
        style="width:200px; height:200px;"
      />
    </div>
  </div>
  </div>
</template>

<script>
import {showMe,getSingleUser} from '@/services/user'
import {createProduct} from '@/services/product'
export default {
  components:{
    
  },
  name: "AddProduct",
  data: () => ({
    tempdetail: "",
    product:{productBrand:'',
                productName: "",
                price: "Rs. ",
                size: "",
                imageUrl: "",
                productDetails: []
                },
    userId:'',
    storeId: ''
  }),
  methods: {
    AddDetailToArray() {
      console.log(this.tempdetail);
      this.product.productDetails.push(this.tempdetail);
      this.tempdetail = "";
    },
    deleteDetail(index){
      this.product.productDetails.splice(index, 1);
  },
  createProduct(){
      createProduct(this.storeId,this.product).
      then(data=>{
        this.product = {}
        console.log(data)
      })
  },
  },
  created(){
showMe().then(data=>{
      this.userId = data.user.userId
      getSingleUser(this.userId).then(data=>{
        this.storeId = data.user.storeId
        // products(data.user.storeId).then(data=>{
        //   this.products = data
        //   console.log('product dash',this.products)
        // })

      })
    })
  }
};
</script>

<style scoped>

</style>