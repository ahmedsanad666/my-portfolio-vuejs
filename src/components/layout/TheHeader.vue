<template>
  <header>
    <nav>
      <ul>
        <!-- <i class="fa-solid fa-house-chimney"></i> -->
        <li>
          <base-button link>
            <h5>home</h5>
            <font-awesome-icon :icon="['fa-solid', 'fa-house-chimney']" />
          </base-button>
        </li>
        <li>
          <base-button link to="/about">
            <h5>about</h5>
            <font-awesome-icon :icon="['fa-solid', 'fa-user']" />
          </base-button>
        </li>
        <li v-if="isUser">
          <base-button link to="/requests">
            <h5>messages</h5>
            <font-awesome-icon :icon="['fa-solid', 'fa-message']" />
          </base-button>
        </li>

        <li>
          <base-button link to="/portfolio">
            <h5>portfolio</h5>
            <font-awesome-icon :icon="['fa-solid', 'fa-briefcase']" />
          </base-button>
        </li>
        <li>
          <base-button link to="contact">
            <h5>contact</h5>
            <font-awesome-icon :icon="['fa-solid', 'fa-envelope']" />
          </base-button>
        </li>
        <li>
          <base-button link to="blog">
            <h5>blog</h5>
            <font-awesome-icon :icon="['fa-solid', 'fa-blog']" />
          </base-button>
        </li>
        <li class="logout" v-if="isUser" @click="logout">
          <button>
            <!-- <h5>contact</h5> -->
            <font-awesome-icon :icon="['fa-solid', 'fa-right-from-bracket']" />
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isUser() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logOut");
      this.$router.replace("/home");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/components/header";

.logout {
  background: none;
  border: none;
  color: $light;
  cursor: pointer;
  button {
    border-radius: 2rem;
    background: $dark;
    margin-right: 18px;
  }
  .svg-inline--fa {
    border-radius: 50% 50%;
    font-size: 1.2em;
    padding: 1rem;

    background-color: $secondary;
    border: 1px $border solid;
    color: $light;
  }
}
</style>
