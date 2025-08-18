<script setup lang="ts">
defineProps<{ data?: FormBlock }>();
</script>

<template>
  <section :id="data?.anchor" class="page-block form-block">
    <div class="page-block-content">
      <div class="left-column">
        <DoubleTitle :title="data?.title" :super-title="data?.super_title" />

        <p>{{ data?.description }}</p>

        <template v-if="data?.form?.handle">
          <LazyStatamicForm :data="data" />

          <p v-if="data?.legal" class="legal">
            {{ data.legal }}
          </p>
        </template>

        <ContentBlockMapper v-else :content="data?.content" />
      </div>

      <div class="right-column">
        <div class="background-shapes-wrapper">
          <CircleDots />
        </div>

        <ContentBlockMapper
          v-if="data?.form?.handle"
          :content="data?.content"
        />
      </div>
    </div>
  </section>
</template>

<style>
.page-block.form-block {
  --focus-color: var(--color-accent-graphic);

  .background-shapes-wrapper {
    position: relative;
    display: grid;
    align-content: end;
    padding-inline-start: 2rem;
    margin-block-end: 3rem;

    &::before {
      position: absolute;
      left: -3rem;
      bottom: -0.5rem;
      content: '';
      width: 180px;
      height: 180px;
      display: block;
      border-radius: var(--radius-full);
      background-color: var(--color-accent-grey);
      opacity: 50%;
    }
  }

  .page-block-content {
    padding-block: 3rem 5rem;
    display: grid;
    gap: 4rem;

    @media (min-width: 1200px) {
      padding-block-end: 8rem;
      grid-template-columns: 1fr 1fr;
    }
  }

  .left-column {
    @media (min-width: 1200px) {
      padding-inline-end: var(--app-padding-inline);
    }

    p {
      margin-block: 2rem 4rem;
    }

    .legal {
      margin-block-start: 3rem;
      font-size: var(--font-size-xxs);
    }
  }

  .right-column {
    @media (min-width: 1200px) {
    }

    .background-shape {
      position: static;
    }

    h2 {
      font-size: var(--font-size-xl);
    }
  }
}
</style>
