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

        <div v-if="logos.length">

        <VueSlickCarousel v-bind="settings">
            <template #prevArrow="arrowOption">
              <div class="custom-arrow">
                {{ arrowOption.currentSlide }}
              </div>
            </template>            
            <div v-for="logo in logos" :key="logo">                  
                <img :src="logo" alt="">            
            </div>     
            <template #nextArrow="arrowOption">
              <div class="custom-arrow">
                {{ arrowOption.currentSlide }}
              </div>
            </template>    
        </VueSlickCarousel>

      </div>
    

        </div>   
    </div>
  </section>
  
</template>

<script> 

import axios from "axios";
import { randomId } from '@/custom/scripts';

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {  
  components: {   
    VueSlickCarousel
  },
  data(){
    return{
      title: null,
      body: null,
      logos: null,
      settings: {         
        "dots": false,        
        "infinite": true,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "autoplay": true,
        "responsive": [                  
        {
            "breakpoint": 1360,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 1              
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 1              
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

  @media(orientation:portrait){
    padding: 0;
  }

  .container{
    display: flex;

    @media(orientation:portrait){
        flex-direction: column;
      }

    .col-1{
      width: 45%;
      margin-right: 5%;   

      .title{
        @media(orientation:portrait){
          margin-bottom: 20px;
        }
      }
      
      @media(orientation:portrait){
        width: 100%;
        margin-right: 0;
      }

      h3{
        margin-bottom: 0;
      }
    }
    .col-2{
      width: 50%; 

      @media(orientation:portrait){
        width: 100%;
      }

      .slick-initialized{
        padding: 0 50px;     
        @media(orientation:landscape){
          margin-top: 125px;
        }   
        .slick-slide > div > div{                  
            height: 100px;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0 10%; 

            img{
              max-width: 100px;
            }
        }

        .slick-next,
        .slick-prev{
          width: 30px;
          height: 30px;
          background-repeat: no-repeat;
          background-size: auto 100% !important;
          background-position: center;
          &::before{
            display: none;
          }
        }

        .slick-next {          
          right: 0;
          background-image: url(@/assets/arrow-right.png);
          
        }
        .slick-prev {         
          left: 0;          
          background-image: url(@/assets/arrow-left.png);
        }
      }      
    }    
  }
}

</style>