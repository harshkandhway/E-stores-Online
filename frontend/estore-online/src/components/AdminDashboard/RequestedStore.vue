<template>
  <div class="store-page">
      <div class="store-page-child">
          <h1 class="small-screen">Requested Store</h1>
          <hr/>
          <div class="store-class">
              <div class="store-details" v-for="(store,index) in stores" :key="index">
                  <!--  -->
                 <div class="store-img">
                     <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/4e/41/1b/domino-s-pizza-brakpan.jpg">
                 </div>
               <div class="store-information">
                    <div class="store-name">
                        <h4>{{store.name}}</h4>
                    </div>
                    <div class="modify-store-btn" v-if="role ==='admin'" @click="modifyStore(store._id)">
                         <v-btn
                                elevation="2"
                                class="ma-4"
                            >
                             Modify Store
                            </v-btn>
                    </div>
                 </div>
              </div>
          </div>
      </div>
   </div>
</template>

<script>
// import AdminNav from '@/components/AdminDashboard/AdminNav'
import { reqStore } from "@/services/store";
export default {
  name: "RequestedStore",
  components: {
    //   AdminNav
  },
  data() {
    return {
      stores: [],
      update: false,
      register: false
    };
  },
  methods: {
    // seeProduct(products, storeId) {
    //   // console.log(products);
    //   // console.log(storeId);
    //   this.$store.commit("setStoreId", storeId);
    //   console.log("vuex store", this.$store.state.auth.storeId);
    //   this.$router.push({
    //     name: "AppProduct",
    //     params: {
    //       storeId: storeId
    //     }
    //   });
    // }
modifyStore(storeId){
  console.log(storeId)
  this.update = true
  this.$store
        .commit('setStoreId', storeId)
  this.$router.push({
    name:"StoreForm",
    params:{
      storeId:storeId,
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
            // let loader = this.$loading.show({loader:'dots'})
    reqStore()
      .then(data => {
        // loader.hide()
        this.stores = data.store;
        console.log(this.stores)
      })
      .catch(error => error);
  }
};
</script>

<style scoped>

</style>