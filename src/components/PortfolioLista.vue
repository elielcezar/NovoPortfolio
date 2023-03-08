<template>
  <section id="portfolio" ref="portfolio">
    <div class="container">
      <h3>Portfolio</h3>    
      <div class="itens">
        <div v-for="portfolio in portfolios" :key="portfolio.nid" class="item">      
        <div class="print" data-aos="zoom-in">
          <a :href="portfolio.field_link" target="_blank">
            <img :src="portfolio.field_image" alt="">
          </a>
        </div>
        <h3 data-aos="zoom-in">
          <a :href="portfolio.field_link" target="_blank">{{portfolio.title}}</a>
        </h3>     
        <div class="desc" data-aos="zoom-in">
          <p v-html="portfolio.body" ></p>
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

  .container{
    max-width: 1300px;   
    
    h3{
      margin: 0 0 60px 20px;      
    }

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
          margin-bottom: 40px;      
        }
        .print{
          text-align: center;
        }
        h3{
          margin: 10px 0 0 0;
          font-size: 1.75em;
          line-height: 1em;
          font-weight: 700;          
          text-align: left;
        }         
        .desc{
          text-align: left;          
          
          p{
            margin: 0;            
            line-height: 0em;                      
          }
        }
        
        &:nth-child(odd){
          img{
            margin-top: -30px;
          }
        }
        &:nth-child(even){
          img{
            margin-top: 30px;
          }
        }
      }
    }
  }  
}
</style>