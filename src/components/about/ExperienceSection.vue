<template>
  <section class="d-flex" v-for="ex in experiences" :key="ex.id">
    <div class="experience-icon px-3">
      <font-awesome-icon :icon="['fa-solid', 'fa-briefcase']" />
    </div>
    <div class="experience-data py-1">
      <span>{{ ex.startYear }} - {{ ex.endYear }}</span>
      <h5>{{ ex.title }}- {{ ex.company }}</h5>
      <p>{{ ex.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    experiences() {
      const allEexperiences = this.$store.getters["experieces/Experiences"];
      return allEexperiences;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 150px;
  color: $light;
  flex-basis:50%;
  margin-bottom: .4em;


  .experience-icon {
    position: relative;

    .svg-inline--fa {
      padding: 10px;
      border-radius: 50% 50%;
      background: $primary;
      color: $light;
    }
    &::before {
      content: "";
      width: 91px;
      height: 1px;
      background: $grey;
      position: absolute;
      transform: rotate(90deg);
      bottom: 66px;

      right: -11px;
    }
  }

  .experience-data {
    font-family: $main-font;
    span {
      //   border: 1px red solid;
      background: #212121;
      padding: 2px 9px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: bold;
      color: #919191;
    }
    h5 {
      padding: 5px;
      margin: 5px 0;
      font-family: Poppins, sans-serif;
    }
    p {
      font-size: 14px;
      max-width: 80%;
      font-family: p-font;
    }
  }
}


// responseive
</style>
