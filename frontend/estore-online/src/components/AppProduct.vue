<template>
  <div style="positon:relative">
    <div class="banner" >
      <img :src="storeImage">
      <div class='overlay' style="position:absolute;top:0; background:black; height:100%; width:100%; opacity:0.4" ></div>
      </div>
    <div class="main-container">
      <div class="product-base">
        <div
          class="product-design"
          v-for="(product,index) in products"
          :key="index"
          @click="productDetail(product._id,product.imageUrl)"
        >
          <div class="img">
            <img :src="product.imageUrl" />
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
              <v-btn elevation="2" class="ma-4">Add to cart</v-btn>
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
import AppFooter from "@/components/AppFooter"
export default {
  name: "AppProduct",
  components:{
    AppFooter
  },
  props: {
    storeId: String
  },

  computed:{
    storeImage(){
      return this.$store.state.auth.storeImage;
    }
  },

  data() {
    return {
      products: []
    };
  },
  methods: {
    productDetail(productId,productImage) {
      this.$store.commit("setProductId", productId);
      this.$store.commit('setProductImage',productImage)
      this.$router.push({
                        name: 'ProductDetail',
                        params: {
                            productId: productId
                        }
                    });
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

.banner{
  height: 400px;
  width: 100%;
  /* background: chartreuse; */
  position: relative;
}
.banner img{
  height: 100%;
  width: 100%;
}

.banner .after{
   position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    color: rgb(143, 5, 5);
}

.main-container {
  /* position: relative; */
  width: 90%;
  margin: 0 auto;
  padding: 10px;
}
.product-base {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
  flex-wrap: wrap;
}
.product-design {
  /* flex-basis: 27%; */
  border-radius: 4px;
  margin:  0 20px 150px 20px ;
  position: relative;
  outline: none;
  width: 350px;
  height: 300px;
}
.product-design img {
  width: 100%;
  height: 100%;
  position: relative;
}
.img {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.wishlist {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
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
  height: 100px;
  margin-top: -6px;
  align-items: center;
  border: 2px solid lightgrey;
  border-top: 2px solid white;
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