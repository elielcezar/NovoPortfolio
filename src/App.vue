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

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html{
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  color: #333;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

section{
  @media(orientation:portrait){
    padding: 7%;    
  }
  h3{
    font-size: 4.25em;
    line-height: 1em;
    letter-spacing: -1px;
    font-weight: 700;
    margin-bottom: 50px;

    @media(orientation:portrait){
      font-size: 42px;
    }
  }
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;  
}

li {
  margin: 0;
}

p {
  font-size: 16px;
  line-height: 26px;
}

a,
a:active,
a:visited {
  color: #333;
  text-decoration: none;
  outline: none !important;  
}

label {
  color: #666;
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
}

.form-item {
  width: 100%;
  margin: 0 0 20px 0; 
}

.form-item p {
  margin: 0;
}

img{
  max-width: 100%;
}

section{
  overflow-x: hidden;
}

.container{
  max-width: 1600px;
  margin: auto;
}


</style>
