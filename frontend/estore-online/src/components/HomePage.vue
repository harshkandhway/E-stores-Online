<template>
  <div style="padding-bottom:150px">
    <div class="add_carousel">
      <div style="height:350px">
        <b-carousel
          id="carousel-fade"
          class="carousel"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          image-height="350"
          :interval="2000"
        >
          <b-carousel-slide
            v-for="image in stores"
            :key="image.imageUr"
          >
            <template v-slot:img>
              <img class="d-block class-name" :src="image.imageUrl" @click="seeProduct(image.products,image._id,image.imageUrl)"/>
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <div class="register-store">
      <router-link to="/register" class="heading">Register Your Store Now !!</router-link>
    </div>
    <!-- <div class="sale-banner">
      <img src />
      @/assets/salebanner.webp
    </div>
    <div class="discount-coupan">
      <div class="imgaxis">
        <img src />
        @/assets/axisbankdiscount.webp
      </div>
      <div class="imgkotak">
        <img src />
        @/assets/kotakbankdiscount.jpg
      </div>
    </div>-->
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import { store,getSingleStore } from "@/services/store";
export default {
  name: "HomePage",
  components: {
    AppFooter
  },
  data() {
    return {
      stores: []
    };
  },
  computed:{
      isAuthenticated(){
          return this.$store.getters.isAuthenticated;
      },
  },
  methods: {
     seeProduct(products,storeId, storeImage){
            // console.log(products);
            // console.log(storeId);
            if(this.$store.getters.isAuthenticated){
            getSingleStore(storeId).then(data=>{
                this.$store
        .commit('setAddress', data.store.address)
        this.$store
        .commit('setStoreEmail', data.store.storeEmail)
            this.$store
        .commit('setStoreId', storeId)
         this.$store
        .commit('setStoreImage', storeImage)
         this.$router.push({
                        name: 'AppProduct',
                        params: {
                            storeId: storeId
                        }
                    });
        })

           
        
        // console.log('vuex store',this.$store.state.auth.storeId)
     }
     else
      this.$router.push({name:'Login'}) 
        }

  },
  created() {
    store()
      .then(data => {
        // loader.hide()
        this.stores = data.store;
        // console.log("is auth", this.$store.getters.isAuthenticated);
        // console.log(this.stores);
      })
      .catch(error => error);
  }
};
</script>

<style scoped>
.class-name {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.add_carousel {
  height: 450px;
}

.carousel-inner {
  height: 450px;
}

/* .carousel {
  height: 350px;
} */

.carousel-item {
  height: 450px;
}

/* .carousel-item img {
  height: 350px;
} */

.add_carousel {
  margin: 0 auto;
}

.sale-banner {
  width: 100%;
}
.sale-banner img {
  width: 100%;
}

.discount-coupan {
  width: 100%;
  display: flex;
}
.imgaxis {
  flex-basis: 50%;
}
.imgkotak {
  flex-basis: 50%;
}
.discount-coupan img {
  width: 100%;
}
.register-store {
  width: 100%;
  height: 80px;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
.register-store .heading {
  /* text-decoration: none; */
  display: block;
  text-align: center;
  color: azure;
  padding-top: 25px;
  font-size: 26px;
  font-weight: 600;
}
</style>