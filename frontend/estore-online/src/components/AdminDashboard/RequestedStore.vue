<template>
  <div class="store-page">
    <div class="store-page-child">
      <h1 class="small-screen">Requested Store</h1>
      <hr />
      <div class="store-class">
        <div class="store-details" v-for="(store,index) in stores" :key="index">
          <!--  -->
          <div class="store-img">
            <img src />
          </div>
          <div class="store-information">
            <div class="store-name">
              <h4>{{store.name}}</h4>
            </div>
            <div class="modify-store-btn" v-if="role ==='admin'" @click="modifyStore(store._id)">
              <v-btn elevation="2" class="ma-4">Modify Store</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqStore } from "@/services/store";
export default {
  name: "RequestedStore",
  data() {
    return {
      stores: [],
      update: false,
      register: false
    };
  },
  methods: {
    modifyStore(storeId) {
      console.log(storeId);
      this.update = true;
      this.$store.commit("setStoreId", storeId);
      this.$router.push({
        name: "StoreForm",
        params: {
          storeId: storeId,
          update: this.update
        }
      });
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    role() {
      return this.$store.state.auth.role;
    }
  },
  created() {
    reqStore()
      .then(data => {
        this.stores = data.store;
        console.log(this.stores);
      })
      .catch(error => error);
  }
};
</script>

<style>
.store-img {
  background: lightgoldenrodyellow;
}
</style>