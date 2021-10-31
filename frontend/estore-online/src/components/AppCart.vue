<template>
   <div class="cart-container">
        <div class="cart-detail-design">
            <div class="cart-design" v-for="(item, index) in getCartItem" :key="index">
                <div class="img">
                     <img :src="item.imageUrl">
                </div>
                <div class="detail">
                   <div class="descrip">
                        {{item.productName}}
                   </div>
                   <!-- <div class="qnt">
                        <div class="btn-style">
                            <v-icon size="20" class="pa-1"> mdi-minus </v-icon>
                        </div>
                        <div style="font-size:18px">
                            1
                        </div>
                        <div class="btn-style">
                             <v-icon size="20" class="pa-1"> mdi-plus </v-icon>
                        </div>
                   </div> -->
                   <div style="font-size:22px; color:goldenrod;">
                       Rs. {{item.price}}
                   </div>
                </div>
            </div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center;" >
            <div class="payment-design" v-if="getCartItem.length>0">
                <div>
                    <h4 class="mt-2">Order Details</h4>
                    <div class="payment-details">
                        <div>Cart Total</div>
                        <div>Rs. {{cartTotal}}</div>
                    </div>
                        <div class="payment-details">
                            <div>Discount</div>
                        <div>- Rs. 0</div>
                    </div>
                    <div class="payment-details">
                            <div>Shipping</div>
                        <div>Rs. 50</div>
                    </div>
                    <div class="payment-details">
                            <div>Total</div>
                        <div>Rs. {{cartTotal + 50}}</div>
                    </div>
                    <div class="proceed-to-pay">
                        <v-btn
                                block
                                elevation="2"
                                class="mt-8"
                                color="orange"
                                @click="createOrder"
                                >
                                Confirm Order
                        </v-btn>
                    </div>
                </div>
            </div>
            <div style="font-size: 36px;margin-top:50px" v-else><span>Your cart is empty</span></div>
        </div>
        
    </div>
</template>

<script>
import {showMe} from '@/services/user'
import {createOrder} from '@/services/order'
export default {
  name: "AppCart",
  data() {
    return {
        form:{
            userId:'',
            cartItems:[]
        }
        
    };
  },

  computed: {
      getCartItem(){
        //   console.log(this.$store.state.auth.cart)
          return this.$store.state.auth.cartItems
      },
      cartTotal(){
          const cartItems = this.$store.state.auth.cartItems
          let total = 0
        //   let priceString = ''
          for(let i in cartItems){
            //   priceString = cartItems[i].price
            //   priceString = priceString.replace(/\D/,'');
              total = total + cartItems[i].price
              console.log(total)
          }
            return total
      }
  },
  methods:{
      createOrder(){
          this.form.cartItems = this.getCartItem
          console.log(this.form)
          createOrder(this.$store.state.auth.storeId,this.$store.state.auth.productId,this.form).then(data=>{
              this.$store.commit('setCartItem', '')
              localStorage.removeItem( 'cartItem' );
              console.log(data)
              })
      }
  },

  created() {
      showMe().then(data=>{
          console.log(data)
          this.form.userId = data.user.userId
          })
  }
};
</script>

<style scoped>
.cart-container{
    width:70%;
    display:flex;
    margin:0 auto;
    flex-direction: column;
}
.cart-detail-design{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.cart-design{
    border:1px solid grey;
    width:80%;
    height:300px;
    margin:30px 0;
    display: flex;
    /* justify-content: space-between; */
}
.cart-design .img{
    width:300px;
    height:298px;
}
.cart-design img{
    width:100%;
    height:100%;
}
.cart-design .detail{
     width:300px;
     margin:8px 20px;
}
.qnt{
    display:flex;
    margin:2px;
}
.qnt div{
    margin:8px;
}
.btn-style{
    border:1px solid grey;
    border-radius:50%;
    cursor: pointer;
}
.payment-design{
    border:1px solid grey;
    width:80%;
    padding:16px;
}
.payment-details{
    display: flex;
    justify-content: space-between;
}
@media screen and (max-width:1000px)
{
    .cart-container{
        width:90%;
    }
}
@media screen and (max-width:750px)
{
    .cart-design .img{
        width:320px;
        height:298px;
    }
    .cart-design{
         display:flex;
        flex-direction: column;
        width:322px;
        height:auto;
        border-radius:10px 10px 10px 10px;
    }
    .cart-design .img{
        border-radius:10px 10px 0 0;
    }
    .cart-design img{
        border-radius:10px 10px 0 0;
    }
    .payment-design{
        width:322px;
    }
}
</style>