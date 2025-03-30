<script setup lang="ts">
defineProps<{ data?: FormBlock }>();
</script>

<template>
  <section :id="data?.anchor" class="page-block form-block">
    <div class="page-block-content">
      <ContentBlockMapper :content="data?.content" />

      <StatamicForm v-if="data?.form?.handle" :data="data" />
    </div>
  </section>
</template>

<style>
.form-block {
  .page-block-content {
    max-width: 1024px;
    display: grid;
    gap: 5rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
