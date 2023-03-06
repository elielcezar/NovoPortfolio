<template>
  <section id="clientes">     
    <div class="container">
      <h3>{{ title }}</h3>
      <div v-html="body"></div>
      <carousel 
        v-if="logos.length"       
        :navigationEnabled="true"       
        :perPageCustom="[[0, 1], [460, 2], [768, 4]]" 
        :paginationEnabled="true" 
        :scrollPerPage="true">

        <slide v-for="logo in logos" :key="logo">                  
            <img :src="logo" alt="">            
        </slide>
        
      </carousel>      
    </div>
  </section>
  
</template>

<script> 

import axios from "axios";
import { Carousel, Slide } from 'vue-carousel';

import { randomId } from '@/custom/scripts';

export default {  
  components: {   
    Carousel,
    Slide,    
  },
  data(){
    return{
      title: null,
      body: null,
      logos: null,
      settings: {          
          arrows: true,
          dots: true,
        },
    }
 },
 methods: {
  getClientes(){
    axios.get('https://eliel.dev/admin/web/api/pagina/44').then(response => {      
      this.title = response.data[0].title;
      this.body = response.data[0].body;
      this.logos = response.data[0].field_imagens.split(",");
      console.log(this.logos);
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
  randomId()
  }
}
</script>

<style lang="scss" scoped>


#clientes{
  padding: 40px 0 60px 0;
  text-align: center;
  margin: 100px 0;
  width: 100%;  
  padding: 50px;  
  background: #f3f4f9;

  .VueCarousel{
    img{
      max-width: 125px;
    }
  }
}

</style>