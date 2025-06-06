<script setup lang="ts">
defineProps<{
  data?: StatamicProjectEntry;
}>();
</script>

<template>
  <div class="project-entry">
    <h2 v-if="data?.title || data?.sub_title">
      <span v-if="data.title" class="super-title">
        {{ data.title }}
      </span>

      <span v-if="data?.sub_title" class="title">
        {{ data.sub_title }}
      </span>
    </h2>

    <p v-if="data?.summary">{{ data.summary }}</p>

    <StatamicImage
      v-if="data?.image"
      :data="data.image"
      width="1920"
      height="480"
      class="project-image"
    />
  </div>
</template>

<style>
.project-entry {
  text-align: center;

  h2 .title {
    max-width: none;
    font-size: var(--font-size-xxl);
  }
  .project-image {
    width: 100%;

    img {
      border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }
  }
}
</style>
