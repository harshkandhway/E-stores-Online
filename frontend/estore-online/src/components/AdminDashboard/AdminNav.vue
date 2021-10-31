<template>
 <div v-if="(this.$store.state.auth.role === 'admin' || 'user') && this.$store.getters.isAuthenticated">
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :mobile-breakpoint="768"
      app
    >
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item to='/' v-if="this.$store.state.auth.role === 'admin'">
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to='/storemanage' v-if="this.$store.state.auth.role === 'admin'">
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Modify Store</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to='/productmanage' v-if="this.$store.state.auth.role === 'user'">
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Modify Product</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to='/requestedstore' v-if="this.$store.state.auth.role === 'admin'">
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Requested Stores</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to='/addproduct' v-if="this.$store.state.auth.role === 'user'">
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Add Product</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to='/store'>
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>All Registered Stores</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to='/registerstore'>
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Store Request</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item to='/store/product'>
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>All Registered Stores</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <v-list-item @click="logout()">
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item to='/store/product'>
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Modify Store</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="">
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Modify Store</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to='/products'>
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Modify Store</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
      prominent
      :src="image"
      absolute
      :height="$route.path==='/productmanage'?'450':($route.path==='/'?'80':'170')"
    >
    <!-- src="/uploads/6176cf504e0c23e527f580c1/nike.jpg" -->
      <template v-slot:img="{ props }" v-if="role==='user'||'admin'">
        <v-img
          v-bind="props"
        ></v-img>
      </template>
      
      <v-container class="pa-0 heading-style position" >
           <v-row>
              <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
                 <v-spacer></v-spacer>
          </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>  
  <!-- <StorePage v-if="false"/> -->
  </div>
</template>

<script>
  // import {logout} from '@/services/login'
  // import StorePage from '@/components/StorePage.vue';
  export default {
    name:'AdminNav',
    data(){
      return {
        drawer: false,
        // image: '/uploads/6176cf504e0c23e527f580c1/nike.jpg'
      }
    },
    computed:{
      image(){
        return this.$store.state.auth.storeImage
      
      },
      role(){
      return this.$store.state.auth.role;
      }
    },
    methods:{
      logout(){
          this.$store.dispatch('logout')
          .then(()=>{
            this.$router.push({name:'Login'})})
      }
    }
  }
</script>

<style>

.heading-style{
  max-width:none !important
}
.position{
  position: fixed !important;
}
.v-list--nav.v-list--dense .v-list-item{
  text-decoration: none;
}
</style>