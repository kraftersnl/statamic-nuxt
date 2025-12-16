<script setup lang="ts">
defineProps<{ data?: FormBlock }>();
</script>

<template>
  <section :id="data?.anchor" class="page-block form-block">
    <div class="page-block-content">
      <div class="left-column">
        <ContentBlockMapper :content="data?.content" />
      </div>

      <div class="right-column">
        <template v-if="data?.form?.handle">
          <LazyStatamicForm :data="data" />

          <p v-if="data?.legal" class="legal">
            {{ data.legal }}
          </p>
        </template>
      </div>
    </div>
  </section>
</template>

<style>
.page-block.form-block {
  --focus-color: var(--color-accent-graphic);
  background-color: var(--color-accent-grey);
  padding-block-start: 4rem;
  border-block-end: 2px solid var(--color-grey-light);

  .page-block-content {
    padding-block: 3rem 5rem;
    display: grid;
    row-gap: 4rem;
    column-gap: 8rem;

    @media (min-width: 1200px) {
      padding-block-end: 8rem;
      grid-template-columns: 3fr 4fr;
    }
  }

  .left-column {
    @media (min-width: 1200px) {
      padding-inline-end: var(--app-padding-inline);
    }

    .legal {
      margin-block-start: 3rem;
      font-size: var(--font-size-xxs);
    }
  }

  .right-column {
    .background-shape {
      position: static;
    }

    h2 {
      font-size: var(--font-size-xl);
    }
  }
}
</style>
