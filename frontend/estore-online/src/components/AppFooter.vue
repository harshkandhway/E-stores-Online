<template>
    <div class="footer">
        <div>
            <span>123 Fifth Avenue, NY 10160, New York, USA | Phone: 800-123-456 | Email: contact@example.com</span>
        </div>
        <div>
           <span>Copyright © 2021 Nike</span>
        </div>
    </div>
</template>

<script>
export default{
    name:'AppFooter'

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
    margin:auto;
}
.footer span{
    display: inline-block;
    padding:10px;
}
</style>