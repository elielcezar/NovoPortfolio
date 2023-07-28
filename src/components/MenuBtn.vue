<template>
  <a class="menuBtn">
    <span class="lines"></span>
  </a>
</template>

<script>
export default {
 name: "MenuBtn",
 methods: {
  clickMenuBtn(){
    //const menuBtn = document.querySelector('.menuBtn');
  }
 },
 created() {
  this.clickMenuBtn();
 }
}
</script>


<style lang="css" scoped>
.menuBtn {
  height: 30px;
  width: 30px;
  position: absolute;
  top: 56px;
  right: 25px;
  cursor: pointer;  
  z-index: 1;    
  display: block;
  border: 2px solid red;

  >span {
    background-color: #fff;
    border-radius: 1px;
    height: 2px;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -1px 0 0 -15px;
    transition: height 100ms;

    &:after,
    &:before {
      content: '';
      background-color: #fff;
      border-radius: 1px;
      height: 2px;
      width: 100%;
      position: absolute;
      left: 50%;
      margin-left: -15px;
      transition: all 200ms;
    }

    &:after {
      top: -7px;
    }

    &:before {
      bottom: -7px;
    }
  }
}

/*.menuBtn.header {
  z-index: 50;
  
  @media(orientation:landscape){
    display: none;
  }

  &.act {
    >span {
      height: 0;

      &:after,
      &:before {
        top: 1px;
      }

      &:after {
        transform: rotate(45deg);
      }

      &:before {
        transform: rotate(-45deg);
      }
    }
  }
}*/

</style>