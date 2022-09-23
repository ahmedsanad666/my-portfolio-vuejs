<template>
  <div>
    <div>
      <base-dialog
        :show="!!error"
        title="An error occurred!"
        @close="handleError"
        ><p>{{ error }}</p></base-dialog
      >
    </div>
    <section class="container text-center">
      <the-title title=" my portfolio" backTitle="works"></the-title>
      <base-spinner v-if="isLoading"></base-spinner>
      <div class="row py-4">
        <!-- ................. -->
        <project-card
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :img="project.img"
          :link="project.link"
        ></project-card>

        <!-- .................................................. -->
        <!-- add project icon  -->
        <div class="col-md-4 col-12" v-if="isUser">
          <div class="add-new-project border">
            <router-link to="/add-project">
              <font-awesome-icon :icon="['fa-solid', 'fa-plus']" size="4x" />
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseSpinner from "../../../deploy-01-starting-project/src/components/ui/BaseSpinner.vue";
import ProjectCard from "../components/portfolio/ProjectCard.vue";
export default {
  components: { ProjectCard, BaseSpinner },

  data() {
    return {
      error: null,
      isLoading: false,
    };
  },
  computed: {
    projects() {
      const projects = this.$store.getters["projects/projects"];

      return projects;
    },
    isUser() {
      return this.$store.getters.isAuthenticated;
    },
  },
  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("projects/getProjects");
      } catch (error) {
        this.error = error.message || "Failed to get projects";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 85% !important;
  margin: auto;
  min-height: 100vh;

  .add-new-project {
    // height: 220px;
    // width: 300px;
    border-radius: 0.5rem;
    position: relative;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row {
    div {
      margin-bottom: 1rem;
    }
  }
}
</style>
