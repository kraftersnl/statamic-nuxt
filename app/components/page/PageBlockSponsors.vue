<script setup lang="ts">
defineProps<{ data?: SponsorsBlock }>();
</script>

<template>
  <section :id="data?.anchor" class="page-block sponsors-block">
    <div class="page-block-content">
      <ContentBlockMapper :content="data?.content" />

      <ul role="list" class="entries-list">
        <li v-for="entry in data?.entries" :key="entry.id">
          <StatamicSponsor :data="entry" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
.sponsors-block {
  .page-block-content {
    padding-block: 2rem 8rem;
    text-align: center;
    display: grid;
    justify-content: center;
    gap: 4rem;

    p {
      font-size: var(--font-size-lg);
    }
  }

  .entries-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 4rem;
    column-gap: 2.5rem;

    > li {
    }
  }
}
</style>
