<template>
    <section id="contato">
      <div class="container">
        <div class="title">
            <h3>Contato</h3>
            <span>Vamos Conversar?</span>
        </div>
      <div class="row">         
        <div class="col-1">          
          <p class="convite">Eu sempre estou disponível para trabalhar como freelancer, então traga seu projeto e vamos tira-lo do papel!</p>
          <p><i class="fa-brands fa-square-whatsapp"></i> <span><a href="https://api.whatsapp.com/send?phone=5541999631609&amp;text=Olá, ..." class="wpp mobile" target="_blank">41 99963-1609</a></span></p>
          <p><i class="fa-solid fa-envelope"></i> <span><a href="mailto:elielcezar@gmail.com">elielcezar@gmail.com</a></span></p>
          <p><i class="fas fa-map-marker-alt"></i> <span>Curitiba - Brasil</span></p>
        </div>
        <div class="col-2">
          <div v-if="errors" class="erros">
            <p><strong>Por favor corrija o seguinte -></strong> </p>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
            
          </div>
          <form @submit.prevent="handleSubmit" v-if="!savingSuccessful">            
            <div class="form-item">
                <input type="text" v-model="name" class="nome" placeholder="Seu nome *"/>        
            </div>
            <div class="form-item">        
                <input type="email" v-model="email" class="email" placeholder="Seu email *"/>        
            </div>         
            <div class="form-item">        
                <textarea v-model="message" cols="30" rows="10" placeholder="Sua mensagem *"></textarea>
            </div>            

            <div v-if="loading" class="form-item">
              <div class="loading">
                <span>Enviando -> ...</span>
                <img src="@/assets/loading.gif" alt="">
              </div>           
            </div>
            <div v-else class="form-item">
              <button class="btn enviar">Enviar <i class="fa-solid fa-paper-plane"></i></button>
            </div>

        </form>
        
        
            <div class="success" v-if="savingSuccessful"> 
              <h3>Obrigado por entrar em contato!</h3>
              <p>Sua mensagem foi enviada com sucesso e será respondida o mais rápido possível 🙂</p>
          </div>
        
        
        </div>
      </div>
      </div>
    </section>
</template>

<script>
//import axios from "axios";

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
            errors: "",
            loading: false
        }
    },
    methods: {
        handleSubmit(){
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': 'Q_gNEmRFgcKzMc8b_Meqp4ATFS8VRbgPoezUAmcabPk'                
              },              
              body: '{"webform_id":"contact","name":"'+this.name+'","email":"'+this.email+'","message":"'+this.message+'"}'
            };

            if(this.name && this.email && this.message){
              this.loading = true;
              fetch('http://localhost:8080/admin/web/webform_rest/submit?api-key=22e4270419275992f36377939ac2e113', options)
              .then(response => response.json())
              .then(response => console.log(response))
              .catch(err => console.error(err));
              
              this.errors = false;                
              this.loading = false;                
              this.savingSuccessful = true;
                           
            }else{        
              this.errors = [];      
              if(!this.name){                
                this.errors.push("Informe o seu nome");
              }
              if(!this.email){
                this.errors.push("Informe o seu email");
              }
              if(!this.message){
                this.errors.push("Escreva a sua mensagem");
              }
            }              
          }                     
        }
}
</script>

<style lang="scss" scoped>

#contato{    
  padding: 100px 0;
  margin: 0;

  .container{
    max-width: 900px;
  }
  
.row{
  display: flex;
  max-width: 1200px;

  @media(orientation:portrait){
    flex-direction: column;
  }

  .col-1{
    flex: 40%;
    padding-right: 2.5%;
    @media(orientation:portrait){
      flex: 100%;
      padding: 0 0 20px 0;
    }

    p{
      display: flex;      
      font-weight: 400;      

      span{
        display: inline-block;
        min-height: 30px;        
        display: flex;
        align-items: center;
        max-width: 80%;
      }

      i{        
        font-size: 1.5em;
        margin-right: 10px;
        
        &.fa-square-whatsapp{
          font-size: 1.75em;
          color:#00b236;
        }
      }      
    } 
    p.convite{
      margin: 0 0 40px 0; 
    }
 
  }
  .col-2{
    flex: 60%;
    padding-left: 2.5%;
    position: relative;

    @media(orientation:portrait){
      flex: 100%;
      padding: 0;
    }

    form{
      .form-item{
        text-align: center;

        .btn.enviar{
          max-width: 250px;
          margin: auto;
          border-radius: 50px;
        }
      }     
    }

   .form-item:nth-child(1),
   .form-item:nth-child(2),
   .form-item:nth-child(3){
      margin: 0 0 20px 0;
      width: 100%;      
   }
  }
}

.erros{    
    width: 98%;    
    margin: 0 0 20px 2%;
    
    p{      
        color: red;
        margin-bottom: 5px;   
        margin-top: 0;   
    }

    ul{
      list-style-type:square;
      margin-left: 25px;
      font-weight: 300;
    }
  }
.loading{
  color: #fff;  
  padding: 15px 30px;    
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 800;    
  border-radius: 50px;
  width: 100%;
  background: $azul-escuro; 
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    max-width: 20px;
    margin: 0 0 0 10px;
  }
}

.success{
  text-align: center;
  background: #fff;
  border: 2px solid $azul-medio;
  border-radius: 25px;
  padding: 10%;
}

}
</style>