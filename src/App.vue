<template>
  <div id="app">
    <TheHeader />       
    <router-view/>
    <TheFooter />
  </div>
</template>

<script>

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default{
  components: {
      TheHeader,
      TheFooter
    }  
}
</script>
