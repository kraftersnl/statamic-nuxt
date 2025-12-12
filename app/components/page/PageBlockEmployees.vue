<script setup lang="ts">
defineProps<{ data?: EmployeesBlock }>();

const { data: entries } = await useAsyncData<{
  data: StatamicEmployeeEntry[];
}>('employees', () =>
  $fetch(`/api/collections/employees/entries/`, {
    baseURL: useRuntimeConfig().public.statamicUrl,
    query: {
      fields: 'id,title,sub_title,summary,image',
    },
  })
);
</script>

<template>
  <section
    :id="data?.anchor"
    class="page-block employees-block shape-position--block-end"
  >
    <div class="page-block-content">
      <RectangleDots />

      <div class="left-column">
        <DoubleTitle :title="data?.title" :super-title="data?.super_title" />
      </div>

      <p v-if="data?.text" class="employees-description">
        {{ data.text }}
      </p>

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
    padding-block: 5rem;
    display: grid;
    justify-content: center;

    @media (min-width: 1200px) {
      padding-block-end: 8rem;
      display: grid;
      padding-inline: var(--app-padding-inline);
      grid-template-columns: 1fr 1fr;
    }
  }

  .employees-description {
    @media (min-width: 1200px) {
      margin-block-start: 7rem;
      margin-block-end: 4rem;
    }
  }

  .entries-list {
    container-type: inline-size;
    grid-column: 1 / -1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 1.5rem;
    row-gap: 4rem;
    margin-block: 4rem;

    @media (min-width: 1200px) {
      justify-content: start;
    }

    > * {
      flex-basis: 24rem;
    }
  }
}
</style>
