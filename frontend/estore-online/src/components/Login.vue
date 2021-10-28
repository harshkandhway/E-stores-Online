<template>
  <div class="signup">
    <div class="signup-image">
      <router-link to="/register" class="heading">
        <input type="button" class="submit" value="Register" />
      </router-link>
    </div>
    <div class="signup-form">
      <div class="form-heading">Sign In</div>
      <form class="form" @submit.prevent="login">
        <label for="Email">Email</label>
        <input type="email" name="email" placeholder="Email" class="input-style" v-model="formLogin.email"/>
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" class="input-style" v-model="formLogin.password"/>
        <input type="submit" value="Sign In" class="submit" style="margin-top: 40px"/>
      </form>
      <!-- <div class="forgot-password" v-if="!isAuthenticated">
        <span>Invalid login or password</span> 
      </div> -->
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';
// import {login} from '@/services/login'
export default {
  name: "Login",
  data() {
    return {
      formLogin: {
        email: "",
        password: ""
      }
    };
  },
    computed:{
        // isAuthenticated(){
        //     return this.$store.getters.isAuthenticated;
        // }
    },


  methods:{
      login(){
          this.$store
        .dispatch("login", this.formLogin)
        .then(() => {
          if(this.$store.state.auth.role==='customer')
            this.$router.push({ name: "AppStore" });
          else if(this.$store.state.auth.role==='admin')
            this.$router.push({ name: "StoreManagement" });
          else
            this.$router.push({ name: "ProductManagement" });
        })
        .catch(error => {
          console.log(error);
          
          console.log("is auth", this.$store.getters.isAuthenticated);
        });
      }
  },
};
</script>

<style scoped>
.signup {
  width: 400px;
  height: 600px;
  margin: 40px auto;
  background-color: lightgoldenrodyellow;
}
.signup-image {
  height: 200px;
  background: rgb(255, 209, 216);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.signup-image input {
  width: 100%;
  height: 100%;
}
.signup-form {
  width: 80%;
  margin: 20px auto;
}
.form-heading {
  color: #33343b;
  font-size: 20px;
  font-weight: 500;
}
.signup-form form {
  display: flex;
  flex-direction: column;
}
.form label {
  font-size: 18px;
  margin: 8px 0;
}
.input-style {
  border: 1px solid #33343b;
  padding: 8px;
  border-radius: 3px;
  background-color: white;
}
.submit {
  margin-top: 20px;
  background-color: goldenrod;
  font-size: 18px;
  padding: 8px;
  color: white;
  font-weight: 500;
}
.forgot-password {
  margin-top: 16px;
}
.forgot-password a {
  text-decoration: none;
  color: goldenrod;
  font-weight: 500;
}
@media screen and (max-width: 500px) {
  .signup {
    width: 300px;
    height: 500px;
  }
  .signup-image {
    width: 300px;
    height: 150px;
  }
}
</style>