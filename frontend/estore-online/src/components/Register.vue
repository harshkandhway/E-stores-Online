<template>
    <div class="signup">
        <div class="signup-image">
            <router-link to="/login" class="heading"><input type='button' class="submit" value="Already have an account? Login!"></router-link>
        </div>
        <div class="signup-form">
            <div class="form-heading">
                Sign Up
            </div>
            <form class="form">
                <label for="Email">Email</label>
                <input type="email" name="email" placeholder="Email" class="input-style">
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Password" class="input-style">
                <label for="password">Confirm Password</label>
                <input type="password" name="password" placeholder="Confirm Password" class="input-style">
                <input type="submit" value="Sign Up" class="submit">
            </form>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Register'

}
</script>

<style scoped>
.signup{
    width:400px;
    height:600px;
    margin:40px auto;
    background-color: lightgoldenrodyellow;
    
}
.signup-image{
    
    background: rgb(255, 209, 216);
    height:200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width:100%;
}
.signup-image input{
    width:100%;
}
.signup-form{
    width:80%;
    margin:20px auto;
}
.form-heading{
     color:#33343b;
     font-size:20px;
     font-weight:500;
}
.signup-form form{
    display:flex;
    flex-direction:column;
}
.form label{
    font-size:18px;
    margin:8px 0;
}
.input-style{
    border:1px solid #33343b;
    padding:8px;
    border-radius:3px;
    background-color: white;
}
.submit{
    margin-top:20px;
    background-color:goldenrod;
    font-size:18px;
    padding:8px;
    color:white;
    font-weight:500;
}
@media screen and (max-width:500px)
{
    .signup{
        width:300px;
        height:500px;
    }
    .signup-image{
        width:300px;
        height:150px;
    }
}
</style>