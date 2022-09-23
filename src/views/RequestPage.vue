<template>
  <section class="request">
    <section-head title="REQUESTS"></section-head>
    <div>
      <base-dialog
        :show="!!error"
        title="An error occurred!"
        @close="handleError"
        ><p>{{ error }}</p></base-dialog
      >
    </div>

    <base-spinner v-if="isLoading"></base-spinner>
    <section
      class="request-data border w-50 mx-auto my-5 p-2"
      v-for="req in getRquests"
      :key="req.id"

      
    >
      <h5>{{ req.name }}</h5>
      <a :href="`mailto:${req.email}`">{{ req.email }} </a>

      <h4>{{ req.subject }}</h4>
      <p>
        {{ req.message }}
      </p>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      error: null,
      isLoading: false,
    };
  },
  computed: {
    getRquests() {
      return this.$store.getters["requests/displayRequests"];
    },
    
  },
  created() {
    this.loadReq();
  },
  methods: {
    async loadReq() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/getAllReq");
      } catch (error) {
        this.error = error.message || "Failed to get messages";
        // console.log(this.error.message)
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
.request {
  min-height: 100vh;
  color: $light;
}
</style>
