<template>
  <div>
    <div class="main-container">
      <div><h4>My Orders</h4></div>
      <div class="order-details-base" v-for="(order,index) in orders" :key="index">
        <div class="order-details" v-for="(cartItem,item) in order.cartItems" :key="item">
          <div class="img-class">
            <img :src="cartItem.imageUrl" />
          </div>
          <div class="details-class">
            <div style="font-size: 20px; text-align: center" class="mb-2">
              <div>{{cartItem.productName}}</div>
            </div>
            <div class="mb-1 set-flex">
              <div>Rs.</div>
              <div>{{cartItem.price}}</div>
            </div>
            <div class="set-flex mb-1">
              <div class="mr-4">Id:</div>
              <div>{{cartItem._id}}</div>
            </div>
            <div class="set-flex mb-1">
              <div class="mr-4">Ordered on:</div>
              <div>{{order.createdAt.slice(0,10)}}</div>
            </div>
            <div class="set-flex mb-1">
              <div class="mr-4">Last Update:</div>
              <div>{{order.updatedAt.slice(0,10)}}</div>
            </div>
            <div class="mb-1 set-flex">
              <label for="status" class="mr-4 mt-2"> STATUS : </label>
              <!-- <div class="select">
                <select id="status">
                  <option value="Pending">Pending</option>
                  <option value="Failed">Failed</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="paid">Paid</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div> -->
              <span>{{order.status}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMyOrders } from "@/services/order.js";
// import moment from 'moment'
export default {
  name: "MyOrders",
  data() {
    return {
      orders: [],
    //   createdDate: ,
    //   updatedDate: moment().format('MMMM Do YYYY, h:mm:ss a')
    };
  },

//   computed:{
//       created(){
//           let date = moment(this.createdDate).format('MMMM Do YYYY, h:mm:ss a')
//           return date
//       }
//   },
  created() {
    getMyOrders().then((data) => {
      this.orders = data.currentOrder;
      console.log(this.orders);
    });
  },
};
</script>

<style scoped>
* {
  color: #33343b;
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
}
.order-details-base {
  display: flex;
  margin: 20px 80px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.order-details {
  border: 1px solid grey;
  margin: 20px;
  /* padding:16px 8px; */
  width: 300px;
  height: auto;
  display: flex;
  border-radius: 3px;
  flex-direction: column;
}
.img-class {
  width: 300px;
  height: 200px;
}
img {
  width: 100%;
  height: 100%;
}
.details-class {
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
}
.set-flex {
  display: flex;
  justify-content: space-between;
}
.select {
  -moz-appearance: inherit;
  border: 1px solid grey;
  text-align: center;
  border-radius: 3px;
  background-color: goldenrod;
  padding: 6px;
}
select {
  -webkit-appearance: menulist;
  outline: none;
}
select:hover {
  outline: none;
}
</style>