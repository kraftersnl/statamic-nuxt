<script setup lang="ts">
defineProps<{ data?: CustomListItem[] }>();
</script>

<template>
  <ul v-if="data?.length" role="list" class="statamic-icon-list">
    <li v-for="item in data">
      <StatamicIcon :icon="item.icon" />

      <div class="list-item-content">
        <h3 v-if="item.title" class="list-item-title">{{ item.title }}</h3>

        <span v-if="item.text" class="list-item-text">{{ item.text }}</span>
      </div>
    </li>
  </ul>
</template>

<style>
.statamic-icon-list {
  margin-block: 1.5rem;
  display: grid;
  gap: 2rem;

  > li {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.25rem;
  }

  .list-item-title {
    margin-block: 0;
    font-size: var(--font-size-md);
  }

  .list-item-text {
    margin-block: 0.75rem;
  }

  .icon svg {
    color: var(--color-accent-graphic);
    width: var(--font-size-xl);
    height: var(--font-size-xl);
  }
}
</style>
