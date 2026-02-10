<script setup lang="ts">
defineProps<{ data: CasesBlock }>();
</script>

<template>
  <section :id="data?.anchor" :class="['page-block', 'cases-block']">
    <div class="page-block-content">
      <ContentBlockMapper :content="data?.content" />

      <StatamicCasesList
        v-if="data?.entries?.length"
        :entries="data.entries"
        :random-layout="data?.random_layout"
      />

      <StatamicCasesAll
        v-else
        :limit="data?.limit"
        :random_layout="data?.random_layout"
      />

      <Button
        v-if="data?.link?.url"
        :to="data?.link?.url"
        :label="data?.link_label"
        icon="material-symbols:arrow-right-alt-rounded"
        icon-pos="end"
        variant="topbar"
        font-size="sm"
        class="cases-link"
      />
    </div>
  </section>
</template>

<style>
.page-block.cases-block {
  .page-block-content {
    padding-block-start: 5rem;
    padding-block-end: 8rem;
    display: grid;
  }

  .bard-content h2 {
    margin-block-end: 4rem;
  }

  .cases-link {
    --button-hover-color: var(--color-accent-text);
    --button-underline-color: var(--color-accent-graphic);
    --button-underline-thickness: 1px;
    justify-self: end;
    margin-block-start: 4rem;
    font-weight: var(--font-weight-medium);
  }
}
</style>
