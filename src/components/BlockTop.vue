<template>
    <section id="top">
      <div class="container">
        <div class="row">
          <div class="col-1">
            <img src="@/assets/avatar.png" alt="" class="avatar" data-aos="zoom-in">                  
          </div>
          <div class="col-2">
            <h1 data-aos="zoom-in"> Olá,<br/>meu nome é <strong>Eliel</strong></h1>
            <p>e trabalho há 15 anos criando <strong>sites</strong>, <strong>lojas virtuais</strong> e outros <strong>materiais gráficos</strong> para clientes de todos os tamanhos e áreas de atuação.</p>
            <div class="social" data-aos="zoom-in">
              <a href="https://www.instagram.com/elielcezar/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://open.spotify.com/user/12186163514" target="_blank"><i class="fa-brands fa-spotify"></i></a>
              <a href="https://twitter.com/elielcezar" target="_blank"><i class="fa-brands fa-twitter"></i></a>
              <a href="https://github.com/elielcezar" target="_blank"><i class="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/elielcezar/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>  
          </div>
        </div>        
      </div>
    </section>
</template>

<script>

import axios from "axios";

export default {  
  components: {
   
  },
  data(){
    return{
      body: null,
      logos: null
    }
 },
 methods: {
  getTecnologias(){
    axios.get('https://eliel.dev/admin/web/api/pagina/43').then(response => {      
      this.title = response.data[0].title;
      this.body = response.data[0].body;      
      this.logos = response.data[0].field_imagens.split(",");      
    });
  }
 },
 created(){
  this.getTecnologias();
 }
}
</script>

<style lang="scss" scoped>
#top{
  padding: 25vh 0;
  margin-bottom: 25px;
  background: $azul-petroleo;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  //border-bottom: 50px solid $azul-claro;

  @media(orientation:portrait){
    padding: 170px 7% 0 7%;
    margin-bottom: 70px;
  }

  .container{    
    max-width: 1260px;

    .row{
      display: flex;
      .col-1{
        width: 40%;
        .avatar{
          max-width: 400px;
          @media(orientation:portrait){
            max-width: 170px;
          }
        }
      }
      .col-2{
        width: 60%;
        text-align: left;

          h1{
            font-size: 4.5rem;
            line-height: 4rem;
            letter-spacing: -3px;      
            font-weight: 800;
            transition: all .3s;            
            text-transform: none;
            color: #fff;

            @media(orientation:portrait){
              font-size: 3.25em;
              text-shadow: 1px 1px 1px $azul-claro;
              letter-spacing: -2px;  
            }

            
          &:hover{
            background: -webkit-linear-gradient(315deg,#4c9fff 25%,#00276e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all .3s;      
            text-shadow: none;    
          }
          }
          p{                  
            margin: 20px auto; 
            color: #fff;  
          }

          .social{
              padding: 50px 0;
              a{
                i{
                  font-size: 2.25em;
                  margin: 0 10px;
                  color: #fff;

                  &:hover{
                    color: $azul-claro;
                  }

                  @media(orientation:portrait){
                    font-size: 1.5em;
                  }
                }
              }
            }
      }
    }
  }
}

</style>