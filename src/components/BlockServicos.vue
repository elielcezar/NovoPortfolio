<template>
    <section id="sobre">
      <div class="container">        
        <div class="row">
            <div class="title" data-aos="fade-right">
                <h3>Serviços</h3>
                <span>O que eu faço</span>
            </div>          
        </div>
        <div class="row">
          <div class="col-1">
            <div class="item"><i class="fa-solid fa-code"></i> <span><strong>Programação</strong><br/>de sites, blogs, landing pages e lojas virtuais</span> </div>
              <div class="item"><i class="fa-solid fa-screwdriver-wrench"></i> <span><strong>correção de problemas</strong><br/> análise técnica e plano de melhorias em sites desenvolvidos por terceiros</span></div>
          </div>
          <div class="col-2">            
              <div class="item"><i class="fa-brands fa-searchengin"></i><span><strong>S E O</strong><br/> melhoria de desempenho e posicionamento do seu site nos resultados do Google </span> </div>
              <div class="item"><i class="fa-brands fa-square-pied-piper"></i><span><strong>Criação</strong><br/> de logotipos e peças gráficas em geral</span> </div>            
          </div> 
        </div>
      </div>
    </section>
</template>

<script>

import axios from "axios";

export default {  
  components: {
   
  },
  data(){
    return{
      body: null,
      logos: null
    }
 },
 methods: {
  getTecnologias(){
    axios.get('https://eliel.dev/admin/web/api/pagina/43').then(response => {      
      this.title = response.data[0].title;
      this.body = response.data[0].body;      
      this.logos = response.data[0].field_imagens.split(",");      
    });
  }
 },
 created(){
  this.getTecnologias();
 }
}
</script>

<style lang="scss" scoped>
#sobre{
  padding: 100px 0; 
  background: $azul-petroleo;

  .title{
    width: 100%;      
    margin-bottom: 50px !important;
    @media(orientation:landscape){
      margin: 0;
    }

    &::after{
      width: 44%;
    }

    span{
      color: #fff;
    }
  }

  .container{
    max-width: 1260px;
  }
  
  .row{
    widows: 100%;   
    display: flex;

    @media(orientation: portrait){
      flex-direction: column;
    }

    .item{
        width: 100%;
        padding: 2% 0;          
        display: flex;
        margin-bottom: 40px;
        justify-content: flex-start;
        align-items: center;        
        color: #fff;
        line-height: 24px;

        @media(orientation:portrait){
          align-items: flex-start;
        }

        strong{
          text-transform: uppercase;
          font-size: 20px;
          font-weight: 600;
          color: $azul-claro;
        }

        i{
          font-size: 2.25em;
          display: inline-block;   
          margin-right: 20px; 
          color: $azul-escuro;   
          display: inline-block;
          padding: 15px 10px;
          background: #f5f5f5;  
          border-radius: 3px;  
          border: 2px solid #fff;
          min-width: 75px;      
          text-align: center;
        }      
      }
    .col-1{
      width: 40%;      
      margin-right: 10%;      
      align-items: center;
      justify-content: flex-start;

      @media(orientation:portrait){
        width: 100%;
        margin: 0;
      }        
      
    }
    .col-2{
      width: 40%;      
      margin-right: 10%;

      @media(orientation:portrait){
        width: 100%;        
      }
    }
  }
}
  
</style>