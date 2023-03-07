<template>
  <div id="main">
  
    <section id="top">
      <div class="container">
        <img src="@/assets/avatar.png" alt="" class="avatar" data-aos="zoom-in">      
        <h2 data-aos="zoom-in"> eliel<strong>cezar</strong></h2>
        <p data-aos="zoom-in"> Olá, meu nome é <strong>Eliel</strong> e trabalho há 15 anos como <strong>designer</strong> e <strong>desenvolvedor front end</strong></p>
        <div class="social" data-aos="zoom-in">
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-spotify"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-github"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>        
      </div>
    </section>

    <PortfolioLista />

    <section id="sobre">  
      <TecnologiasLista />           
      <!--ClientesLista /-->
    </section> 

    <ContactForm />

  </div><!-- main -->
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css';

import PortfolioLista from "@/components/PortfolioLista.vue";
import TecnologiasLista from "@/components/TecnologiasLista.vue";
//import ClientesLista from "@/components/ClientesLista.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: 'HomeView',
  components: {
    PortfolioLista,
    //ClientesLista,
    TecnologiasLista,
    ContactForm
  },
  methods: {
    scrollToBottom() {
      this.$refs["portfolio"].scrollIntoView({ behavior: "smooth" })
    },
  },
  created(){
    
  },
  mounted() {
    AOS.init({
      once: false      
    })
  },
}
</script>

<style lang="scss">

section{  
  margin-bottom: 100px;
  h2 {
    text-transform: uppercase;
  }    
}

#main{
  .container{
    max-width: 1200px;    
    margin: auto;
  }
}

#top{
  padding: 20vh 0 0 0;
  margin-bottom: 25px;

  @media(orientation:portrait){
    padding: 170px 7% 0 7%;
    margin-bottom: 70px;
  }

  .container{
    text-align: center;
    max-width: 700px;
  }

    .avatar{
      max-width: 200px;
      @media(orientation:portrait){
        max-width: 125px;
      }
    }

    h2{
      font-size: 5em;
      line-height: 1em;             
      letter-spacing: -3px;      
      font-weight: 800;
      transition: all .3s;
      text-shadow: 1px 1px 1px $azul-claro;
      text-transform: none;

      @media(orientation:portrait){
        font-size: 2.5em;
      }
    }

    h2:hover{
      background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all .3s;      
      text-shadow: none;    
    }

    p{
      font-size: 1.4em;
      max-width: 500px;
      margin: 20px auto 0 auto;   
    }

    .social{
      padding: 50px 0;
      a{
        &:hover{
          color: $roxo;
        }

        i{
          font-size: 2.25em;
          margin: 0 10px;
        }
      }
    }
}

#sobre{
  padding: 0;  
}
  
</style>
