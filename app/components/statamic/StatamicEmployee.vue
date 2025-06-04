<script setup lang="ts">
defineProps<{
  data?: StatamicEmployeesEntry;
}>();
</script>

<template>
  <div class="employee-entry">
    <h3 v-if="data?.title" class="employee-name">
      {{ data.title }}
    </h3>

    <span v-if="data?.sub_title" class="employee-jobtitle">
      {{ data.sub_title }}
    </span>

    <StatamicImage
      v-if="data?.image"
      :data="data.image"
      width="120"
      height="120"
    />
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
    white-space: nowrap;
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
      height: 120px;
      border-radius: var(--radius-full);
    }
  }
}
</style>
