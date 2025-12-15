<script setup lang="ts">
const { tags = [] } = defineProps<{
  tags?: StatamicTaxonomyTerm[];
}>();
</script>

<template>
  <ul v-if="tags?.length" role="list" class="card-tags">
    <li v-for="tag in tags" :key="tag.id">
      <Chip
        :label="tag.title"
        font-size="xxxs"
        radius="full"
        variant="outline"
        color="grey"
        class="tag-chip"
      />
    </li>
  </ul>
</template>

<style>
.card-tags {
  margin-block-start: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  .tag-chip.chip-color--grey {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background-color: transparent;
    border-color: var(--color-grey-text);
    color: var(--color-grey-text);
  }
}
</style>
