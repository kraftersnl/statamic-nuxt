<script setup lang="ts">
defineProps<{ data: CasesBlock }>();
</script>

<template>
  <section :id="data?.anchor" :class="['page-block', 'cases-block']">
    <div class="page-block-content">
      <ContentBlockMapper :content="data?.content" />

      <ul
        v-if="data?.entries?.length"
        role="list"
        :class="['cases-list', data.random_layout && 'random-layout']"
      >
        <li v-for="entry in data.entries" :key="entry.id" class="case-item">
          <StatamicCase :data="entry" />
        </li>
      </ul>

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

  .cases-link {
    justify-self: end;
    text-decoration: none;
    margin-block-start: 4rem;
    font-weight: var(--font-weight-medium);
  }
}
</style>
