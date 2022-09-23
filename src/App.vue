<template>
  <div class="main">
    <div class="row">
      <div class="col content">
        <router-view></router-view>
      </div>
      <div class="navBar col-lg-1">
        <the-header></the-header>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: { TheHeader },
  created(){
this.$store.dispatch('tryLogin')
  }
};
</script>

<style lang="scss">
// @import "@/assets/styles/views/main";
</style>
