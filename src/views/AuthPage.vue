<template>
  <section>
    <form @submit.prevent="submitData">
      <div class="form-item">
        <input type="email" placeholder="EMAIL" v-model.trim="email" />
      </div>
      <div class="form-item">
        <input type="password" placeholder="PASSWORD" v-model.trim="password" />
      </div>

      <button class="submit btn btn-danger">login</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    submitData() {
      const user = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("login",user);
      this.$router.replace('/home')
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: url("@/assets/imgs/back.jpg") no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  form {
    width: 50%;
    // box-shadow: 0px 0px 2px 2px $light;
    text-align: center;

    .form-item {
      input {
        width: 80%;
        background: #252525;
        border-radius: 20px;
        margin-bottom: 2rem;
        outline: none;
        border: none;
        padding: 10px 10px;
        color: $light;
        &:focus {
          border: 0.5px $primary solid;
        }
      }
    }
    .submit {
      padding: 7px 40px;
      border-radius: 15px;
      font-size: 20px;
    }
  }
}
</style>
