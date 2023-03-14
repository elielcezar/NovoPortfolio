<template>
  <div id="main">
  
    <section id="top">
      <div class="container">
        <img src="@/assets/avatar.png" alt="" class="avatar" data-aos="zoom-in">      
        <h2 data-aos="zoom-in"> elielcezar</h2>
        <p data-aos="zoom-in"> Olá, meu nome é <strong>Eliel</strong> e trabalho há 15 anos criando <strong>sites</strong>, <strong>lojas virtuais</strong> e outros <strong>materiais gráficos</strong> para clientes de todos os tamanhos e áreas de atuação.</p>
        <div class="social" data-aos="zoom-in">
          <a href="https://www.instagram.com/elielcezar/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://open.spotify.com/user/12186163514" target="_blank"><i class="fa-brands fa-spotify"></i></a>
          <a href="https://twitter.com/elielcezar" target="_blank"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://github.com/elielcezar" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="#" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>        
      </div>
    </section>

    <section id="sobre">
      <div class="container">
        
        <div class="row">
          <div class="col-1">
              <div class="title" data-aos="fade-right">
                <h3>Sobre</h3>
                <span>O que eu faço</span>
              </div>                       
          </div>

          <div class="col-2">

            <div class="itens"  data-aos="fade-left">
              <div class="item"><i class="fa-solid fa-code"></i><span>Programação de sites e lojas virtuais</span> </div>
              <div class="item"><i class="fa-solid fa-screwdriver-wrench"></i><span>Identificação e correção de problemas em sites já existentes</span></div>
              <div class="item"><i class="fa-brands fa-searchengin"></i><span>Melhoria de velocidade e posicionamento nos resultados do Google</span> </div>
              <div class="item"><i class="fa-brands fa-square-pied-piper"></i><span>Criação de logotipos e peças gráficas em geral</span> </div>
            </div>             

          </div> 
        </div>
      </div>
    </section>

    <PortfolioLista />
    
    <TecnologiasLista />           
    
    <!--ClientesLista /-->    

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
    max-width: 1300px;    
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
      text-shadow: 2px 2px 2px $azul-claro;
      text-transform: none;
      color: #333;

      @media(orientation:portrait){
        font-size: 3em;
        text-shadow: 1px 1px 1px $azul-claro;
        letter-spacing: -2px;  
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
      max-width: 500px;
      margin: 20px auto 0 auto;   
    }

    .social{
      padding: 50px 0;
      a{
        i{
          font-size: 2.25em;
          margin: 0 10px;

          @media(orientation:portrait){
            font-size: 1.5em;
          }
        }
      }
    }
}

#sobre{
  padding: 100px 0 0 0; 
  
  .row{
    display: flex;

    @media(orientation:portrait){
      flex-direction: column;
    }
    .col-1{
      width: 45%;      
      margin-right: 5%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      @media(orientation:portrait){
        width: 100%;
        margin: 0;
      }    

      .title{
        width: 100%;
        @media(orientation:landscape){
          margin: 0;
        }
      }
      
    }
    .col-2{
      width: 45%;      
      margin-right: 5%;

      @media(orientation:portrait){
        width: 100%;        
      }

      .itens{
        display: flex;        
        flex-wrap: wrap;
        .item{
          width: 100%;
          padding: 2% 0;          
          display: flex;
          justify-content: flex-start;
          align-items: center;

          i{
            font-size: 2.25em;
            display: inline-block;   
            margin-right: 20px; 
            color: $azul-medio;                    
          }      
        }
      }
    }
  }
}
  
</style>
