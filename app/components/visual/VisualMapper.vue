<script setup lang="ts">
defineProps<{
  visual?: string;
}>();
</script>

<template>
  <VisualShapeOne v-if="visual === 'shapes_one'" />

  <VisualKraftK v-if="visual === 'kraft_k'" />
  <VisualKraftR v-if="visual === 'kraft_r'" />
  <VisualKraftA v-if="visual === 'kraft_a'" />
  <VisualKraftF v-if="visual === 'kraft_f'" />
  <VisualKraftT v-if="visual === 'kraft_t'" />
</template>
