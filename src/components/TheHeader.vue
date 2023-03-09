<template>
  <header>
   <div class="container">    
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

  .container{
    display: flex;
    justify-content: space-between;  
    align-items: center;  
    max-width: 98%;  
    
      @media(orientation:portrait){
        justify-content: center;
      }

    nav{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media(orientation:portrait){
        //display: none;
      }
      a{
        padding: 10px 15px;
        display: inline-block;
        font-size: 1em;
        text-transform: uppercase;
        font-weight: bold; 
        color: $preto;         
      }
    }  
  }  

  .progress-container {
    width: 100%;
    height: 3px;
    background: #f3f4f9;
  }

  .progress-bar {
    height: 2px;
    //background: #ccc;
    //background: $azul-medio;
    background: -webkit-linear-gradient(315deg,#42aad3  25%,#647eff82);    
    width: 0%;
    transition: all .1s;
  }
}
</style>
