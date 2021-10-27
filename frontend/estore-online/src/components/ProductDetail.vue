<template>
  <div>
  <div class="main-container">
      <div class="detail-img">
         <img src="https://assets.ajio.com/medias/sys_master/root/20210610/wa4D/60c10be0f997ddb312c4026b/-1117Wx1400H-460345106-black-OUTFIT2.jpg">
      </div>
        <div class="detail-base">
            <div class="mb-2 class-color class-size">{{product.productBrand}}</div>
            <div>{{product.productName}}</div>
            <div class="mt-4 class-size">{{product.price}}</div>
            <!-- <div class="class-color"><span class="text-decoration-line-through"> Rs. 3695 </span> <span class="mr-2"> ( 52% off ) </span></div> -->
            <div>Price inclusive of all taxes</div>
            <div class="product-color mt-4">
                <div> Black </div>
                <div class="display-color-outline mt-2">
                    <div class="display-color"></div>
                </div>
            </div>
            <div class="mt-4">
                Select Size
            </div>
            <div class="mt-2">
                <v-btn
                    class="ma-2"
                    outlined
                    fab
                    color="orange"
                    >
                    6
                </v-btn>
                    <v-btn
                    class="ma-2"
                    outlined
                    fab
                    color="orange"
                    >
                    7
                </v-btn>
                    <v-btn
                    class="ma-2"
                    outlined
                    fab
                    color="orange"
                    >
                    8
                </v-btn>
                    <v-btn
                    class="ma-2"
                    outlined
                    fab
                    color="orange"
                    >
                    9
                </v-btn>
            </div>
            <div class="mt-4">
                <v-btn
                    elevation="2"
                    large
                    >
                    Add to cart
                    </v-btn>
            </div>
            <div>
                <div class="mt-8 mb-4 class-color" style="font-weight:500; font-size:20px">
                    <h4> Product Details </h4>
                </div>
                 <ul>
                     <li v-for="(productD,index) in product.productDetails" :key="index">{{productD}}</li>
                     <li>Lightweight</li>
                     <li>Flat heel and rounded-toe</li>
                     <li>Lace Fastening</li>
                     <li>Regular Fit</li>
                     <li>Lace Fastening</li>
                 </ul>
                 <div class="mt-4 details">
                     The Nike Revolution 4 cushions the strides with soft foam to keep one running in comfort.
                     Lightweight knit material wraps the foot in breathable support, while a minimalist design 
                     fits in just about anywhere the day takes. Single Layer Mesh throughout the upper for optimal 
                     breathability and Soft foam midsole delivers comfort and responsive cushioning. Its textured 
                     outer wall reduces the weight of the shoe. Rubber outsole offers durable traction on a variety 
                     of surfaces. The pods flatten on impact then spring back at toe-off creating an effect that 
                     delivers responsive cushioning. Deep flex Grooves promote natural range of motion. Spacing in 
                     the tread lets the foot flex naturally.
                 </div>
            </div>
        </div>
     </div>
     <AppFooter/>
  </div>
</template>

<script>
import { singleProduct } from "@/services/product";
import AppFooter from '@/components/AppFooter.vue';
export default {
    name:'ProductDetail',
  components:{
      AppFooter
  },
   data() {
    return {
      product: {}
    }
  },
  created() {
    singleProduct(this.$store.state.auth.storeId,this.$store.state.auth.productId).then(data => {
      this.product = data[0];
      console.log(this.product);
    });
  }
}
</script>

<style scoped>
.main-container{
   width:80%;
   margin:40px auto;
   padding:20px;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
}
.detail-img{
    width:50%;
}
.main-container img{
    width:400px;
}
.detail-base{
    width:40%;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.class-color{
    color: orange;
}
.class-size{
    font-size:30px;
}
.mrp{
    font-size:30px;
}
.display-color-outline{
    width:60px;
    height:60px;
    border:2px solid grey;
    border-radius: 50px;
}
.display-color{
    width:50px;
    height:50px;
    background-color: black; 
    border-radius:50px;
    margin:3px;
}
.product-color{
    display:flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
}
.details{
    text-align: justify;
}
@media screen and (max-width:1200px)
{
    .main-container{
        width:90%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .detail-img{
        width:50%;
    }
    .detail-base{
        margin-top:30px;
    }
}
@media screen and (max-width:950px)
{
    .main-container{
        width:90%;
        justify-content: center;
    }
   .detail-img{
        width:60%;
    }
    .detail-img img{
        width:100%;
    }
    .detail-base{
        width:100%;
    }
}
@media screen and (max-width:500px)
{
    .main-container{
        width:95%;
        justify-content: center;
    }
   .detail-img{
        width:100%;
    }
    .detail-img img{
        width:100%;
    }
    .detail-base{
        width:100%;
    }
}
</style>