<template>
  <div
    v-if="showD"
    class="project shadow-xl shadow-[#111111] w-[70%] h-[80vh] absolute m-auto rounded-2xl bg-black z-30 py-2 px-4"
  >
    <div class="absolute right-5 top-5" @click="$emit('close')">
      <font-awesome-icon
        :icon="['fas', 'xmark']"
        class="text-black p-2 border"
      />
    </div>
    <h2
      class="text-center my-2 py-3 text-[#FFB400] lg:text-4xl text-3xl font-bold"
    >
      {{ project.title }}
    </h2>
    <base-spinner v-if="isLoading"></base-spinner>
    <div class="flex md:flex-row gap-2 my-3 py-2 flex-col-reverse">
      <div class="space-y-3 py-3 px-2 md:w-1/2">
        <h2 class="text-center text-2xl text-[#FFB400]">Description</h2>
        <div
          class="text-white text-start py-3 px-2  des"
          v-html="project.description"
        ></div>
      </div>
      <div class="md:w-1/2">
        <img
          :src="`data:image/png;base64,${project.imgByte}`"
          class="rounded-xl m-auto h-full object-cover"
          alt=""
        />
      </div>
    </div>

    <div class="text-white flex gap-3 md:flex-row flex-col justify-around py-3">
      <div class="w-[60%] m-auto">
        <h3 class="text-center text-2xl text-[#FFB400]">Technologies</h3>
        <ul class="flex flex-wrap gap-2 py-2 my-2">
          <li v-for="(el, key) in project.technologies" :key="key">{{ el }}</li>
        </ul>
      </div>
      <div>
        <h3 class="text-center text-2xl text-[#FFB400] py-2">Sources</h3>
        <div
          class="flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-2"
        >
          <a :href="project.projectLink">Link</a>
          <a :href="project.codeLink">Code Link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSpinner from "../ui/BaseSpinner.vue";
export default {
  components: { BaseSpinner },
  props: {
    showD: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      projectId: null,
      isLoading: false,
      project: [],
    };
  },
  methods: {
    loadProject(id) {
      this.projectId = id;
      const projects = this.$store.getters["projects/projects"];
      this.project = projects.find((e) => e.id === this.projectId);
      console.log(this.project);
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background: #ffb400;
  color: black;
}
.des{
  white-space: normal;
  overflow: visible;
  word-wrap: break-word
}
.project {
  overflow: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent; /* Set the color of the scrollbar thumb and track */
}

.project::-webkit-scrollbar {
  width: 0.5em; /* Adjust the width as needed */
}

.project::-webkit-scrollbar-track {
  background: transparent; /* Set the background color of the scrollbar track */
}
li {
  padding: 0.2rem 0.8rem;
  background: #ffb400;
  color: black;
  font-weight: bold;
  border-radius: 8px;
}

.svg-inline--fa {
  border-radius: 194% 153%;
  background: #ffb400;
  cursor: pointer;
}
</style>
