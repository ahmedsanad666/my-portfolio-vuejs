<template>
  <section class="container">
    <the-title title="information" backTitle="personla"></the-title>
    <base-card>
      <form @submit.prevent="update">
        <div class="row">
          <div class="col-md-6">
            <div class="form-item">
              <input
                type="text"
                placeholder="firstName"
                v-model.trim="firstName"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-item">
              <input
                type="text"
                placeholder="lastName"
                v-model.trim="lastName"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-item">
              <input type="text" placeholder="age" v-model.trim="age" />
            </div>
          </div>
          <!-- ....... -->
          <div class="col-md-6">
            <div class="form-item d-flex">
              <label for="free ">Freelance</label>
              <input
                type="checkbox"
                id="free"
                checked
                :value="true"
                v-model.trim="freelance"
              />
            </div>
          </div>
          <!-- ....... -->
          <!-- ....... -->
          <div class="col-md-6">
            <div class="form-item">
              <input
                type="text"
                placeholder="phone number"
                v-model.trim="phone"
              />
            </div>
          </div>
          <!-- ....... -->
          <!-- ....... -->
          <div class="col-md-6">
            <div class="form-item">
              <input
                type="text"
                placeholder="skype accound"
                v-model.trim="skype"
              />
            </div>
          </div>
          <!-- ....... -->
          <!-- ....... -->
          <div class="col-md-6">
            <div class="form-item">
              <input
                type="text"
                placeholder="nationality"
                v-model.trim="nationality"
              />
            </div>
          </div>
          <!-- ....... -->
          <!-- ....... -->
          <div class="col-12">
            <div class="form-item">
              <textarea
                rows="3"
                class="w-80"
                id="message"
                v-model.trim="address"
              ></textarea>
            </div>
          </div>
          <!-- ....... -->
          <!-- ....... -->
          <div class="col-12">
            <div class="form-item">
              <input type="text" placeholder="email" v-model.trim="email" />
            </div>
          </div>
          <!-- ....... -->
          <!-- ....... -->
          <div class="col-12">
            <div class="form-item skillsControl">
              <input type="text" placeholder="languates" v-model.trim="lang" />
              <div
                class="btn btn-success"
                :class="disabledLang"
                @click="addLang"
              >
                submit
              </div>
            </div>
            <ul>
              <li v-for="lang in languages" @click="deletLang" :key="lang">
                {{ lang }}
              </li>
            </ul>
          </div>
          <!-- ....... -->
          <!-- ....... -->
          <div class="col-12">
            <div class="form-item skillsControl">
              <input type="text" placeholder="skills" v-model="skill" />
              <div
                class="btn btn-success"
                :class="disableSkill"
                @click="addSkill"
              >
                submit
              </div>
            </div>
            <ul>
              <li @click="deletSkill" v-for="skill in skills" :key="skill">
                {{ skill }}
              </li>
            </ul>
          </div>
          <!-- ....... -->
        </div>

        <button class="btn btn-danger submitControl">submit</button>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      age: "",
      freelance: true,
      phone: "",
      skype: "",
      nationality: "",
      address: "",
      email: "",

      skill: "",
      skills: [],
      lang: "",
      languages: [],
    };
  },
  computed: {
    disableSkill() {
      return !this.skill ? "disabled" : null;
    },
    disabledLang() {
      return !this.lang ? "disabled" : null;
    },
    poersonalInfos() {
      const infos = this.$store.getters["infos/myInfos"];

      return infos;
    },
  },
  methods: {
    addSkill() {
      this.skills.push(this.skill);
      this.skill = "";
    },
    addLang() {
      this.languages.push(this.lang);
      this.lang = "";
    },

    putData() {
      this.firstName = this.poersonalInfos.firstName;
      this.lastName = this.poersonalInfos.lastName;
      this.age = this.poersonalInfos.age;
      this.freelance = this.poersonalInfos.freelance;
      this.phone = this.poersonalInfos.phone;
      this.skype = this.poersonalInfos.skype;
      this.nationality = this.poersonalInfos.nationality;
      this.address = this.poersonalInfos.address;
      this.email = this.poersonalInfos.email;
      this.languages = this.poersonalInfos.languages;
      this.skills = this.poersonalInfos.skills;
    },
    update() {
      const newDate = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        freelance: this.freelance,
        phone: this.phone,
        skype: this.skype,
        nationality: this.nationality,
        address: this.address,
        email: this.email,
        languages: this.languages,
        skills: this.skills,
      };
      this.$store.dispatch("infos/updateMyInfo", newDate);

      this.$router.replace("/about");
    },
    deletLang(e) {
      const deletedEl = e.target.innerText;

      this.languages.pop(deletedEl);
    },
    deletSkill(e) {
      const deletedEl = e.target.innerText;

      this.skills.pop(deletedEl);
    },
  },
  created() {
    this.putData();
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
    color: $light;

    label {
      user-select: none;
      color: $primary;
      font-size: 1.5rem;
      font-family: $main-font;
      letter-spacing: 2px;
      margin-top: 10px;
      padding-left: 14px;
      cursor: pointer;
    }
    #free {
      margin-top: 20px;
      cursor: pointer;
    }
    input,
    textarea {
      width: 90%;
      outline: none;
      border: none;
      border-bottom: 1px $primary solid;
      padding: 10px 10px;
      color: $light;
      margin-bottom: 3rem;
      border-radius: 15px;

      background: none;
      border-left: 1px $primary solid;
      border-bottom: 1px $primary solid;
    }
    .skillsControl {
      position: relative;

      input {
        margin: 10px 0;
      }

      .btn {
        position: absolute;
        right: 27px;
        border-radius: 19px;
        padding: 5px 14px;
        top: 9px;
      }
    }

    button {
      padding: 10px 40px;
    }
    // ......list
    ul {
      //   border: 1px red solid;
      display: flex;
      align-items: flex-start;
      padding-left: 20px;
      flex-wrap: wrap;

      li {
        display: inline-block;
        background: #c0392b;
        padding: 3px 15px;
        margin-left: 10px;
        border-radius: 15px;
        margin-top: 10px;
        cursor: pointer;
        transition: all .2s linear;

      &:hover{
        background: $light;
        color:#c0392b;
        transform: scale(1.1);
      }
      }
    }

    .submitControl {
      margin-top: 1rem;
    }
  }
}
</style>
