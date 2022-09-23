<template>
  <section class="container">
    <the-title title="my data" backTitle="personal"></the-title>
    <base-card>
      <form @submit.prevent="createProject">
        <div class="form-item">
          <input type="text" placeholder="project title" v-model.trim="title" />
        </div>
        <div class="form-item">
          <input type="text" placeholder="project link" v-model.trim="link" />
        </div>
        <div class="form-item">
          <input type="text" placeholder="project img src" v-model.trim="img" />
        </div>

        <button class="btn btn-danger">submit</button>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      link: "",
      img: "",
    };
  },
  methods: {
    createProject() {
      const pro = {
        title: this.title,
        link: this.link,
        img: this.img,
      };

      this.$store.dispatch("projects/createProject", pro);
      this.$router.replace("/portfolio");
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  min-height: 90vh;

  form {
    // border: 1px red solid;
    padding: 20px 10px;

    text-align: center;
    input {
      width: 60%;
      background: none;

      outline: none;
      border: none;
      border-bottom: 1px $primary solid;
      padding: 10px 10px;
      color: $light;
      margin-bottom: 1rem;
    }

    button {
      padding: 10px 40px;
    }
  }
}
</style>
