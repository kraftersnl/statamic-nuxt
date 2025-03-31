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
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.5rem;
  row-gap: 1rem;
}
</style>
