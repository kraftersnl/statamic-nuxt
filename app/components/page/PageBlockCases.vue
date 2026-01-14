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
        v-if="data?.link"
        :to="data?.link"
        :label="data?.link_label"
        icon="material-symbols:arrow-right-alt-rounded"
        icon-pos="end"
        variant="link"
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
    font-size: var(--font-size-xxl);
    margin-block-end: 4rem;
  }

  .cases-link {
    justify-self: end;
    text-decoration: none;
    margin-block-start: 4rem;
    font-weight: var(--font-weight-medium);
  }
}
</style>
