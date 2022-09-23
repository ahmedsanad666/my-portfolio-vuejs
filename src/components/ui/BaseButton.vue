<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to"> <slot></slot></router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  width: 100%;
  @include flex-box;
  justify-content: space-between;
}

.magicButton {
  width: 230px;
  display:flex;
  height: 55px;
border-radius: 35px;
align-items: center;
padding: 0 1.5em;
position: relative;
transition: .2s all linear;
background-color: $dark;
border: 1px $primary solid;
color:$light;
&:hover{
  background-color:$primary;
}
}
</style>
