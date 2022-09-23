<template>
  <section>
    <section class="container">
      <the-title title="About Me" backTitle="RESEUM"></the-title>
      <!-- ........... -->
      <div class="porsonal-info my-5">
        <div class="row">
          <div class="col-lg-6" v-if="isLoading">
            <base-spinner class="spinner"></base-spinner>
          </div>
          <div class="col-lg-6" v-else>
            <porsonal-infos
              :firstName="poersonalInfos.firstName"
              :lastName="poersonalInfos.lastName"
              :age="poersonalInfos.age"
              :freelance="
                poersonalInfos.freelance ? 'Available' : 'Not Available'
              "
              :phone="poersonalInfos.phone"
              :skype="poersonalInfos.skype"
              :email="poersonalInfos.email"
              :languages="poersonalInfos.languages"
              :nationality="poersonalInfos.nationality"
              :address="poersonalInfos.address"
            >
            </porsonal-infos>
          </div>

          <div class="col-6">
            <img src="@/assets/imgs/svg/undraw_summer_1wi4.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- ..............skills -->
    <hr />
    <div class="container py-1">
      <section class="skills">
        <section-head title="skill"></section-head>
        <skills-section :skills="poersonalInfos.skills"></skills-section>
      </section>

      <!-- .............. experiences -->
      <hr class="my-2" />
      <section-head title="EXPERIENCE & EDUCATION"></section-head>
      <section class="experience-sec d-flex my-4">
        <experience-section></experience-section>
      </section>
    </div>
  </section>
</template>

<script>
import porsonalInfos from "../components/about/PersonalInfos.vue";
import SimpleCard from "../components/about/SimpleCard.vue";
import SkillsSection from "../components/about/StillsSection.vue";
import ExperienceSection from "../components/about/ExperienceSection.vue";


export default {
  components: { porsonalInfos, SimpleCard, SkillsSection, ExperienceSection },
  data() {
    return {
      isLoading: true,
      error: null,
    };
  },

  computed: {
    poersonalInfos() {
      const infos = this.$store.getters["infos/myInfos"];
      return infos;
    },
  },

  methods: {
    async getData() {
      this.isLoading = true;
      await this.$store.dispatch("infos/getPersonalData");

      this.isLoading = false;
    },
    
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/views/about";
// .porsonal-info {
//   position: relative;
//   .spinner {
//     position: absolute;
//     top: 55px;
//     left: 107px;
//   }
// }
</style>
