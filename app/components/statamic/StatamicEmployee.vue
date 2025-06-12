<script setup lang="ts">
defineProps<{
  data?: StatamicEmployeesEntry;
}>();
</script>

<template>
  <div class="employee-entry">
    <div class="employee-details">
      <h3 v-if="data?.title" class="employee-name">
        {{ data.title }}
      </h3>

      <span v-if="data?.sub_title" class="employee-jobtitle">
        {{ data.sub_title }}
      </span>
    </div>
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
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  @container (min-width: 400px) {
    text-align: left;
    grid-template-columns: 120px auto;
  }

  .employee-name {
    font-size: var(--font-size-md);
    margin-block: 0;
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
