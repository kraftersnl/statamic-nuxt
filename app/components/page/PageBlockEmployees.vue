<script setup lang="ts">
defineProps<{ data?: EmployeesBlock }>();

const { data: entries } = await useAsyncData<{
  data: StatamicEmployeeEntry[];
}>('testimonials', () =>
  $fetch(`/api/collections/employees/entries/`, {
    baseURL: useRuntimeConfig().public.statamicUrl,
    query: {
      fields: 'id,title,sub_title,summary,image',
    },
  })
);
</script>

<template>
  <section :id="data?.anchor" class="page-block employees-block">
    <div class="page-block-content">
      <ContentBlockMapper :content="data?.content" />

      <ul v-if="entries?.data?.length" role="list" class="entries-list">
        <li v-for="entry in entries?.data" :key="entry.id">
          <StatamicEmployee :data="entry" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
.employees-block {
  .page-block-content {
    padding-block: 4rem;
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
