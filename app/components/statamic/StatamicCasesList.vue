<script setup lang="ts">
const { limit = undefined, random_layout = undefined } = defineProps<{
  limit?: number;
  random_layout?: boolean;
  entries?: StatamicCaseEntry[];
}>();
</script>

<template>
  <ul
    v-if="entries?.length"
    role="list"
    :class="['statamic-cases-list', random_layout && 'random-layout']"
  >
    <li v-for="entry in entries" :key="entry.id" class="case-item">
      <StatamicCase :data="entry" />
    </li>
  </ul>
</template>

<style>
.statamic-cases-list {
  display: grid;
  column-gap: 1.5rem;
  row-gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 380px), 1fr));

  &.random-layout {
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }

    .case-item {
      &:nth-of-type(1) {
        .statamic-image {
          aspect-ratio: 1;
        }
      }
      &:nth-of-type(2) {
        grid-column: 1 / -1;
      }
      &:nth-of-type(3) {
        grid-column: 1 / -1;
      }
      &:nth-of-type(4) {
        .statamic-image {
          aspect-ratio: 1;
        }
      }
    }
  }
}
</style>
