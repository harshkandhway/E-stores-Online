<template>
  <div>
    <div class="add_carousel">
      <div>
        <b-carousel
          id="carousel-fade"
          class="carousel"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width= 851
          img-height= 315
        >
          <b-carousel-slide img-src="@/assets/dominos.jpg">
          
          </b-carousel-slide>
          <b-carousel-slide img-src="@/assets/nike.jpg">
       
          </b-carousel-slide>
          <b-carousel-slide class="new_height" img-src="@/assets/mi.jpg">
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
    </div> -->
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "HomePage",
  components: {
    AppFooter
  }
};
</script>

<style scoped>
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