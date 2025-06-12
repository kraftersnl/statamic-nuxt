<script setup lang="ts">
const props = defineProps<{ data: ProjectsBlock }>();

const { data: entries } = await useAsyncData<{
  data: StatamicProjectEntry[];
}>('projects', () =>
  $fetch(`/api/collections/projects/entries/`, {
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
    :class="[
      'page-block',
      'projects-block',
      data.background_color?.key &&
        `background-color--${data.background_color.key}`,
    ]"
  >
    <div class="page-block-content">
      <ul v-if="data?.entries?.length" role="list" class="projects-list">
        <li v-for="entry in data.entries" :key="entry.id">
          <StatamicProject :data="entry" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
.page-block.projects-block {
  .page-block-content {
    display: grid;
    padding-block-start: 5rem;
    padding-inline: 2rem;

    p {
      margin-block-end: 3rem;
    }

    @media (min-width: 1200px) {
      padding-block-start: 8rem;
      padding-inline: 5rem;
    }
  }
}
</style>
