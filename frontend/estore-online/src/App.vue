<template>
<div>
   <div v-if="this.$store.state.auth.role === 'customer' || !this.$store.getters.isAuthenticated">
    <AppNavbar/>
    <router-view></router-view>
   </div>

  <div v-if="(this.$store.state.auth.role === 'admin' || this.$store.state.auth.role === 'user') && this.$store.getters.isAuthenticated"><AdminNav/></div>
   <!-- <div v-if="this.$store.state.auth.role === 'user' && this.$store.getters.isAuthenticated"><AdminNav/></div> -->
   
   </div>

</template>

<script>

import AdminNav from '@/components/AdminDashboard/AdminNav'
import AppNavbar from '@/components/AppNavbar'
  export default{
    components:{
      AdminNav,
      AppNavbar
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
*{
    font-family: 'Montserrat', sans-serif;
    /* color:#33343b; */
}

.nav-icon{
  display: inline-flex;
  list-style-type: none;
  margin: 0 30px;
}

.nav-icon li{
  display: inline-flex;
  list-style-type: none;
  margin: 0 20px;
}
.store-name{
    margin:0px 16px;
    font-size:25px;
    padding:8px;
    border-radius:8px;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
     background: rgba(238, 174, 202, 0.226);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 0.5) 0%,
    rgba(148, 188, 233, 0.541) 100%
  );
}
.link-router{
  text-decoration: none;
}
.theme--light.v-btn.v-btn--icon{
  color:#33343b;
}

</style>