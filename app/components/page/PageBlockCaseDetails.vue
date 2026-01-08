<script setup lang="ts">
defineProps<{ data?: CaseDetailsBlock }>();
</script>

<template>
  <section :id="data?.anchor" :class="['page-block', 'case-details-block']">
    <h2 class="visuallyhidden">{{ data?.client?.title }}</h2>

    <div class="page-block-content">
      <div class="row">
        <div class="left-column">
          <ClientLogoHypotheek v-if="data?.client?.slug === 'hypotheek'" />
          <ClientLogoCardan v-if="data?.client?.slug === 'cardan'" />
        </div>

        <div class="right-column">
          <div v-html="data?.summary" class="summary" />
        </div>
      </div>

      <div class="row">
        <div class="left-column">
          <TaxonomyTags :tags="data?.tags" />

          <StatamicEmployee :data="data?.employee" variant="small" />
        </div>

        <div class="right-column">
          <ContentBlockMapper :content="data?.content" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.page-block.case-details-block {
  background-color: var(--color-accent-grey);
  padding-block: 8rem;

  .row {
    @media (min-width: 1200px) {
      display: grid;
      gap: 4rem;
      grid-template-columns: 1fr 1fr;
    }
  }

  .summary {
    margin-block-end: 4rem;
  }

  .client-logo {
    margin-block-end: 2.5rem;
  }

  .employee-entry {
    margin-block: 2.5rem;
  }

  .bard-content {
    h3 {
      font-weight: var(--font-weight-medium);
      margin-block-end: 1rem;
    }

    > :first-child {
      margin-block: 0;
    }
  }

  p,
  ul {
    margin-block-start: 0;

    + p,
    + ul {
      margin-block-start: 1.5rem;
    }
  }

  .right-column {
    @supports (animation-timeline: view()) {
      opacity: 0;

      @media (prefers-reduced-motion: no-preference) {
        animation: viewportFadeUp linear forwards;
        animation-timeline: view();
        animation-range: entry;
      }
    }
  }
}
</style>
