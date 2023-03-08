<template>
    <section id="tecnologias">
    <div class="container">
      
      <div class="row row-1">

        <div class="title" data-aos="zoom-in">
            <h3>{{ title }}</h3>
            <span>Ferramentas de Trabalho</span>
        </div> 
        <div class="desc">
          <p v-html="body"></p>
        </div>

      </div>

      <div class="row row-2" data-aos="zoom-in">        
        <div class="logos">
          <div class="item" v-for="logo in logos" :key="logo">
              <img :src="logo" alt="">            
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

#tecnologias{
  margin-bottom: 0;
  .container{
    max-width: 1000px;

    .title{
      margin-bottom: 0;
    }
    
    .row{
      width: 100%;
      text-align: center;
      
      &.row-1{        
        .desc{
          max-width: 600px;
          margin: auto;
        }
      }

      &.row-2{ 
        .logos{
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;

          img{
            max-width: 80px;
            max-height: 45px;             
          }
        }
      }
    }

    /*.col-1{
      flex: 45%;
      margin-right: 10%;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media(orientation:portrait){
        flex: 100%;
        margin-right: 0;
        text-align: center;
      }

      h3{
        margin-bottom: 20px;
      }

      p{
        font-size: 16px;
      }
    }
    .col-2{
      flex: 45%;  
      
      @media(orientation:portrait){
        flex: 100%;
      }

      .logos{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        
        img{
          max-width: 130px;
          max-height: 50px;
          margin: 10px 20px;

          @media(orientation:portrait){
            max-width: 115px;
          }
        }
      }
    }*/
  }
}
    
</style>