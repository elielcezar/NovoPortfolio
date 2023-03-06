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
  padding: 10px 0 0 0;  
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 10;
  //border-bottom: 1px solid #ccc;  

  .logo{
    opacity: 0;
  }

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

  .progress-container {
    width: 100%;
    height: 2px;
    background: #f3f4f9;
  }

  .progress-bar {
    height: 2px;
    background: #156ed3;
    width: 0%;
    transition: all .1s;
  }
}
</style>
