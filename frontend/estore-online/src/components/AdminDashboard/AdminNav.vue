<template>
 <div v-if="this.$store.state.auth.role === 'admin' || this.$store.getters.isAuthenticated">
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
        <v-list-item to='/storemanage'>
          <v-list-item-icon>
            <v-icon>mdi-format-list-checks</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Modify Store</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

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
      src=""
      prominent
      absolute
      :height="$route.path==='/storemanage/product'?'450':'170'"
    >
      <template v-slot:img="{ props }">
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
      }
    },
    methods:{
      logout(){
          this.$store.dispatch('logout')
          .then(()=>this.$router.push({name:'Login'}))
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