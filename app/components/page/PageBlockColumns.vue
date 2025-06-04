<script setup lang="ts">
defineProps<{ data: ColumnsBlock }>();
</script>

<template>
  <section :id="data?.anchor" :class="['page-block', 'columns-block']">
    <div
      v-for="(col, i) in data.columns"
      :key="i"
      :class="[
        'page-block-column',
        data.background_color?.key &&
          `background-color--${data.background_color.key}`,
      ]"
    >
      <div
        v-if="col.super_title || col.title || col.content?.length"
        class="page-block-content"
      >
        <ContentBlockMapper :content="col?.content" />
      </div>
    </div>
  </section>
</template>

<style>
.page-block.columns-block {
  display: grid;
  max-width: var(--app-max-width);
  margin-inline: auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  .page-block-content {
    padding-block: 2rem;

    .statamic-icon {
      color: var(--color-accent-graphic);
    }
  }

  .page-block-column {
    &.background-color--grey {
      background-color: var(--color-grey-bg);
    }
  }
}
</style>
