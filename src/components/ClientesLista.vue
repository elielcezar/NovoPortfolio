<template>
  <section id="clientes">     
    <div class="container">
      <div class="col-1">
         <div class="title" data-aos="fade-right">
            <h3>Clientes</h3>
            <span>Parceiros</span>
          </div> 
        <div v-html="body"></div>
      </div>      
      <div class="col-2">

        <VueSlickCarousel v-if="logos.length" :autoplay="true" :slidesToShow="2" :responsive="{breakpoint: 780, slidesToShow: 1}">

           <template #prevArrow="arrowOption">
              <div class="custom-arrow">
                {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
              </div>
            </template>

            <template #nextArrow="arrowOption">
                <div class="custom-arrow">
                  {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                </div>
              </template>

          <div v-for="logo in logos" :key="logo">                  
              <img :src="logo" alt="">            
          </div> 

          <template #customPaging="page">
            <div class="custom-dot">
              {{ page }}
            </div>
          </template>
        </VueSlickCarousel>
    

        </div>   
    </div>
  </section>
  
</template>

<script> 

import axios from "axios";
//import { Carousel, Slide } from 'vue-carousel';
import { randomId } from '@/custom/scripts';

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {  
  components: {   
    VueSlickCarousel,
    //Carousel,
    //Slide,    
  },
  data(){
    return{
      title: null,
      body: null,
      logos: null,
      settings: {          
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [   
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1              
            }
          }
        ]
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
  margin: 100px 0;
  width: 100%;  
  padding: 50px;  
  //background: #f3f4f9;

  .container{
    display: flex;

    .col-1{
      width: 45%;
      margin-right: 5%;      

      h3{
        margin-bottom: 0;
      }
    }
    .col-2{
      width: 50%;    

      .slick-slider{        

        .slick-list{          
          .slick-slide {            
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }        
      }

      .slick-slide > div > div{          
          height: 20vw;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
      }

      .slick-slider{        
        .custom-arrow {              
          border-radius: 50%;
        }
      }
      
    }    
  }
}

</style>