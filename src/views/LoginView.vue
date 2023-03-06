<template>
  <section class="login">
    
  </section>
</template>

<script>

import axios from "axios";

export default {
  name: "LoginView",
  components: {
    //LoginCriar
  },
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    logar() {
      const data ={
        "name": "admin",
        "pass": "#Tequila1#"
      };
      axios.post('https://eliel.dev/admin/web/user/login?_format=json', data)
      .then(
        res => {
          console.log(res);
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    }
  },  
  created(){
    //this.logar();
  }
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
