<script setup lang="ts">
defineProps<{
  list?: MenuItem[];
}>();
</script>

<template>
  <nav aria-label="Footer navigatie">
    <ul class="footer-nav-list" role="list">
      <li v-for="item in list" :key="item.id">
        <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.footer-nav-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 1.5rem;
  row-gap: 0.75rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  a {
    color: var(--color-grey-text);

    &:hover {
      color: var(--color-text);
    }
  }
}
</style>
