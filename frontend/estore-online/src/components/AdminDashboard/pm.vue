<template>
  <div>
  </div>
</template>

<script>
// import { products } from "@/services/product";
export default {
  name: "ProductManagement",

  data() {
    return {
      products: []
    };
  },
  methods: {
    // productDetail(productId) {
    //   this.$store.commit("setProductId", productId);
    //   this.$router.push({
    //                     name: 'ProductDetail',
    //                     params: {
    //                         productId: productId
    //                     }
    //                 });
    // }
  },
  created() {
    // products(this.$store.state.auth.storeId).then(data => {
    //   this.products = data;
    //   console.log(this.products);
    // });
  }
};
</script>

<style>
.main-container {
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
  margin: 30px;
  position: relative;
  outline: none;
  width: 350px;
  height: 300px;
}
.product-design img {
  width: 350px;
  height: 300px;
  position: relative;
}
.img {
  margin: 0;
  padding: 0;
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