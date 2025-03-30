<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>

<template>
  <span v-if="text" class="footer-copyright">
    &copy; {{ new Date().getFullYear() }}
    {{ text }}
  </span>
</template>
