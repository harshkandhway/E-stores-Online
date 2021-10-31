<template>
  <div>
    <b-navbar toggleable="lg" variant="info" class="navbar">
      <b-navbar-brand href="#">E-stores Online</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/registerstore" v-if="this.$store.state.auth.role === 'customer' && isAuthenticated">Register your store</b-nav-item>
          <b-nav-item to="/store" v-if="isAuthenticated">Store</b-nav-item>
          <b-nav-item to="/login" v-if="!isAuthenticated">Sign In</b-nav-item>
          <b-nav-item @click="logout" v-if="isAuthenticated">Logout</b-nav-item>
          <b-nav-item to="/store/cart" v-if="isAuthenticated">Cart</b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import { logout } from "@/services/login";
export default {
  name: "AppNavbar",
  methods: {
    logout() {
     this.$store.dispatch('logout')
          .then(()=>this.$router.push({name:'Login'}))
    }
  },
  computed:{
      isAuthenticated(){
          return this.$store.getters.isAuthenticated;
      },
  }
};
</script>

<style scoped>
.bg-info {
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
</style>