w2
<template>
  <div>
    <div class="text-center">
      <div class="card">
        <div class="img">
          <img :src="`data:image/png;base64,${img}`" />
        </div>
        <div class="project-link">
          <button @click="$emit('show')">
            <font-awesome-icon :icon="['fa-solid', 'fa-eye']" />
          </button>
        </div>
      </div>
      <h2
        class="w-[95%] m-auto rounded-lg  border-b  text-[#D59A0A] py-2 md:text-xl"
      >
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "title"],
};
</script>

<style lang="scss" scoped>
.card {
  margin-right: 1rem;
  background: $dark;
  height: 160px;
}

h6 {
  cursor: pointer;
  border: 1px $primary solid;
  width: 40%;
  border-radius: 10px;
  margin: auto;
  padding: 2px 9px;
  color: $light;
}

// .card {

//   border-radius: 0.5rem;
//   position: relative;
//   cursor: pointer;
//   border:1px red solid;
.img {
  height: 160px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
}

.project-link {
  position: absolute;
  right: 50%;
  top: 50%;
  display: inline-block;
  width: 20px;

  height: 20px;
  button {
    .svg-inline--fa {
      padding: 20px;
      position: absolute;
      border-radius: 50% 50%;
      right: 50%;
      top: -280%;
      opacity: .7;
      transform: translate(50%, 50%);
      background-color: rgba($color: $primary, $alpha: 0.8);
      box-shadow: 0px 0px 5px black;
      transition: all 0.1s linear;
      &:hover {
        box-shadow: 0px 0px 8px 5px rgb(79, 22, 22);
      }
    }
  }
}
//   }

// }
</style>
