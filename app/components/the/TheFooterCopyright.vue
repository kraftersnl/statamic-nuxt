<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <span class="footer-copyright">
    &copy; {{ new Date().getFullYear() }}
    {{ text }}
  </span>
</template>
