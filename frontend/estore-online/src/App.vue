<template>
<div>
   <div>
    <v-app-bar
      class="nav-bar"
      elevate-on-scroll
      height="60"
    >
      <v-toolbar-title class="store-name">E-Stores Online</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn 
        class="link-router"
        to='/'
      icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn 
      class="link-router"
       to="/store"
      icon>
        <v-icon>mdi-store</v-icon>
      </v-btn>
        <v-btn 
        class="link-router"
        to="/login"
        icon>
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cards-playing-heart</v-icon>
      </v-btn>
    </v-app-bar>
   </div>
   <router-view></router-view>
   </div>
</template>

<script>

  export default{
    
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
*{
    font-family: 'Montserrat', sans-serif;
    /* color:#33343b; */
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