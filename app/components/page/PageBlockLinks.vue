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

            <Icon name="material-symbols:arrow-right-alt-rounded" />
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
    margin-inline: calc(var(--app-padding-inline) * -1);
    transition: color var(--duration-sm), background-color var(--duration-sm);

    @media (min-width: 1440px) {
      margin-inline: 0;
    }

    &:not(:last-child) {
      border-block-end: 1px solid var(--color-grey-light);
    }

    &:hover {
      color: var(--color-accent-text);
      /* background-color: var(--color-semi-transparent); */
    }
  }

  .link-item {
    padding-block: 1.5rem;
    padding-inline: var(--app-padding-inline);
    text-decoration: none;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr auto;
    }

    @media (min-width: 1440px) {
      padding-inline: 0.75rem;
    }

    @supports (animation-timeline: view()) {
      opacity: 0;

      @media (prefers-reduced-motion: no-preference) {
        animation: viewportFadeUp linear forwards;
        animation-timeline: view();
        animation-range: entry;
      }
    }

    h3 {
      margin-block: 0;
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-lg);

      @media (min-width: 1024px) {
        font-size: var(--font-size-xl);
      }
    }

    p {
      margin-block: 0;
    }

    .iconify {
      font-size: var(--font-size-xl);
      color: var(--color-accent-graphic);
      margin-inline-start: auto;
    }
  }
}
</style>
