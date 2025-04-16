<script setup lang="ts">
defineProps<{ data: GridBlock }>();
</script>

<template>
  <section :id="data?.anchor" class="page-block grid-block">
    <div class="page-block-content">
      <ContentBlockMapper :content="data?.content" />

      <div class="photo-grid">
        <StatamicImage
          v-for="image in data?.images"
          :key="image.id"
          :data="image"
        />
      </div>
    </div>
  </section>
</template>

<style>
.grid-block {
  .photo-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 360px), 1fr));

    img {
      height: 100%;
    }
  }

  .bard-content {
    max-width: none;
  }
}
</style>
