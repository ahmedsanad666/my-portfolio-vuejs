<template>
  <section>
    <h3>PERSONAL INFOS</h3>
    <div class="d-flex px-3">
      <ul c>
        <li>
          <span> FirstName: </span>
          {{ firstName }}
        </li>
        <li>
          <span>Age: </span>
          {{ age }}
        </li>
        <li>
          <span> Freelance: </span>
          {{ freelance }}
        </li>
        <li>
          <span> Phone: </span>
          {{ phone }}
        </li>
        <li>
          <span> Skype: </span>
          {{ skype }}
        </li>
      </ul>
      <ul>
        <li>
          <span>Last Name: </span>
          {{ lastName }}
        </li>
        <li>
          <span> Nationality:</span>
          {{ nationality }}
        </li>
        <li>
          <span> Address:</span>
          {{ address }}
        </li>
        <li>
          <span> Email: </span>
          {{ email }}
        </li>
        <li>
          <span> Languages: </span>

          <h6 v-for="lang in languages" :key="lang">{{ lang }},</h6>
        </li>
      </ul>
    </div>

    <div class="controls  d-flex">
      <base-button mode="magicButton my-5">
        <a
          href="https://drive.google.com/file/d/1Mrls1i0FlBzTxB525pKWVHZD6SEgxqHr/view?usp=sharing"
        >
          DOWNLOAD CV
          <font-awesome-icon :icon="['fa-solid', 'fa-download']" />
        </a>
      </base-button>
      <base-button link to="/porsonalInfos" class="ma"  v-if="isUser">
        
        <font-awesome-icon :icon="['fa-solid', 'fa-pen-to-square']" class='edit' size='2x'/>
      </base-button>
    </div>
  </section>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: { BaseButton },
  props: [
    "firstName",
    "lastName",
    "age",
    "freelance",
    "phone",
    "skype",
    "nationality",
    "address",
    "email",
    "languages",
  ],
  computed:{
    isUser() {
      return  this.$store.getters.isAuthenticated;
    },
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/components/personalInfo";
h6 {
  display: inline-block;
}
.controls{
// justify-content: space-around;

.ma{

  // border: 1px red solid;
  width: 60px;
  margin-left: 2rem;
}
.edit{
    color:$primary;
    margin-left: 1rem;
  }
}
</style>
