<template>
  <div>
    <div>
      <base-dialog
        :show="!!error || !!successededMessge"
        :title="!!error ? 'Some thing went wrong!' : 'Successfull Message'"
        @close="handelError"
      >
      
        <p>{{ !!error ? error: successededMessge }}</p></base-dialog
      >
    </div>
    <base-spinner v-if="isLoading"></base-spinner>
    <form @submit.prevent="submitData">
      <div class="row">
        <div class="name col-12 col-md-6">
          <input
            :class="!name.isValid ? 'error' : null"
            type="text"
            id=""
            placeholder="YOUR NAME"
            data-placeholder="YOUR NAME"
            v-model.trim="name.val"
            @focus="rePlaceholder"
            @blur="setPlaceholder"
          />
        </div>
        <div class="col-12 col-md-6">
          <input
            type="email"
            class="email"
            :class="!email.isValid ? 'error' : null"
            id=""
            data-placeholder="YOUR EMAIL"
            placeholder="YOUR EMAIL"
            v-model.trim="email.val"
            @focus="rePlaceholder"
            @blur="setPlaceholder"
          />
        </div>
        <div class="col-12">
          <input
            type="text"
            :class="!subject.isValid ? 'error' : null"
            placeholder="YOUR SUBJECT"
            data-placeholder="YOUR SUBJECT"
            v-model.trim="subject.val"
            @focus="rePlaceholder"
            @blur="setPlaceholder"
          />
        </div>
        <div class="col-12">
          <textarea
            rows="7"
            :class="!message.isValid ? 'error' : null"
            placeholder="YOUR MESSAGE"
            data-placeholder="YOUR MESSAGE"
            v-model.trim="message.val"
            @focus="rePlaceholder"
            @blur="setPlaceholder"
          ></textarea>
        </div>
      </div>
      <p v-if="!validForm">
        Make sure your fill all fields or review your data
      </p>
      <base-button mode="magicButton"
        >SEND MESSAGE
        <font-awesome-icon :icon="['fa-solid', 'fa-paper-plane']" />
      </base-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      error: null,
      successededMessge: null,
      name: {
        val: "",
        type: String,
        required: true,
        isValid: true,
      },
      email: {
        val: "",
        type: String,
        required: true,
        isValid: true,
      },
      subject: {
        val: "",
        type: String,
        required: true,
        isValid: true,
      },
      message: {
        val: "",
        type: String,
        required: true,
        isValid: true,
      },
      validForm: true,
    };
  },
  methods: {
    rePlaceholder(e) {
      e.target.setAttribute("placeholder", " ");
    },
    setPlaceholder(e) {
      const placeholder = e.target.getAttribute("data-placeholder");
      e.target.setAttribute("placeholder", placeholder);
    },
    fomValidity() {
      this.validForm = true;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.validForm = false;
      } else {
        this.name.isValid = true;
      }
      if (this.email.val === "" || !this.email.val.includes("@")) {
        this.email.isValid = false;
        this.validForm = false;
      } else {
        this.email.isValid = true;
      }

      if (this.subject.val === "") {
        this.subject.isValid = false;
        this.validForm = false;
      } else {
        this.subject.isValid = true;
      }
      if (this.message.val === "") {
        this.message.isValid = false;
        this.validForm = false;
      } else {
        this.message.isValid = true;
      }
    },
    async submitData() {
      this.fomValidity();
      if (!this.validForm) {
        return;
      }
      this.isLoading = true;

      const messageData = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };

      try {
        await this.$store.dispatch("requests/submitRequest", messageData);
        this.successededMessge = "your message sent successfully";
      } catch (error) {
        this.error = error.message || "Failed to send message try again later ";
      }
      this.isLoading = false;
    },
    handelError() {
      this.error = null;
      this.successededMessge = null;

      this.name.val = this.email.val = this.subject.val = this.message.val = "";
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  .row {
    text-align: center;

    div {
      margin-bottom: 1.5rem;
    }
    .name {
      padding-right: 10px;
    }
    input,
    textarea {
      color: $light;
      width: 100%;
      padding: 10px 25px;
      border-radius: 20px;
      background: #252525;
      border: none;
      outline: none;

      &.error {
        border: 1px red solid;
      }
      &:focus {
        border: 1px $primary solid;
      }
    }
  }
  p {
    color: #c0392b;
    margin-bottom: 1rem;
    font-family: $main-font;
    font-size: 20px;
  }

  @include magicbutton;
}
</style>
