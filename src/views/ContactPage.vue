<template>
  <section class="contact-page container">
    <section>
      <the-title title=" get in touch" backTitle="contact"></the-title>
    </section>
    <section class="contact-section py-3 my-4">
      <div class="row">
        <div class="col-12 col-lg-4">
          <reach-me></reach-me>
          <div class="social-media my-3">
            <a href="https://github.com/ahmedsanad666">
              <font-awesome-icon :icon="['fab', 'github']" class="icon alt" />
            </a>
            <a href="https://www.facebook.com/ahmed.sanad.9081/">
              <font-awesome-icon :icon="['fab', 'facebook']" class="icon alt" />
            </a>

            <a
              href="https://twitter.com/ahmedsa44146831?s=09&fbclid=IwAR2hiwNzKbXpLan2zixI4Cxx9kgCFaZefEshB09IurzZvYEmA0ORVeb-wxs"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC6NAm-FKKyuhyKCdPx9KhkQ?view_as=subscriber"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" class="icon alt" />
            </a>
          </div>
        </div>
        <div class="col form-section">
          <contact-form></contact-form>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import ReachMe from "../components/contact/ReachMe.vue";
import ContactForm from "../components/contact/ContactForm.vue";
export default {
  components: { ReachMe, ContactForm },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/views/contact";
</style>
