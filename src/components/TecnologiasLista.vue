<template>
    <section id="tecnologias">
    <div class="container">
      <div class="col-1" data-aos="fade-right">
        <h3>Especialidades</h3>
        <p>Para criar sites como os que você vê aqui, eu utilizo as seguintes linguagens, plataformas e frameworks como ferramentas no meu dia-a-dia como <strong>desenvolvedor front-end</strong>.</p>
      </div>
      <div class="col-2" data-aos="fade-left">
        <div class="logos">
          <div class="item" v-for="tecnologia in tecnologias" :key="tecnologia.nid">
              <img :src="tecnologia.field_image" alt="">            
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
        tecnologias: null
    }
 },
 methods: {
  getTecnologias(){
    axios.get('https://eliel.dev/admin/web/api/tecnologias').then(response => {      
      this.tecnologias = response.data;
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