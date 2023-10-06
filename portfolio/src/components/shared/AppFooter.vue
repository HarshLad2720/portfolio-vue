<template>
  <footer class="bg-dark text-white text-center">
    <div class="container p-3 pb-0">
      <section>
        <icon-link
          v-for="link in links"
          :key="link.id"
          :url="link.url"
          :icon="link.icon"
          class="text-white"
        />
      </section>
    </div>
    <div class="text-center p-3">© {{ currentYear }} Harsh Lad</div>
  </footer>
</template>
<script>
import IconLink from "../reusable/IconLink.vue";
export default {
  props: ["links"],
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  components: {
    IconLink,
  },
  name: "AppFooter",
};
</script>
<style></style>
