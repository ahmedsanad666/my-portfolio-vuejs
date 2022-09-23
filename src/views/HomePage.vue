<template>
  <section>
    <div class="overlay d-none d-lg-block"></div>
    <div class="row text-center text-lg-start">
      <div class="col-md-6 mx-sm-auto home-content">
        <base-img></base-img>
      </div>
      <div class="col col home-content">
        <div class="resume">
          <h2 class="headTitle">
            -I'M AHMED SANAD.
            <br />
            <span class="headSpan"> FULL STACK WEBDEVELOPER. </span>
          </h2>
          <p class="headP">
            Creative bilingual/multilingual full-stack Developer skilled at
            creating unique customer experience that highlights brand messaging.
            Maintains up to date awareness of technological trends and
            technological advance.
          </p>
          <div class="d-none d-md-block">
            <base-button mode="magicButton m-auto">
              <router-link to="/about">
                <h6>More About Me</h6>
                <font-awesome-icon :icon="['fa-solid', 'fa-arrow-right']" />
              </router-link>
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseImg from "../components/home/BaseImg.vue";
import { gsap } from "gsap";
import { tsLiteralType } from "@babel/types";
export default {
  components: { BaseImg },
  mounted() {
    this.headAnimation();
  },
  methods: {
    headAnimation() {
      const tl = gsap.timeline();
      tl.from(".headTitle", { opacity: 0, y: 30 ,ease: "linear",
    duration:1}).from('.headSpan',{opacity:0,y:30,duration:1,ease: "linear"}).from(".headP", {
        opacity: 0,
        y: 20,
        ease: "linear",
        duration:.6
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/views/home";
section {
  height: 100vh;
  // text-align: ;
}
</style>
