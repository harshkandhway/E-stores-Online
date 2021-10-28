<template>

  <div class="form-design">
    <div class="form-container">
      <div class="store-name">E-Stores Online</div>
      <div>
          <v-btn elevation="2" class="ml-2 mb-0" style="background-color:crimson; color:white; " @click="deleteProduct">Delete Product</v-btn>
        </div>
      <div class="form-heading" style="margin:20px 10px">Add Your Product</div>
      <div>
        <form @submit.prevent="modifyProduct">
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
</template>

<script>
import {singleProduct,deleteProduct,modifyProduct} from '@/services/product'
export default {
  name: "ProductForm",
  data: () => ({
    details: ["Waterproof", "Washable", "Comfortable"],
    tempdetail: "",
    product:{}
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
  deleteProduct(){
    deleteProduct(this.$store.state.auth.storeId,this.$store.state.auth.productId).then(()=>{
        this.$router.push({
            name:'ProductManagement'
        })
    })
  },
  modifyProduct(){
      modifyProduct(this.$store.state.auth.storeId,this.$store.state.auth.productId,this.product).
      then(data=>console.log(data))
  }
  },
  created(){
       singleProduct(this.$store.state.auth.storeId,this.$store.state.auth.productId).then(data => {

      this.product = data[0];
      console.log(this.product)
    }).catch(error=>error)
  }
};
</script>

<style scoped>
.form-design {
  width: 60%;
  border: 1px solid grey;
  height: auto;
  margin: 60px auto;
  display: flex;
}
.form-container {
  padding: 35px 25px;
  flex-basis: 75%;
}
.company-logo {
  margin: auto;
  flex-basis: 25%;
}
.name-category {
  display: flex;
  justify-content: space-between;
}
.store-name {
  color: #33343b;
  font-size: 25px;
  font-weight: 500;
  margin: 10px 0;
}
.form-heading {
  color: #33343b;
  font-size: 20px;
  font-weight: 500;
  margin: 12px 0;
}
.input-style {
  border: 1px solid #33343b;
  padding: 8px;
  border-radius: 3px;
  background-color: white;
  width: 100%;
  margin-bottom: 8px;
}
form label {
  font-size: 18px;
  margin: 8px 0;
}
.street-address {
  display: flex;
  flex-direction: column;
}
.city-state {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.submit {
  margin-top: 25px;
  width: 100%;
  background-color: goldenrod;
  font-size: 18px;
  padding: 8px;
  color: white;
  font-weight: 500;
}
.product-details {
  display: flex;
}
.addbutton {
  /* margin:0px 0px 0px 0px; */
  width: 100px;
  border-radius: 3px;
  background-color: goldenrod;
  font-size: 18px;
  padding: 8px;
  color: white;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
}
.show-details {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.show-detail-div {
  max-width: 300px;
  word-break: break-word;
  margin: 10px 12px 0px 0px;
  border-radius: 15px;
  border: 1px solid grey;
  padding: 6px;
  position: relative;
  background: lightgoldenrodyellow
}
@media screen and (max-width: 1200px) {
  .form-design {
    width: 60%;
  }
  .company-logo {
    display: none;
  }
  .form-container {
    justify-content: center;
    align-items: center;
    flex-basis: 90%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 1000px) {
  .name-category {
    display: flex;
    flex-direction: column;
  }
  .city-state {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 900px) {
  .product-details {
    display: flex;
    flex-direction: column;
  }
  .addbutton {
    margin: 20px 0px;
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .form-design {
    width: 90%;
  }
  .form-container {
    width: 100%;
  }
}
</style>