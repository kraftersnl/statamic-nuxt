<script setup lang="ts">
defineProps<{ data: BasicBlock }>();
</script>

<template>
  <section
    :id="data?.anchor"
    :class="`page-block basic-block image-position--${data?.image_pos?.key}`"
  >
    <div class="page-block-content">
      <ContentBlockMapper :content="data?.content" />

      <div v-if="data?.image" class="image-column">
        <StatamicImage :data="data.image" />
      </div>
    </div>
  </section>
</template>

<style>
.basic-block {
  .image-column {
    width: 100%;
    max-width: 480px;
    margin-inline: auto;
    margin-block-start: 0.25rem;

    img {
      width: 100%;
      object-fit: contain;
      border-radius: var(--radius-lg);
    }
  }
}

@media (min-width: 768px) {
  .image-position--inline-end {
    .page-block-content:has(.image-column) {
      display: grid;
      align-items: center;
      gap: 4rem;
      grid-template-columns: 1fr min(400px, 40vw);
    }
  }

  .image-position--inline-start {
    .page-block-content:has(.image-column) {
      display: grid;
      align-items: center;
      gap: 4rem;
      grid-template-columns: min(400px, 40vw) 1fr;
    }

    .image-column {
      order: -1;
    }
  }
}
</style>
