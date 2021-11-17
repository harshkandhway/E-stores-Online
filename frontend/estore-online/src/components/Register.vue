<template>
  <div class="signup">
    <div class="signup-image">
      <router-link to="/login" class="heading">
        <input type="button" class="submit" value="Login!" />
      </router-link>
    </div>
    <div class="signup-form">
      <div class="form-heading">Sign Up</div>
      <form class="form" @submit.prevent="register">
        <label for="password">Name</label>
        <input
          type="text"
          name="text"
          placeholder="Name"
          class="input-style"
          v-model="formRegister.name"
        />
        <label for="Email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          class="input-style"
          v-model="formRegister.email"
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="input-style"
          v-model="formRegister.password"
        />
        <label for="password">Confirm Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="input-style"
          v-model="confirmPass"
        />
        <input type="submit" value="Sign Up" class="submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      formRegister: {
        name: "",
        email: "",
        password: ""
      },
      confirmPass: ""
    };
  },
  methods: {
    register() {
      if (this.formRegister.password != this.confirmPass) {
        this.$toast.open({
          message: "Password does not match",
          duration: 3000,
          type: "info"
        });
        return;
      }
      this.$store
        .dispatch("register", this.formRegister)
        .then(() => {
          this.$router.push({ name: "AppStore" });
        })
        .catch(error => {
          console.log(error);
          console.log("is auth", this.$store.getters.isAuthenticated);
        });
    }
  }
};
</script>

<style scoped>
.signup {
  width: 400px;
  /* height:600px; */
  margin: 40px auto;
  background-color: lightgoldenrodyellow;
  padding-bottom: 20px;
}
.signup-image {
  background: rgb(255, 209, 216);
  height: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.signup-image input {
  width: 100%;
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
@media screen and (max-width: 500px) {
  .signup {
    width: 80%;
    height: 80%;
  }
  .signup-image {
    width: 100%;
    height: 150px;
  }
}
</style>