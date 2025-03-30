<script setup lang="ts">
defineProps<{
  data?: StatamicSponsorsEntry;
}>();
</script>

<template>
  <div class="sponsor-entry">
    <h3 class="sponsor-name">{{ data?.title }}</h3>

    <StatamicImage :data="data?.image" class="sponsor-image" />

    <NuxtLink v-if="data?.website" :to="data.website" target="_blank" external>
      {{ stripTrailingSlash(removeHttp(data.website)) }}
    </NuxtLink>
  </div>
</template>

<style>
.sponsor-entry {
  display: grid;
  justify-content: center;
  text-align: center;

  .sponsor-name {
    font-size: var(--font-size-md);
    margin-block: 2rem 0.65rem;
  }

  a {
    font-size: var(--font-size-xs);
    color: var(--color-grey-text);

    &:hover {
      color: var(--color-text);
    }
  }

  .sponsor-image {
    background-color: white;
    display: grid;
    place-content: center;
    aspect-ratio: 3 / 2;
    order: -1;
    margin-inline: auto;
    padding: 3rem;
    border-radius: var(--radius-md);
  }

  img {
    width: 140px;
  }
}
</style>
