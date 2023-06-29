<template>
  <section id="clientes">     
    <div class="container">

        <div class="title" data-aos="fade-right">
            <h3>Clientes</h3>
            <span>Parceiros</span>
        </div> 

        <div class="row">
          <div v-html="body" class="body"></div>        
        </div>

        <div class="row">
          <div class="itens" v-if="logos.length">
            <div class="item" v-for="logo in logos" :key="logo" data-aos="zoom-in">                  
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
    //VueSlickCarousel
  },
  data(){
    return{
      title: null,
      body: null,
      logos: null      
    }
 },
 methods: {
  getClientes(){
    axios.get('https://eliel.dev/admin/web/api/pagina/44').then(response => {      
      this.title = response.data[0].title;
      this.body = response.data[0].body;
      this.logos = response.data[0].field_imagens.split(",");
      //console.log(this.logos);
    });
    
  },
  onInitCarousel() {
        console.log('our carousel is ready')
      },
 },
 created(){
  this.getClientes();  
 },
 mounted() {
  
  }
}
</script>

<style lang="scss" scoped>

#clientes{
  padding: 40px 0 60px 0;  
  margin: 100px 0;
  width: 100%;  
  padding: 50px;   
  text-align: center; 

  @media(orientation:portrait){
    padding: 0;
  }
  
  .body{
    max-width: 600px;
    margin: 45px auto 0 auto;    
  }

  .title{
    margin-bottom: 0;
  }
  .itens{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 50px;

    .item{
      width: 25%;      
      display: flex;      
      align-items: center;
      justify-content: center;
      margin: 40px 0;

      @media(orientation:portrait){
          width: 50%;
          margin-bottom: 70px;
      }

      img{
        max-width: 200px;
        max-height: 100px;

        @media(orientation:portrait){          
          max-width: 80%;
        }
      }
    }
  }

}

</style>