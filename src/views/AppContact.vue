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
    background-image: url("https://th.bing.com/th/id/R.92ba26140c607eeebdad87be763e9a93?rik=DjKiXHK80XHeTQ&riu=http%3a%2f%2fwww.mindworks.cc%2fwp%2fwp-content%2fuploads%2f2016%2f10%2f25710867414_9a3d2acfcf_b.jpg&ehk=xikW%2bodh%2bfqZ6A%2f%2bMK297uJN1izKebfjdOxDNMhf3IQ%3d&risl=&pid=ImgRaw&r=0");
    background-repeat: no-repeat;
    background-size: cover;
}
    h2{
        color: #fff;
        padding: 3rem;
    }

   .contact h2 {
    margin-left: 0;
   } 
.contact input {
    width: 370px;
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
    width: 370px;
    height: 40px;
    border: 1px solid skyblue;
    background: rgb(47, 51, 53);
    color: #fff;
    cursor: pointer;
    border-radius: 15px;
}
 #msg{
    border: 1px solid skyblue;
    background: rgb(145, 151, 154);
    color: rgb(28, 24, 24);
    cursor: pointer;
    border-radius: 15px;
    height: 150px;
    width: 370px;
    
 }
 .contact textarea{
    text-align: center;
 }
  
</style>