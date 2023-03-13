<template>
    <section id="tecnologias">
    <div class="container">
      
      <div class="row row-1">

        <div class="title" data-aos="zoom-in">
            <h3>{{ title }}</h3>
            <span>Especialidades</span>
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
  margin-bottom: 100px;
  .container{
    //max-width: 1000px;

    .title{
      margin-bottom: 0;

      h3{
        @media(orientation:portrait){
          font-size: 4.5em;
          line-height: .85em;
        }
      }
    }
    
    .row{
      width: 100%;
      //text-align: center;
      
      &.row-1{        
        .desc{
          max-width: 100%;
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

          @media(orientation:portrait){
            justify-content: center;
          }

          .item{
            @media(orientation:portrait){
              margin: 4%;
            }
            img{
              max-width: 80px;
              max-height: 45px;
            }
          }          
        }
      }
    }

  }
}
    
</style>