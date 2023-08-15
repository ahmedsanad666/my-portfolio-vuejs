<template>
  <section class="container">
    <the-title title="my data" backTitle="personal"></the-title>
    <base-card class="border">
      <base-spinner v-if="isLoading"></base-spinner>
      <form @submit.prevent="createProject">
        <div class="form-item">
          <input
            type="text"
            placeholder="project title"
            v-model.trim="ProjectData.title"
            required
          />
        </div>
        <!-- <div class="form-item">
         <textarea v-model.trim="ProjectData.Description" required class="w-[80%]  bg-[#1c1a1a] rounded-xl text-white p-4" placeholder="project Des " cols="30" rows="10  "></textarea>
        </div> -->
        <div class="form-item">
          <div
            id="editor-container"
            class="w-full h-64 rounded-lg shadow-xl text-white outline-none py-4 px-3"
          ></div>
        </div>
        <div class="form-item flex flex-col py-2 w-[80%] m-auto my-2">
          <label for="image" class="text-white text-start">upload Image</label>
          <input
            @change="handelImage"
            type="file"
            id="image"
            ref="imageRef"
            class="m-auto"
          />
          <div class="py-2" v-if="ProjectData.imageUrl">
            <img :src="ProjectData.imageUrl" alt="uploadedImage" />
          </div>
        </div>
        <div class="form-item">
          <input
            type="text"
            placeholder="project Link"
            v-model.trim="ProjectData.projectLink"
            required
          />
        </div>
        <div class="form-item">
          <input
            type="text"
            placeholder="Code Link"
            v-model.trim="ProjectData.codeLink"
          />
        </div>
        <div class="form-item">
          <div>
            <input
              type="text"
              placeholder="technology"
              v-model.trim="technology"
            />
            <button
              @click.prevent="addTech"
              class="text-black bg-yellow py-2 px-3 rounded-md cursor-pointer"
              :disabled="technology ? false : true"
            >
              Add
            </button>
          </div>
          <ul class="flex gap-2 py-3" v-if="ProjectData.allTechnologies">
            <li
              class="text-black font-bold py-2 px-3 bg-yellow rounded-e-md"
              v-for="(tech, key) in ProjectData.allTechnologies"
              :key="key"
            >
              {{ tech }}
            </li>
          </ul>
        </div>

        <button class="btn btn-danger" type="submit">submit</button>
      </form>
    </base-card>
  </section>
</template>

<script>
import Quill from "quill";

import "@vueup/vue-quill/dist/vue-quill.snow.css";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";
export default {
  components: { BaseSpinner },
  data() {
    return {
      isLoading: false,
      selectedFile: null,
      technology: "",
      ProjectData: {
        title: "",
        Description: "",
        projectLink: "",
        codeLink: "",
        allTechnologies: [],
        imageUrl: null,
      },
    };
  },
  methods: {
    addTech() {
      this.ProjectData.allTechnologies.push(this.technology);
      this.technology = "";
    },
    handelImage() {
      this.selectedFile = this.$refs.imageRef.files[0];
      this.ProjectData.imageUrl = window.URL.createObjectURL(this.selectedFile);
    },
    async createProject() {
      const data = new FormData();
      data.append("title", this.ProjectData.title);
      data.append("description", this.ProjectData.Description);
      data.append("files", this.selectedFile);
      data.append("projectLink", this.ProjectData.projectLink),
        data.append("codeLink", this.ProjectData.codeLink);
      data.append("technologies", this.ProjectData.allTechnologies);

      this.isLoading = true;
      try {
        this.$store.dispatch("projects/createProject", data);
      } catch (e) {
        console.log(e.message);
      }
      this.isLoading = false;
      console.log(data.get("title"));
      this.$router.replace("/portfolio");
    },
  },
  mounted() {
    const quillOptions = {
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "video"],
          [{ align: [] }],
          [{ header: [1, 2, false] }],
        ],
      },
      theme: "snow",
    };

    this.quill = new Quill("#editor-container", quillOptions);
    this.quill.on("text-change", () => {
      this.ProjectData.Description = this.quill.root.innerHTML;
    });
  },
  beforeUnmount() {
    this.quill.off("text-change");
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 50%;
  border-radius: 10px;
  margin: 0 auto;
}
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
