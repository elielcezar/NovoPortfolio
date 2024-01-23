<template>
    <section id="tecnologias">
    <div class="container">
      
      <div class="row">

        <div class="title" data-aos="zoom-in">
            <h3>{{ title }}</h3>
            <span>Especialidades</span>
        </div> 
        <div class="desc">
          <p v-html="body"></p>
        </div>

      </div>

      <div class="row">

        <div v-if="logos.length">

          <VueSlickCarousel v-bind="settings">
                <template #prevArrow="arrowOption">
                  <div class="custom-arrow">
                    {{ arrowOption.currentSlide }}
                  </div>
                </template>            
                <div v-for="logo in logos" :key="logo">                  
                    <div class="item">
                      <img :src="logo" alt="">            
                    </div>
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

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {  
  components: {   
    VueSlickCarousel
  },
  data(){
    return{
      body: null,
      logos: null,
      settings: {         
        "dots": false,        
        "infinite": true,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 3,
        "autoplay": true,
        "responsive": [                  
        {
            "breakpoint": 1360,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 2              
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2              
            }
          }
        ]
      },
    }
 },
 methods: {
  getTecnologias(){
    axios.get('http://localhost:8080/admin/web/api/pagina/43').then(response => {      
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
  padding: 100px 0;
  background: $azul-petroleo;
  text-align: center;
  margin-bottom: 0;
  .container{
    max-width: 900px;

    .title{
      margin-bottom: 0;

      h3{
        @media(orientation:portrait){
          font-size: 4.5em;
          line-height: .85em;
        }
      }

      span{
        color: #fff;
      }
    }

    p{
      color: #fff;
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
      
      .slick-slider{
        .item{          
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
          padding: 15px 0;
          text-align: center;
          background: #f5f5f5;
          border: 2px solid #fff;
          border-radius: 3px;

          @media(orientation:portrait){
            min-width: 100px;            
          }

          img{
            max-height: 70px;
            max-width: 90%;
          }
        }
      }
    }

  }
}
    
</style>