<script setup lang="ts">
defineProps<{ data: CasesBlock }>();
</script>

<template>
  <section :id="data?.anchor" :class="['page-block', 'cases-block']">
    <div class="page-block-content">
      <ul v-if="data?.entries?.length" role="list" class="cases-list">
        <li v-for="entry in data.entries" :key="entry.id" class="case-item">
          <StatamicCase :data="entry" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
.page-block.cases-block {
  padding-block-end: 8rem;

  @supports (animation-timeline: view()) {
    opacity: 0;

    @media (prefers-reduced-motion: no-preference) {
      animation: viewportFadeUp linear forwards;
      animation-timeline: view();
      animation-range: entry;
    }
  }

  .cases-list {
    display: grid;
    column-gap: 1.5rem;
    row-gap: 4rem;

    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }

    .case-item {
      &:nth-of-type(2) {
        grid-column: 1 / -1;
      }
      &:nth-of-type(3) {
        grid-column: 1 / -1;
      }
    }
  }
}
</style>
