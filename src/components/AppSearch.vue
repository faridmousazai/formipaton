<template>
 <header>
        <div >
            <form action="/form/submit" method="GET">
      <input type="text" name="text" class="search" placeholder="Search here!">
      <input type="submit" name="submit" class="submit" value="Search">
    </form>
    </div>
</header>
</template>
<script>
export default{
    name: "AppSearch"
}
</script>
<style csoped>
form {
        width: 400px;
        margin: auto;
       padding-bottom: 1rem;
        
      }
      input {
        padding: 4px 10px;
        font-size: 16px;
        border: solid black 1px;
        background-color: #cae4ee;
        border-radius:10px;
      }
      .search {
        width: 75%;
      }
      .submit {
        width: 70px;
        background-color: #1c87c9;
        color: #ffffff;
      }
</style>