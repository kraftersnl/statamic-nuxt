<script setup lang="ts">
defineProps<{ data?: FormBlock }>();
</script>

<template>
  <section :id="data?.anchor" class="page-block form-block">
    <div class="page-block-content">
      <div class="left-column">
        <h2 v-if="data?.super_title || data?.title">
          <span v-if="data.super_title" class="super-title">
            {{ data.super_title }}
          </span>

          <span v-if="data.title" class="title">
            {{ data.title }}
          </span>
        </h2>

        <p>{{ data?.description }}</p>

        <StatamicForm v-if="data?.form?.handle" :data="data" />
      </div>

      <div class="right-column">
        <div class="background-shape-wrapper">
          <CircleDots />
        </div>

        <ContentBlockMapper :content="data?.content" />
      </div>
    </div>
  </section>
</template>

<style>
.page-block.form-block {
  --focus-color: var(--color-accent);
  border-bottom: 2px solid var(--color-brown-graphic);

  .background-shape-wrapper {
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
    padding-block: 8rem;
    display: grid;
    gap: 4rem;

    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .left-column {
    @media (min-width: 1200px) {
      padding-inline-end: var(--app-padding-inline);
    }

    h2 {
      display: grid;

      .super-title {
        font-size: var(--font-size-xxxs);
        color: var(--color-grey-graph);
        letter-spacing: 10%;
        text-transform: uppercase;
        margin-block-end: 1.5rem;
      }
    }

    p {
      margin-block: 2rem;
    }
  }

  .right-column {
    @media (min-width: 1200px) {
    }

    .background-shape {
      position: static;
    }

    h2 {
      font-size: var(--font-size-lg);
      max-width: 29ch;
    }
  }
}
</style>
