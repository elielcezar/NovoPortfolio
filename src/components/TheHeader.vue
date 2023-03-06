<template>
  <header>
   <div class="container">
     <router-link to="/">
        <img src="@/assets/elielcezar.png" alt="" class="logo">
      </router-link>
      <nav>              
        <a href="#portfolio">Portfolio</a>        
        <a href="#sobre">Sobre</a>        
        <a href="#contato">Contato</a>
      </nav>
   </div>
  </header>
</template>

<script>

export default {
  name: "TheHeader"
}
</script>

<style lang="scss" scoped>
header { 
  padding: 10px 20px;  
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 10;
  border-bottom: 1px solid #ccc;

  .container{
    display: flex;
    justify-content: space-between;  
    align-items: center;
    
      @media(orientation:portrait){
        justify-content: center;
      }

    img.logo{
      @media(orientation:portrait){
        max-width: 160px;
      }
    }

    nav{
      @media(orientation:portrait){
        display: none;
      }
      a{
        padding: 7px 15px;
        display: inline-block;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: bold;          
      }
    }  
  }  
}
</style>
