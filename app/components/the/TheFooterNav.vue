<script setup lang="ts">
defineProps<{
  navList: MenuItem;
}>();
</script>

<template>
  <nav aria-label="Footer navigatie">
    <ul class="footer-nav-list" role="list">
      <li v-for="item in navList" :key="item.id">
        <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.footer-nav-list {
  flex-grow: 1;
}
</style>
