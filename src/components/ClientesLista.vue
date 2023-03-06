<template>
  <section id="clientes">     
    <div class="container">
      <p>Já tive a oportunidade de trabalhar com grandes marcas como:</p>
      <carousel 
        v-if="clientes.length"       
        :navigationEnabled="true"       
        :perPageCustom="[[0, 1], [460, 2], [768, 4]]" 
        :paginationEnabled="true" 
        :scrollPerPage="true">

        <slide v-for="cliente in clientes" :key="cliente.nid">                  
            <img :src="cliente.field_image" alt="">            
        </slide>
        
      </carousel>

    </div>
  </section>
  
</template>

<script> 

import axios from "axios";
import { Carousel, Slide } from 'vue-carousel';

export default {  
  components: {   
    Carousel,
    Slide
  },
  data(){
    return{
      settings: {          
          arrows: true,
          dots: true,
        },
      clientes: null
    }
 },
 methods: {
  getClientes(){
    axios.get('https://eliel.dev/admin/web/api/clientes').then(response => {      
      this.clientes = response.data;
    });
  },
  onInitCarousel() {
        console.log('our carousel is ready')
      },
 },
 created(){
  this.getClientes();  
 }
}
</script>

<style lang="scss" scoped>

#clientes{
  width: 100%;
  border: 2px solid blue;
  padding: 50px;

  .VueCarousel{
    img{
      max-width: 125px;
    }
  }
}

</style>