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
  display: flex;
  flex-wrap: wrap;
  max-width: var(--app-max-width);
  margin-inline: auto;
  gap: 0.5rem;

  .page-block-column {
    flex-basis: 18rem;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;

    h3 {
      min-height: 2lh;
    }
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
