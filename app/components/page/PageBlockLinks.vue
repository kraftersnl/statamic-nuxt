<script setup lang="ts">
defineProps<{ data?: LinksBlock }>();
</script>

<template>
  <section :id="data?.anchor" :class="['page-block', 'links-block']">
    <div class="page-block-content">
      <h2 class="visuallyhidden">Links</h2>
      <ul role="list" class="links-list">
        <li v-for="item in data?.list" :key="item.id" class="links-list-item">
          <NuxtLink :to="item.link" class="link-item">
            <h3>{{ item.label }}</h3>

            <p class="link-text">{{ item.description }}</p>

            <Icon name="material-symbols:arrow-right-alt" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
.page-block.links-block {
  .page-block-content {
    padding-block: 4rem;
  }

  .links-list {
    counter-reset: steps;
    container-type: inline-size;
    display: grid;
    min-width: 100%;
  }

  .links-list-item {
    min-width: 100%;
    padding-block: 1.5rem;
    padding-inline: var(--app-padding-inline);
    margin-inline: calc(var(--app-padding-inline) * -1);

    &:not(:last-child) {
      border-block-end: 1px solid var(--color-grey-light);
    }

    &:hover {
      background-color: var(--color-grey-light);
    }
  }

  .link-item {
    text-decoration: none;
    min-width: 100%;
    display: grid;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    @container (min-width: 1024px) {
      grid-template-columns: 1fr 1fr auto;
    }

    @media (prefers-reduced-motion: no-preference) {
      animation: viewportFadeUp linear;
      animation-timeline: view();
      animation-range: entry;
    }

    h3 {
      margin-block: 0;
    }

    p {
      margin-block: 0;
      max-width: none;
    }

    .iconify {
      font-size: var(--font-size-lg);
      color: var(--color-accent-graphic);
      margin-inline-start: auto;
    }
  }
}

.dark-mode {
  .page-block.links-block .links-list-item:hover {
    background-color: var(--color-accent-grey);
  }
}
</style>
