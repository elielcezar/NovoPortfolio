<template>
    <section id="tecnologias">
    <div class="container">
      
      <div class="col-1" data-aos="fade-right">
        <h3>{{ title }}</h3>
        <div v-html="body"></div>
      </div>

      <div class="col-2" data-aos="fade-left">        
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
    display: flex;

    @media(orientation:portrait){
      flex-direction: column;
    }

    .col-1{
      flex: 45%;
      margin-right: 10%;
      text-align: left;

      @media(orientation:portrait){
        flex: 100%;
        margin-right: 0;
        text-align: center;
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
    }
  }
}
    
</style>