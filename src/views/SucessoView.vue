<template>
  <div class="container">    
    <div v-for="content in contents" :key="content.nid" class="item">               
      <h2>{{content.title}}</h2>         
       <p v-html="content.body"></p>
    </div>
    
    <div class="contato">
      <ContactForm />
    </div>

  </div>
</template>

<script>

import { api } from "@/services.js";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: 'SobreView',
  components:{
    ContactForm
  },
 data(){
  return{
    contents: null,
  }
 }, 
 methods: {
  getContents(){
    api.get("/sobre").then(response => {      
      this.contents = response.data;
    });
  }
 },
 created(){
  this.getContents();
 },
 mounted () {
  document.body.classList.add('bg-light')
},
destroyed () {
  document.body.classList.remove('bg-light')
}
}
</script>

<style lang="sass" scoped>
.container
  max-width: 1200px
</style>