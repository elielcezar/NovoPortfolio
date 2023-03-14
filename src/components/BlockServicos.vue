<template>
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
              <div class="item"><i class="fa-solid fa-code"></i><span><strong>Programação</strong> de sites e lojas virtuais</span> </div>
              <div class="item"><i class="fa-solid fa-screwdriver-wrench"></i><span>Análise técnica e <strong>correção de problemas</strong> em sites desenvolvidos por terceiros</span></div>
              <div class="item"><i class="fa-brands fa-searchengin"></i><span><strong>Melhoria</strong> de desempenho e posicionamento do seu site nos resultados do Google (SEO)</span> </div>
              <div class="item"><i class="fa-brands fa-square-pied-piper"></i><span><strong>Criação</strong> de logotipos e peças gráficas em geral</span> </div>
            </div>   
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

        &::after{
          width: 50%;
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