<template>
  <li class="timeline-item">
    <div class="timeline-info">
      <span>{{ edu.date }}</span>
    </div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h5 class="timeline-title mb-md-3">
        {{ edu.degree }} @
        <a v-if="edu.url" :href="edu.url" target="_blank">{{ edu.company }}</a>
        <a v-if="!edu.url">{{ edu.company }}</a>
      </h5>
    </div>
  </li>
</template>
<script>
export default {
  name: "SingleEduction",
  props: ["edu"],
};
</script>
<style></style>
