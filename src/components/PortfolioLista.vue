<template>
  <section id="portfolio" ref="portfolio">
    <div class="container">
      <div class="title" data-aos="zoom-in">
          <h3>Portfolio</h3>
          <span>Trabalhos Recentes</span>
      </div> 
      <div class="itens">
        <div v-for="portfolio in portfolios" :key="portfolio.nid" class="item">      
        <div class="print" data-aos="zoom-in">
          <a :href="portfolio.field_link" target="_blank">
            <img :src="portfolio.field_image" alt="">
          </a>
        </div>
        <h3 data-aos="fade-right">
          <a :href="portfolio.field_link" target="_blank">{{portfolio.title}}</a>
        </h3>     
        <div class="desc" data-aos="fade-right">
          <i class="fa-solid fa-angles-right"></i><span>{{portfolio.field_descricao}}</span>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>

//import { api } from "@/services.js";
import axios from "axios";

export default {
 data(){
  return{
    portfolios: null,
  }
 }, 
 methods: {
  getPortfolios(){
    /*api.get("/portfolios").then(response => {      
      this.portfolios = response.data;
    });*/
    axios.get('https://eliel.dev/admin/web/api/portfolios').then(response => {      
      this.portfolios = response.data;
    });
  }  
 },
 created(){
  this.getPortfolios();
 }
}
</script>

<style lang="scss" scoped>

#portfolio{
  padding-top: 100px;  
  margin-bottom: 0;
  .container{
    max-width: 1300px;     

    .itens { 
      display: flex;
      flex-wrap: wrap;      

      @media(orientation:portrait){
        flex-direction: column;
      }
      .item{    
        width: 50%;
        padding: 2%;          

        @media(orientation:portrait){
          width: 100%;
          margin-bottom: 60px;      
        }
        .print{
          text-align: center;
        }
        h3{
          margin: 10px 0 5px 0;
          font-size: 1.5em;
          line-height: 1em;
          font-weight: 600;          
          text-align: left;  
          @media(orientation:portrait){
            margin-top: 0;
          }        
        }         
        .desc{
          text-align: left; 
          line-height: 1em;      

          i{
            margin: 4px 10px 0 0;
            font-size: .9em;
            color: $azul-medio;
          }
        }
        
        &:nth-child(odd){
          img{
            @media(orientation:landscape){
              margin-top: -30px;
            }
          }
        }
        &:nth-child(even){
          img{
            @media(orientation:landscape){
              margin-top: 30px;
            }
          }
        }

      }
    }
  }  
}
</style>