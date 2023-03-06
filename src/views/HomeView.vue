<template>
  <div id="main">
  
    <section id="top">
      <div class="container">
        <img src="@/assets/avatar.png" alt="" class="avatar">      
        <h2> Designer / Desenvolvedor Front End</h2>
        <p> Olá, meu nome é <strong>Eliel</strong> e trabalho há mais de 10 anos em agências de publicidade desenvolvendo sites institucionais, blogs e lojas virtuais.</p>
      </div>
    </section>

    <PortfolioLista />

    <section id="sobre">            
      <ClientesLista />   
      <TecnologiasLista /> 
    </section> 

    <ContactForm />

  </div><!-- main -->
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css';

import PortfolioLista from "@/components/PortfolioLista.vue";
import TecnologiasLista from "@/components/TecnologiasLista.vue";
import ClientesLista from "@/components/ClientesLista.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: 'HomeView',
  components: {
    PortfolioLista,
    ClientesLista,
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
      once: true      
    })
  },
}
</script>

<style lang="scss">

section{
  text-align: center;
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
  padding: 180px 0 0 0;
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
      font-size: 3.3em;
      line-height: 1em;             
      letter-spacing: -1px;
      text-transform: none;

      @media(orientation:portrait){
        font-size: 2.5em;
      }
    }

    p{
      font-size: 1.2em;
    }
}

#sobre{
  padding: 0;  
}


  
</style>
