<template>
  <div id="main">
  
    <BlockTop />

    <BlockServicos />

    <ClientesLista />

    <PortfolioLista />
    
    <TecnologiasLista />               

    <ContactForm />

  </div><!-- main -->
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css';

import BlockTop from "@/components/BlockTop.vue";
import BlockServicos from "@/components/BlockServicos.vue";
import PortfolioLista from "@/components/PortfolioLista.vue";
import TecnologiasLista from "@/components/TecnologiasLista.vue";
import ClientesLista from "@/components/ClientesLista.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: 'HomeView',
  components: {
    BlockTop,
    BlockServicos,
    PortfolioLista,
    ClientesLista,
    TecnologiasLista,
    ContactForm
  },
  methods: {
    scrollToBottom() {
      this.$refs["portfolio"].scrollIntoView({ behavior: "smooth" })
    },
  },
  created(){
    
  },
  mounted() {
    AOS.init({
      once: false      
    })
  },
}
</script>

<style lang="scss">

section{  
  margin-bottom: 100px;
  h2 {
    text-transform: uppercase;
  }    
}

#main{
  .container{
    max-width: 1300px;    
    margin: auto;
  }
}
</style>
