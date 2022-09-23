<template>
  <div class="titleBage text-center">
    <h1 class="fw-bold">{{ title }}</h1>
    <span>{{ backTitle }}</span>
    <div class="title"></div>
  </div>
</template>

<script>
export default {
  props: ["title", "backTitle"],
};
</script>
<style lang="scss" scoped>
.titleBage {
  position: relative;
  padding: 2rem 0;
  //   border: 1px red solid;
  margin-top: 3rem;
  h1 {
    color: $primary;
    text-transform: uppercase;
    font-size: 4rem;
    letter-spacing: 2px;
}
span {
      letter-spacing: 6px;
    font-size: 7rem;
    font-weight: bold;
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    z-index: -1;
    text-transform: uppercase;
  }
}
</style>
