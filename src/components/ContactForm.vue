<template>
    <div id="contato" data-aos="zoom-in">
      <div class="container">
        <form @submit.prevent="handleSubmit" v-if="!savingSuccessful">
        <div class="form-item">
            <input type="text" v-model="name" class="form-item nome" placeholder="Nome"/>        
        </div>
        <div class="form-item">        
            <input type="email" v-model="email" class="form-item email" placeholder="Email"/>        
        </div>
        <div class="form-item">        
            <input type="text" v-model="subject" class="form-item assunto" placeholder="Assunto"/>        
        </div>
        <div class="form-item">        
            <textarea v-model="message" cols="30" rows="10"></textarea>
        </div>
        <button class="btn enviar">Enviar</button>
    </form>
    <div class="success" v-if="savingSuccessful"> 
        <h3>Obrigado por entrar em ccontato!</h3>
        <p>Sua mensagem foi enviada com sucesso e será respondida o mais rápido possível 🙂</p>
    </div>
      </div>
    </div>
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
            savingSuccessful: false
        }
    },
    methods: {
        handleSubmit(){
            const dados = {
                webform_id: "contact",
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message
            };
            axios.post('https://eliel.dev/admin/web/webform_rest/submit?api-key=22e4270419275992f36377939ac2e113', dados).then( res => {
                console.log(res);
                this.savingSuccessful = true
            }).catch( err => {
                console.log(err)
            });
            /*this.$router.push("/sucesso");*/
        }        
    },
    created(){

    }
}
</script>

<style lang="scss" scoped>

#contato{
  background: #001132;
  color: #fff;
  padding: 100px 0;
}

form {
  display: flex;
  flex-wrap: wrap;

  .form-item:nth-child(even) {
    width: 48%;
    margin: 0 2% 15px 0;
  }

  .form-item:nth-child(odd) {
    width: 48%;
    margin: 0 0 20px 2%;
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

  .wpcf7-not-valid-tip {
    color: #fff;
    padding: 5px 10px;
  }

  .wpcf7-response-output {
    background: #000;
    border: 2px solid #000;
    color: #fff;
    padding: 5px 10px;
    font-weight: bold;
  }

  form.sent.wpcf7-response-output {
    background: #46b450;
    color: #fff;
    padding: 5px 10px;
    font-weight: bold;
    margin: 0;
    width: 100%;
    text-align: center;
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
  border: 1px solid #e0e0e0;
  border-width: 1px 1px 2px 1px;
  border-radius: 5px;
  padding: 12px 15px;
  margin: 0 5px;  
  font-family: 'Raleway', sans-serif;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

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
  border-radius: 5px;

  &:hover {    
    color: #fff;
  }
}

#contato{
  .success{
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3{
      font-size: 2em;
    }
  }
}

</style>