<script setup lang="ts">
defineProps<{ data?: AccordionContentBlock }>();
</script>

<template>
  <ul role="list" class="statamic-accordion-list">
    <li v-for="(item, index) in data?.items" :key="item.id">
      <Accordion
        icon="material-symbols:arrow-downward"
        class="statamic-accordion"
        :open="index === 0"
      >
        <template #trigger>
          {{ item.title }}
        </template>

        <template #content>
          <p>{{ item.content }}</p>

          <StatamicButton :data="item" />
        </template>
      </Accordion>
    </li>
  </ul>
</template>

<style>
.statamic-accordion {
  padding-block-end: 1.5rem;
  margin-block-start: 1.5rem;
  border-block-end: 1px solid var(--color-grey-light);

  .accordion-trigger {
    font-weight: var(--font-weight-bold);
    flex-direction: row-reverse;
    justify-content: space-between;

    .iconify {
      color: var(--color-accent-graphic);
    }
  }

  .accordion-panel {
    p {
      padding-block-start: 2.5rem;
    }
  }
}
</style>
