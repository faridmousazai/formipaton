<template>

  <body>
    <section>
      <h2>FARMIPATON</h2>
    </section>
  </body>
  <footer class="footer">
    <p>All rights reserved &copy; - 2022</p>
    <p><a href="contact.vue">Contact us</a></p>
  </footer>


</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-image: url("https://th.bing.com/th/id/R.f5d4728c1781b9402d63518c08d154ba?rik=CAv5%2bO6SFq2HJg&riu=http%3a%2f%2fwww.idesignhotel.com%2fwp-content%2fuploads%2f2014%2f06%2frestaurant-S10.jpg&ehk=g3gmPhKASNIcQa9FGTrH40rM812mo%2fxEYYbHw1n%2bGVk%3d&risl=&pid=ImgRaw&r=0");
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 1rem;
}

h2 {
  padding: 2rem;
  text-transform: uppercase;

  text-transform: uppercase;
  background-image: linear-gradient(-225deg,
      #1d66b5 0%,
      #155d5df2 29%,
      #b56c8c7d 67%,
      #a18e65 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  scrollbar-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 80px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}  

@media (max-width: 600px) {
  h2 {
    font-size: 50px;
  }
}

.footer{
  background-color: rgb(88, 86, 77);
  height: 10vh;
  border: solid black 1px;
  display: flex;
  justify-content: space-around;
  
}

.footer p {
  text-align: center;
  font-size: 1.3rem;
  padding-top: 1.5rem;
  color: #fff;
} 

.footer p a {
  text-decoration: none;
  color: #fff;
}

</style>
