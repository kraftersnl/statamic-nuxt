<script setup lang="ts">
defineProps<{ data?: StepsBlock }>();
</script>

<template>
  <section :id="data?.anchor" :class="['page-block', 'steps-block']">
    <div class="page-block-content">
      <ol role="list" class="steps-list">
        <li v-for="step in data?.list" :key="step.id" class="step-item">
          <StatamicIcon :icon="step.icon" />
          <h3 class="step-title">{{ step.title }}</h3>
        </li>
      </ol>
    </div>
  </section>
</template>

<style>
.page-block.steps-block {
  .page-block-content {
    padding-block-end: 8rem;

    @media (min-width: 1200px) {
      display: grid;
      padding-inline: var(--app-padding-inline);
    }
  }

  .steps-list {
    counter-reset: steps;
    container-type: inline-size;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  .step-item {
    @media (prefers-reduced-motion: no-preference) {
      animation: viewportScaleUp linear;
      animation-timeline: view();
      animation-range: entry;
    }

    counter-increment: steps;
    position: relative;
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 1.5rem;
    width: 280px;
    height: 160px;
    border: 1.5px solid var(--color-grey-bg);
    border-radius: var(--radius-sm);

    .step-title {
      &::before {
        color: var(--color-accent-text);
        content: counter(steps) '. ';
      }
    }

    @container (max-width: 583px) {
      + .step-item::after {
        content: '';
        position: absolute;
        top: calc(-1.5rem - 2px);
        left: 50%;
        height: calc(1.5rem + 1px);
        width: 2px;
        background-color: var(--color-grey-bg);
      }
    }

    @container (min-width: 1200px) {
      + .step-item::after {
        content: '';
        position: absolute;
        left: calc(-1.5rem - 2px);
        top: 50%;
        width: calc(1.5rem + 1px);
        height: 2px;
        background-color: var(--color-grey-bg);
      }
    }

    h3 {
      font-size: var(--font-size-md);
    }

    .icon {
      margin-block-start: 0.5rem;
      color: var(--color-accent-graphic);
      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
}
</style>
