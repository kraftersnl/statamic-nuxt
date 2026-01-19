<script setup lang="ts">
defineProps<{ data: ProjectsBlock }>();
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
  @media (prefers-reduced-motion: no-preference) {
    animation: viewportFadeUp linear;
    animation-timeline: view();
    animation-range: entry;
  }

  .page-block-content {
    display: grid;
    padding-block: 5rem;
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
