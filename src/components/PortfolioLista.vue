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

.itens { 
  display: flex;
  flex-wrap: wrap;

  @media(orientation:portrait){
    flex-direction: column;
  }
  .item{    
    width: 33.3%;
    padding: 2%;
    text-align: left; 
    border: 1px solid blue;
    
    @media(orientation:portrait){
      width: 100%;
      margin-bottom: 40px;
    }

    h3{
      margin: 10px 0 10px 0;
      font-size: 1.4em;
      line-height: 1em;
      font-weight: 700;    
      
      border: 1px solid;
    }
    .desc{
      border: 1px solid;
      background: red;
        p{
          margin: 0;
          background: red;     
          border: 2px solid blue;     
          color: #fff !important;
        }
     }  
  }
}
</style>