<template>
    <body>
    <h2> Contact Us</h2>
    <div class="contact">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="subject" v-model="subject" placeholder="Subject">
        <div class="message">
            <textarea name="message" id="msg" cols="30" rows="10">Your Message</textarea>
        </div>
        <button v-on:click="submit">Submit</button>
       
    </div>
</body>

</template>
<script>
    export default{
    name: "AppContact"
}
</script>
<style scoped>

body{
    background-color: rgb(129, 126, 121);
}
    h2{
        color: #fff;
        padding: 3rem;
    }

   .contact h2 {
    margin-left: 0;
   } 
.contact input {
    width: 320px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    border-radius: 15px;
}

.contact button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: rgb(88, 108, 115);
    color: #fff;
    cursor: pointer;
    border-radius: 15px;
}
 #msg{
    border: 1px solid skyblue;
    background: rgb(239, 243, 244);
    color: rgb(28, 24, 24);
    cursor: pointer;
    border-radius: 15px;
    height: 150px;
    width: 320px;
 }
 .contact textarea{
    text-align: center;
 }
  
</style>