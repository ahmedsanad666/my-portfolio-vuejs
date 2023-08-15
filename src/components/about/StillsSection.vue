<template>
  <div class="row  ">
    
    <div class="col d-flex justify-content-center align-items-center">
      <img src="@/assets/imgs/svg/undraw_compose_music_re_wpiw.svg" alt="" />
    </div>
    <div class="col-lg-6">
      <h1 class="text-center">


        <div class="row  skill">

 <ul class="flex flex-wrap  gap-2     py-2 my-2 ">
               <li v-for="(skill, el) in skills " :key=" el">
              {{ skill }}
              </li>
            </ul>
          <!-- <div class="col-3 my-3 "   v-for="skill in skills" :key="skill">
            <h5 class="py-1 px-2">
              {{ skill }}
            </h5>
          </div> -->
        </div>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skills"],
};
</script>

<style lang="scss" scoped>
li{
    padding: 0.2rem 0.8rem;
    background: #FFB400;
    color:black;
    font-weight: bold;
    border-radius: 8PX;
}
.skill {
margin-top: 10%;

  div {
    h5 {
      // font-size: 1.3rem;
      background: #c0392b;
      color: $light;
      // margin: 2px 4px ;
      // border-radius: 20px;
    //  line-height: 34x;
    //  width: 80%;
     
    }
  }
}
</style>
