<template>
  <header>
   <div class="container">       

    <MenuBtn />
    
    <MainMenu />

   
   </div>
   <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>  
  </header>  
</template>

<script>

import MenuBtn from "@/components/MenuBtn.vue";
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: "TheHeader",
  components: {
    MenuBtn,
    MainMenu    
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
  background:  $azul-petroleo;
  z-index: 10;      

  .container{
    display: flex;
    justify-content: space-between;  
    align-items: center;  
    max-width: 98%;  
    
      @media(orientation:portrait){
        justify-content: center;
      }    
  }
  .progress-container {
    width: 100%;
    height: 4px;
    //background: #f3f4f9;
    background: transparent;
    border-bottom: 1px solid #fff;
  }
  .progress-bar {
    height: 4px;    
    background: -webkit-linear-gradient(315deg,#1f8dfa  25%,#0d54b9);    
    width: 0%;
    transition: all .1s;
  }
}
</style>
