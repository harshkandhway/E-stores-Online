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
    <ul class="nav-icon">
      <li><v-btn 
        class="link-router"
        to='/'
      icon>
        <v-icon>mdi-home</v-icon><span>Home</span>
      </v-btn></li>

      <li><v-btn 
      class="link-router"
       to="/store"
      icon>
        <v-icon>mdi-store</v-icon><span>Store</span>
      </v-btn></li>

      <li><v-btn 
        class="link-router"
        to="/login"
        icon>
        <v-icon>mdi-account-outline</v-icon><span>Login</span>
      </v-btn></li>

      <li><v-btn icon>
        <v-icon>mdi-cart</v-icon><span>Cart</span>
      </v-btn></li>

      <li><v-btn icon>
        <v-icon>mdi-cards-playing-heart</v-icon><span>Wishlist</span>
      </v-btn></li>
    </ul>
      
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