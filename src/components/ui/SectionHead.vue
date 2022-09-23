<template>
  <h2 class="text-center py-4 fw-bold">{{title.toUpperCase()}}</h2>
</template>

<script>
export default {
    props:['title']
};
</script>

<style lang="scss" scoped>
h2 {
  color: $light;
  letter-spacing: 3px;
}
</style>
