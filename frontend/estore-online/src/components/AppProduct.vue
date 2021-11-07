<template>
  <div style="positon:relative">
    <div class="banner" v-if="role === 'customer'">
      <img :src="storeImage" />
      <div
        class="overlay"
        style="position:absolute;top:0; background:black; height:100%; width:100%; opacity:0.4"
      ></div>
    </div>
    <div class="main-container">
      <div class="product-base">
        <div
          class="product-design"
          v-for="(product,index) in products"
          :key="index"
          
        >
          <div class="product-content">
            <div class="img" @click="productDetail(product._id,product.imageUrl)">
              <img :src="product.imageUrl" />
            </div>
            <div class="product-details">
              <div class="name-price">
                <h5 class="m-small">{{product.productName}}</h5>
                <h6 class="m-small">Rs. {{product.price}}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { products } from "@/services/product";
import AppFooter from "@/components/AppFooter";
export default {
  name: "AppProduct",
  components: {
    AppFooter
  },
  props: {
    storeId: String
  },

  computed: {
    storeImage() {
      return this.$store.state.auth.storeImage;
    },
    role(){
      return this.$store.state.auth.role;
    },
    isAuthenticated(){
      return this.$store.getters.isAuthenticated
    }
  },

  data() {
    return {
      products: [],
      cartIteam:{
        productName:'',
        imageUrl:'',
        price:'',
        productId:''
      }
    };
    
  },
  methods: {
    productDetail(productId, productImage) {
      this.$store.commit("setProductId", productId);
      this.$store.commit("setProductImage", productImage);
      this.$router.push({
        name: "ProductDetail",
        params: {
          productId: productId
        }
      });
    },
    addToCart(product){
      this.cartIteam.productName = product.productName;
      this.cartIteam.imageUrl = product.imageUrl;
      this.cartIteam.price = product.price;
      this.cartIteam.productId = product._id;
      console.log(this.cartIteam);

    }
  },
  created() {
    products(this.$store.state.auth.storeId).then(data => {
      this.products = data;
      console.log(this.products);
    });
  }
};
</script>

<style>
.banner {
  height: 450px;
  width: 100%;
  /* background: chartreuse; */
  position: relative;
}
.banner img {
  height: 100%;
  width: 100%;
}

.banner .after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  color: rgb(143, 5, 5);
}

.main-container {

   position: relative;
  z-index: 0;
}
.product-base {

  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  z-index: 0;
  flex-direction: row;
  padding: 20px 0 200px 0;
}
.product-design {

  border: 2px solid lightgray;
  border-radius: 5px;

  margin: 20px;
  min-width: 370px;
  max-width: 370px;
  justify-content: center;
  align-items: center;
  min-height: 370px;
  
}

.product-content{

  height: 100%;
}

.product-design img {
  width: 100%;
  height: 300px;
  position: relative;
}

.name-price {
  display: flex;
  flex-direction: column;
  margin: 6px;
  padding: 4px;
}
.m-small {
  margin: 2px 0;
}
.product-details {

  display: flex;
  justify-content: space-between;

}
.product-design:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
@media screen and (max-width: 950px) {
  .product-base {
    align-items: center;
    justify-content: center;
  }
}
</style>