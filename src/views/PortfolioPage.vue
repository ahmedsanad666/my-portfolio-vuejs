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
      <project-dialog
        ref="dialog"
        :showD="showDialog"
        @close="closeDialog"
      ></project-dialog>
      <the-title title=" my portfolio" backTitle="works"></the-title>
      <base-spinner v-if="isLoading"></base-spinner>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-3">
        <project-card
          @show="showProj(el.id)"
          :title="el.title"
          :img="el.imgByte"
          v-for="(el, key) in projects"
          :key="key"
        ></project-card>
        <!-- .............. -->
        <div v-if="isUser">
          <div class="add-new-project">
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
import ProjectCard from "../components/portfolio/ProjectCard.vue";
import ProjectDialog from "../components/portfolio/ProjectDialog.vue";
export default {
  components: { ProjectCard, ProjectDialog },

  data() {
    return {
      error: null,
      isLoading: false,
      showDialog: false,
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
    closeDialog() {
      this.showDialog = false;
    },
    showProj(id) {
      this.showDialog = !this.showDialog;
      this.$refs.dialog.loadProject(id);
    },
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
