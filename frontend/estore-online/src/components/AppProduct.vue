<template>
    <div>
    <div class="main-container">
        <div class="product-base">
                <div class="product-design" v-for="(product,index) in products" :key=index @click=productDetail(product._id)>
                    <div class="img">
                        <img src="https://4.imimg.com/data4/RE/BI/ANDROID-41682785/product-500x500.jpeg">
                    </div>
                    <div class="wishlist">
                        <v-btn
                            class="mx-2"
                            fab
                            dark
                            small
                            color="pink"
                            >
                            <v-icon dark>
                                mdi-heart
                            </v-icon>
                            </v-btn>
                    </div>
                     <div class="product-details">
                         <div class="name-price">
                            <h5 class="m-small" >
                                {{product.productName}}
                            </h5>
                             <h6 class="m-small">
                                {{product.price}}
                            </h6>
                         </div>
                         <div style="margin:10px">
                           <v-btn
                                elevation="2"
                                class="ma-4"
                            >
                              Add to cart
                            </v-btn>
                        </div>
                    </div>
                </div>
                 <!-- <div class="product-design">
                        <div class="img">
                            <img src="https://i0.wp.com/www.dominosoffer.co.in/wp-content/uploads/2020/07/Dominos-Farm-House-Pizza.jpg?fit=800%2C450&ssl=1">
                        </div>
                        <div class="wishlist">
                            <v-btn
                                class="mx-2"
                                fab
                                dark
                                small
                                color="pink"
                                >
                                <v-icon dark>
                                    mdi-heart
                                </v-icon>
                                </v-btn>
                        </div>
                        <div class="product-details">
                            <div class="name-price">
                                <h5 class="m-small" >
                                    Farm House
                                </h5>
                                <h6 class="m-small">
                                    Rs. 345
                                </h6>
                            </div>
                            <div> 
                            <v-btn
                                    elevation="2"
                                    class="ma-4"
                                >
                                Add to cart
                                </v-btn>
                            </div>
                        </div>
                </div> -->
                 <!-- <div class="product-design">
                    <div class="img">
                        <img src="https://i0.wp.com/www.dominosoffer.co.in/wp-content/uploads/2020/07/Dominos-Farm-House-Pizza.jpg?fit=800%2C450&ssl=1">
                    </div>
                    <div class="wishlist">
                        <v-btn
                            class="mx-2"
                            fab
                            dark
                            small
                            color="pink"
                            >
                            <v-icon dark>
                                mdi-heart
                            </v-icon>
                            </v-btn>
                    </div>
                     <div class="product-details">
                         <div class="name-price">
                            <h5 class="m-small" >
                                Farm House
                            </h5>
                             <h6 class="m-small">
                                Rs. 345
                            </h6>
                         </div>
                         <div> 
                           <v-btn
                                elevation="2"
                                class="ma-4"
                            >
                              Add to cart
                            </v-btn>
                        </div>
                    </div>
                </div> -->
        </div>
    </div>
    <Footer/>
   </div>
</template>

<script>
import {products} from '@/services/product'
export default{
    name: 'AppProduct',
    props:{
        storeId: String
    },

    data(){
        return{
            products: []
        }
    },
    created(){
        products(this.$store.state.auth.storeId).then((data)=>{
            this.products = data
            console.log(this.products);
        })
    }

}
</script>

<style scoped>
.main-container{
      width:90%;
      margin:0 auto;
      padding:10px;
  }
  .product-base{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px 0;
    flex-wrap: wrap;
  }
  .product-design{
    /* flex-basis: 27%; */
    border-radius:4px;
    margin:30px;
    position:relative;
    outline:none;
    width:350px;
       height:300px;
  }
  .product-design img{
       width:350px;
       height:300px;
       position:relative;
  }
  .img{
       margin:0;
       padding:0;
  }
  .wishlist{
      position:absolute;
      top:0;
      right:0;
      margin-top:10px;
  }
  .name-price{
      display:flex;
      flex-direction: column;
      margin:6px; 
      padding:4px;
  }
  .m-small{
      margin:2px 0;
  }
  .product-details{
      display: flex;
      justify-content: space-between;
      height:100px;
      margin-top:-6px;
      align-items: center;
      border: 2px solid lightgrey;
      border-top: 2px solid white;
  }
  .product-design:hover{
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media screen and (max-width:950px)
  {
      .product-base{
          align-items: center;
          justify-content: center;
      }
  }
</style>