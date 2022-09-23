<template>
  <section >
    <h3>DON'T BE SHY !</h3>
    <P>
      Feel free to get in touch with me. I am always open to discussing new
      projects, creative ideas or opportunities
      <br />
      to be part of your visions.
    </P>
    <div class="contact-data">
      <div class="address-point">
        <div class="row">
          <div class="col-2">
            <font-awesome-icon :icon="['fa-solid', 'fa-map']" size="2x"/>
          </div>
          <div class="col">
            <h6>ADDRESS POINT</h6>
            <span>{{ contactData.address }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <font-awesome-icon :icon="['fa-solid', 'fa-envelope']"  size='2x'/>
          </div>
          <div class="col">
            <h6>MAIL ME</h6>
            <span>{{ contactData.email }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <font-awesome-icon :icon="['fa-solid', 'fa-square-phone']" size="2x" />
          </div>
          <div class="col">
            <h6>CALL ME</h6>
            <span>{{ contactData.phone }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    contactData() {
      return this.$store.getters["infos/myInfos"];
    },
  },methods: {
    async getData() {
      this.isLoading = true;
      await this.$store.dispatch("infos/getPersonalData");

      this.isLoading = false;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
section {
  color: $light;

  h3 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
    padding: 12px 0;
  }

  .row {
    div{
        margin-bottom:1rem;
    }
  }

  .svg-inline--fa{
    color:$primary;
  }
  h6{
    color:$grey;
  }
}
</style>
