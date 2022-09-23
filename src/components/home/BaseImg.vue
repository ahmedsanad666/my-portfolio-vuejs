<template>
  <div class="img">
    
      <router-link to="/auth"></router-link>
    
  </div>
</template>

<style lang="scss" scoped>
.img {
  position: relative;
  height: 90%;
  width: 90%;
  background-image: url("../../assets/imgs/pic.png") ;
  background-position: 50%;
  background-size: cover;
  box-shadow: 0px 0px 6px 2px $primary;
// filter: brightness(80%);
 z-index: 2;
  border-radius: 2rem;

  a{
    position: absolute;
    width:100%;
    height: 100%;
    top:0;
    left: 0;
  
    
  }
  
}
</style>
