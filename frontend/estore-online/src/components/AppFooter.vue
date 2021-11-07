<template>
    <footer class="footer">
        <div>
            <span>{{getAddress}} | Email: {{getEmail}}</span>
        </div>
        <div>
           <span>Copyright © 2021</span>
        </div>
    </footer>
</template>

<script>
export default{
    name:'AppFooter',

    computed:{
        getAddress(){
            return this.$store.state.auth.address;
        },
        getEmail(){
            return this.$store.state.auth.storeEmail;
        }
    },


    created(){
        
    }
}
</script>

<style scoped>
.footer{
    height:150px;
    background-color: #191919;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
  
    bottom: 0;
 
}

.footer span{
    display: inline-block;
    padding:10px;
}
</style>