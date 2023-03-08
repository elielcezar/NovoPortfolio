<template>
    <section id="contato">
      <div class="container">
        <div class="col-1">
          <h3>Vamos trabalhar juntos?</h3>
          <p>Eu sempre estou disponível para trabalhar como freelancer, então traga seu projeto e vamos tira-lo do papel!</p>
          <p><i class="fa-brands fa-square-whatsapp"></i> <span><a href="https://api.whatsapp.com/send?phone=5541999631609&amp;text=Olá, ..." class="wpp mobile" target="_blank">41 99963-1609</a></span></p>
          <p><i class="fa-solid fa-envelope"></i> <span>elielcezar@gmail.com</span></p>
          <p><i class="fas fa-map-marker-alt"></i> <span>Curitiba - Brasil</span></p>
        </div>
        <div class="col-2">
          <p v-if="errors" class="erros">
              <b>Por favor corrija os seguintes erros:</b>
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </p>
          <form @submit.prevent="handleSubmit" v-if="!savingSuccessful">            
            <div class="form-item">
                <input type="text" v-model="name" class="nome" placeholder="Seu nome *"/>        
            </div>
            <div class="form-item">        
                <input type="email" v-model="email" class="email" placeholder="Seu email *"/>        
            </div>
            <!--div class="form-item">        
                <input type="text" v-model="subject" class="form-item assunto" placeholder="Assunto"/>        
            </div-->
            <div class="form-item">        
                <textarea v-model="message" cols="30" rows="10" placeholder="Sua mensagem *"></textarea>
            </div>            
            <button class="btn enviar">Enviar <i class="fa-solid fa-right-long"></i></button>
        </form>
        <div class="success" v-if="savingSuccessful"> 
            <h3>Obrigado por entrar em contato!</h3>
            <p>Sua mensagem foi enviada com sucesso e será respondida o mais rápido possível 🙂</p>
        </div>
        </div>
      </div>
    </section>
</template>

<script>
import axios from "axios";

export default{
    name: 'ContactForm',
    data(){
        return{
            "name": "",
            "email": "",
            "subject": "",
            "message": "",
            savingSuccessful: false,
            status: null,
            errors: ""
        }
    },
    methods: {
        handleSubmit(){

            const dados = {
                webform_id: "contact",
                name: this.name,
                email: this.email,
                subject: "Contato pelo site",
                message: this.message
            };
            if(this.name && this.email && this.message){
              axios.post('https://eliel.dev/admin/web/webform_rest/submit?api-key=22e4270419275992f36377939ac2e113', dados).then( res => {
                console.log(res);
                this.savingSuccessful = true
              }).catch( err => {
                  console.log(err);                
              });  
            }else{        
              this.errors = [];      
              if(!this.name){                
                this.errors.push("Informe o seu nome.");
              }
              if(!this.email){
                this.errors.push("Informe o seu email.");
              }
              if(!this.message){
                this.errors.push("Escreva a sua mensagem.");
              }
                //e.preventDefault();
            }              
          }                     
        }
}
</script>

<style lang="scss" scoped>

#contato{
  background: #f5f5f5;
  //color: #fff;
  padding: 100px 0;
  margin: 0;
  //border-top: 4px solid $roxo;

  
.container{
  display: flex;
  max-width: 1200px;

  @media(orientation:portrait){
    flex-direction: column;
  }

  .col-1{
    flex: 45%;
    margin-right: 5%;
    @media(orientation:portrait){
      flex: 100%;
      margin: 0;
    }

    h3{
      margin-bottom: 25px;
    }

    a{      
      font-weight: bold;
      text-decoration: underline;
    }

    i{
      font-size: 2em;
      font-size: 1.75em;
      margin-right: 10px;
      color: $roxo;

      &.fa-square-whatsapp{
        font-size: 2em;
        color:#00b236;
      }
    }
 
  }
  .col-2{
    flex: 45%;
    margin-left: 5%;

    @media(orientation:portrait){
      flex: 100%;
      margin: 0;
    }
  }
}

.erros{
    border: 1px solid #fff;
    width: 98%;
    padding: 2% 4%;
    margin: 0 0 20px 2%;    

    ul{
      list-style-type:square;
      margin-left: 25px;
      font-weight: 300;
    }
  }

form {
  display: flex;
  flex-wrap: wrap;

  input{
    width: 100%;
  }

  .form-item:nth-child(1) {
    width: 48%;
    margin: 0 2% 15px 0;
  }

  .form-item:nth-child(2) {
    width: 48%;
    margin: 0 0 20px 2%;
  }
  .form-item:nth-child(3) {
    width: 100%;
    margin: 20px 0;
  }
  .form-item.textarea {
    width: 100%;
    margin: 0 0 0 0;
  }

  input[type="submit"] {    

    &:hover {
      background: #000;
    }
  }
}

input[type='text'],
input[type='email'],
input[type='password'],
input[type='tel'],
textarea,
select {
  width: 100%;
  background: #fafafa;
  margin-bottom: 10px;
  font-size: 16px;
  outline: none !important;
  box-sizing: border-box;
  border: none;
  border-width: 1px 1px 2px 1px;
  border-radius: 25px;
  padding: 15px 20px;
  margin: 0 5px;  
  font-family: 'Raleway', sans-serif;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid $azul-claro;

  @media (max-width: 767px) {
    padding: 5%;
    width: 100%;
    margin: 0;
  }
}

button,
input[type='submit'] {
  color: #fff;  
  padding: 15px 30px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 800;
  outline: none !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  border-radius: 50px;
  width: 100%;
  background: $azul-claro;
  transition: all .3s;

  &:hover {    
    background: $azul-medio;
  }
}

#contato{
  .success{
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: #333;
    background: #fff;
    border-radius: 5px;
    padding: 25px;

    h3{
      font-size: 2em;
    }
  }
}

}
</style>