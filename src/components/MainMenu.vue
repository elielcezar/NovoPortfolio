<template>
<nav>              
    <a href="#portfolio">Portfolio</a>        
    <a href="#sobre">Sobre</a>        
    <a href="#contato">Contato</a>
</nav>
  
</template>

<script>
export default {
 name: "MainMenu"
}
</script>

<style lang="scss" scoped>

    /* DESKTOP ----------------------------------------*/
    nav{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media(orientation:portrait){
        //display: none;
      }
      a{
        padding: 15px;
        display: inline-block;
        font-size: 1em;
        text-transform: uppercase;
        font-weight: 700; 
        color: #fff;   
        transition: all .3s;
        
        &:hover{
          color: $azul-claro;
        }
      }
    } 
    

    /*--- MOBILE -------------------------------------------*/
    .menu-mobile {
  overflow: hidden;
  position: relative;

  .mainMenu {
    position: absolute;
    left: 0;
    top: 89px;
    z-index: 10;
    height: 100%;
    width: 100%;
    text-align: center;
    opacity: 0;
    transition: all 500ms;
    transform: scale(0);
    background: #000;

    .menu-menu-principal-container {
      display: flex;
      flex-direction: column;
      justify-content: center;      
    }

    ul {
      li {
        margin: 0 0 10px 0;
        padding: 0 0 5px 5px; 
        
        a{
          font-weight: 700;          
          text-transform: none;          
          letter-spacing: 3px;       
          color: #fff;
          padding: 7px 0;
          display: inline-block;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 400;    

          strong{
            font-weight: 800;
          }
        } 
        
        a.btn{
          font-size: 14px;
          padding: 5px 20px;
          margin-top: 10px;
        }
        
        .sub-menu{
          padding-left: 10px;

          li{
            a{
              font-weight: 300;  
              text-transform: none;   
              padding: 2px 0;               
            }
          }      
          #menu-item-198{
            border-bottom: none;                              
          }
        }
      }

    }

    li {
      padding: 0;
      transition: all 400ms 510ms;
      opacity: 0;
      text-align: left;      

      &:nth-child(odd) {
        transform: translateX(30%);
      }

      &:nth-child(even) {
        transform: translateX(-30%);
      }

      &:last-child {
        transform: none;
      }
    }
  }
}

.menu-mobile.act {
  .mainMenu{
    opacity: 1;
    transform: scale(1);
    position: fixed;
    left: 0;
    padding: 10% 5% 0 5%;
    height: calc(100vh - 58vw);
    top: 58vw;

    ul {
      display: block;
      flex-direction: column;

      li {
        margin-bottom: 0;
        opacity: 1;
        transform: translateX(0);
    }
  }
  }
}
    
  
</style>