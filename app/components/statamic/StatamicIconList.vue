<script setup lang="ts">
defineProps<{ data?: ListContentBlock }>();
</script>

<template>
  <component
    :is="data.variant === 'numbers' ? 'ol' : 'ul'"
    v-if="data?.list?.length"
    role="list"
    class="statamic-icon-list"
  >
    <li v-for="item in data.list">
      <StatamicIcon v-if="item.icon" :icon="item.icon" />

      <div class="list-item-content">
        <h3 v-if="item.title" class="list-item-title">{{ item.title }}</h3>

        <p v-if="item.text" class="list-item-text">{{ item.text }}</p>
      </div>
    </li>
  </component>
</template>

<style>
.statamic-icon-list {
  display: grid;
  gap: 1.5rem;

  > li {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.25rem;
    position: relative;

    &:not(:has(.icon)) {
      padding-inline-start: 1.25rem;

      &::before {
        content: '';
        position: absolute;
        top: 1rem;
        left: 0;
        width: 8px;
        height: 8px;
        border-radius: var(--radius-full);
        background-color: var(--color-accent-graphic);
      }
    }
  }

  .list-item-title {
    margin-block: 0;
    font-size: var(--font-size-md);

    &:has(+ .list-item-text) {
      margin-block: 0.5rem;
    }
  }

  .list-item-text {
    margin-block: 0rem;
  }

  .iconify,
  .icon svg {
    color: var(--color-accent-graphic);
    width: var(--font-size-xl);
    height: var(--font-size-xl);
  }
}

ol.statamic-icon-list {
  counter-reset: steps;

  li {
    counter-increment: steps;

    .list-item-title::before {
      content: counter(steps) '. ';
    }
  }
}
</style>
