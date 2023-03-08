<template>
  <header>
   <div class="container">
     <div class="logo">
      <router-link to="/">
        <img src="@/assets/elielcezar.png" alt="eliel cezar desenvolvedor front end">
      </router-link>
     </div>
      <nav>              
        <a href="#portfolio">Portfolio</a>        
        <a href="#sobre">Sobre</a>        
        <a href="#contato">Contato</a>
      </nav>
   </div>
   <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>  
  </header>  
</template>

<script>

export default {
  name: "TheHeader",
  data(){
    return{
     
    }
 },
methods:{
  progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
},
created () {
    window.addEventListener('scroll', this.progressBar);
  },
unmounted () {
  window.removeEventListener('scroll', this.progressBar);
}
}
</script>

<style lang="scss" scoped>
header { 
  padding: 0;  
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 10;    

  .logo{        
    padding: 15px 0 15px 15px;
    width: 180px;    
    img{
      max-width: 100%;      
    }
  }

  .container{
    display: flex;
    justify-content: space-between;  
    align-items: center;  
    max-width: 98%;  
    
      @media(orientation:portrait){
        justify-content: center;
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

  .progress-container {
    width: 100%;
    height: 3px;
    background: #f3f4f9;
  }

  .progress-bar {
    height: 3px;
    background: $azul-medio;
    width: 0%;
    transition: all .1s;
  }
}
</style>
