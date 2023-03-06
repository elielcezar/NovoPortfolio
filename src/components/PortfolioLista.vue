<template>
  <section id="portfolio" ref="portfolio">
    <div class="container">
      <h3>Portfolio</h3>    
      <div class="itens">
        <div v-for="portfolio in portfolios" :key="portfolio.nid" class="item" data-aos="zoom-in">      
        <a :href="portfolio.field_link" target="_blank">
          <img :src="portfolio.field_image" alt="">
        </a>
        <a :href="portfolio.field_link" target="_blank">
          <h3>{{portfolio.title}}</h3>     
        </a>
        <div class="desc" v-html="portfolio.body"></div>
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
        text-align: center;         

        @media(orientation:portrait){
          width: 100%;
          margin-bottom: 40px;      
        }

        h3{
          margin: 10px 0 10px 0;
          font-size: 1.4em;
          line-height: 1em;
          font-weight: 700;          
          text-align: left;
        }    
        p{
          margin: 0;                    
          text-align: left !important;      
        }     
      }
    }
  }  
}
</style>