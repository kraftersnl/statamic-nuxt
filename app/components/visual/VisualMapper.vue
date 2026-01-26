<script setup lang="ts">
defineProps<{
  visual?: string;
}>();
</script>

<template>
  <VisualShapeOne v-if="visual === 'shapes_one'" />
  <VisualShapeTwo v-if="visual === 'shapes_two'" />
  <VisualShapeThree v-if="visual === 'shapes_three'" />

  <VisualKraftK v-if="visual === 'kraft_k'" />
  <VisualKraftR v-if="visual === 'kraft_r'" />
  <VisualKraftA v-if="visual === 'kraft_a'" />
  <VisualKraftF v-if="visual === 'kraft_f'" />
  <VisualKraftT v-if="visual === 'kraft_t'" />

  <CircleStripes v-if="visual === 'circle_stripes'" />
  <CircleDots v-if="visual === 'circle_dots'" />
  <RectangleDots v-if="visual === 'rectangle_dots'" />
</template>
