<template>
 <header>
        
            <form action="/form/submit" method="GET" id="search">
              <input type="text" name="text" class="search" placeholder="Search here!">
              <input type="submit" name="submit" class="submit" value="Search">
            </form>
       
</header>
</template>
<script>
export default{
    name: "AppSearch"
}
</script>
<style csoped>
h1{
  color: #cae4ee;
  margin-left: 250px;
  padding-top: 1rem;
}
form#search {
      width: 400px;
       float: right;
       padding-bottom: 1rem;
       
        
      }
      #search input {
        padding: 4px 10px;
        font-size: 16px;
        border: 1px solid rgb(213, 194, 194);
        outline: 1px solid #fff;
        background-color: transparent;
        margin-top: 20px;
      }
      .search {
        width: 75%;
      }
      .submit {
        width: 70px;
        background-color: #1c87c9;
        color: #ffffff;
      }
      header{
        background-color: #303537;
        margin-top: 0;
        height: 10vh;
      }

/*For mobile*/
      @media (max-width: 600px) {
        header form {
          width: 330px;
          margin-top: -9px;
          padding-right: 20px;
        }
      }
/*For Computer*/
      @media (max-width: 1400px) {
        header form {
          width: 330px;
          margin-top: -9px !important;
          padding-right: 20px;
      }
    }
</style>