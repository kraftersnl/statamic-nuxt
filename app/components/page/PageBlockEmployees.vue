<script setup lang="ts">
defineProps<{ data?: EmployeesBlock }>();
</script>

<template>
  <section :id="data?.anchor" class="page-block employees-block">
    <div class="page-block-content">
      <ContentBlockMapper :content="data?.content" />

      <ul v-if="data?.entries?.length" role="list" class="entries-list">
        <li v-for="entry in data?.entries" :key="entry.id">
          <StatamicEmployee :data="entry" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
.employees-block {
  .page-block-content {
    max-width: 800px;
    text-align: center;
    display: grid;
    justify-content: center;
    gap: 4rem;
  }

  .entries-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 2rem;
    row-gap: 4rem;

    > * {
      flex-basis: 12rem;
    }
  }
}
</style>
