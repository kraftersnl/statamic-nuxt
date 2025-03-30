<script setup lang="ts">
defineProps<{
  data?: StatamicEmployeesEntry;
}>();
</script>

<template>
  <div class="employee-entry">
    <h3 class="employee-name">{{ data?.title }}</h3>

    <span class="employee-jobtitle">{{ data?.jobtitle }}</span>

    <StatamicImage :data="data?.image" width="120" height="120" />
  </div>
</template>

<style>
.employee-entry {
  display: grid;
  justify-content: center;
  text-align: center;

  .employee-name {
    font-size: var(--font-size-md);
    margin-block: 1rem 0.5rem;
  }

  .employee-jobtitle {
    font-size: var(--font-size-xs);
    color: var(--color-grey-text);
  }

  figure {
    order: -1;
    margin-inline: auto;

    img {
      width: 120px;
      border-radius: var(--radius-full);
    }
  }
}
</style>
