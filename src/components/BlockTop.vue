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

//import axios from "axios";

export default {  
  components: {
   
  },
  data(){
    return{
      /*body: null,
      logos: null*/
    }
 },
 methods: {
 /* getTecnologias(){
    axios.get('https://eliel.dev/admin/web/api/pagina/43').then(response => {      
      this.title = response.data[0].title;
      this.body = response.data[0].body;      
      this.logos = response.data[0].field_imagens.split(",");      
    });
  }*/
 },
 created(){
  //this.getTecnologias();
 }
}
</script>

<style lang="scss" scoped>
#top{
  padding: 25vh 0 15vh 0;
  margin-bottom: 25px;
  background: #1b1940 url(../assets/footer-2.jpg) left top no-repeat;
  background-size: cover;

  @media(orientation:portrait){
    padding: 170px 7% 0 7%;
    margin-bottom: 70px;
  }

  .container{    
    max-width: 1260px;

    .row{
      display: flex;

      @media(orientation:portrait){
            flex-direction: column;
          }
      
      .col-1{
        width: 40%;

        @media(orientation:portrait){
            width: 100%;
          }
        .avatar{
          max-width: 400px;
          @media(orientation:portrait){
            max-width: 170px;
            border: 5px solid #fff;
            border-radius: 50%;
          }
        }
      }
      .col-2{
        width: 60%;
        text-align: left;

        @media(orientation:portrait){
            width: 100%;
          }

          h1{
            font-size: 4em;
            line-height: 4rem;            
            font-weight: 800;
            transition: all .3s;            
            text-transform: none;
            color: #fff;
            margin-top: 25px;            
            cursor: grabbing;

            @media(orientation:portrait){
              font-size: 2.7rem;
              line-height: 3rem;
            }

            
          &:hover{            
            color: $azul-petroleo;            
            text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
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