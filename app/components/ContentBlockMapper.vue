<script setup lang="ts">
const props = defineProps<{ content?: StatamicContentBlock[] }>();
</script>

<template>
  <div class="bard-content">
    <template v-for="contentBlock in content" :key="contentBlock.id">
      <div v-if="contentBlock.type === 'text'" v-html="contentBlock.text" />

      <StatamicIcon
        v-if="contentBlock?.type === 'icon'"
        :icon="contentBlock.icon"
        class="statamic-icon"
      />

      <StatamicIconList
        v-if="contentBlock?.type === 'list'"
        :data="contentBlock.list"
      />

      <StatamicImage
        v-if="contentBlock?.type === 'image'"
        :data="contentBlock.image"
        :caption="contentBlock.image_caption"
      />

      <StatamicButton
        v-if="contentBlock?.type === 'button'"
        :data="contentBlock"
      />

      <StatamicButtonGroup
        v-if="contentBlock?.type === 'button_group'"
        :data="contentBlock"
      />

      <StatamicQuote
        v-if="contentBlock?.type === 'quote'"
        :data="contentBlock"
      />

      <StatamicForm v-if="contentBlock?.type === 'form'" :data="contentBlock" />

      <VideoPlayer
        v-if="contentBlock?.type === 'video'"
        :url="contentBlock?.video_url"
        :caption="contentBlock?.image_caption"
      />
    </template>
  </div>
</template>

<style>
.bard-content {
  margin-inline: auto;
  display: grid;
  gap: 1rem;

  .statamic-icon svg {
    width: var(--font-size-xxl);
    height: var(--font-size-xxl);
    margin-block-end: 1rem;
  }

  figure {
    margin-block-end: 2rem;
    border-radius: var(--radius-sm);
  }

  p,
  ul,
  ol {
    > a {
      @media (prefers-reduced-motion: no-preference) {
        text-decoration: none;
        border-bottom: 1.5px solid var(--color-text);
        background-image: linear-gradient(var(--color-accent-graphic));
        background-size: 0% 1.5px;
        background-repeat: no-repeat;
        background-position: left bottom;
        transition-timing-function: ease-in-out;
        transition: background-size var(--duration-md),
          border-color var(--duration-sm) var(--duration-sm),
          color var(--duration-sm) var(--duration-sm);

        &:hover {
          transition: background-size var(--duration-md),
            border-color var(--duration-sm), color var(--duration-sm);
          background-size: 100% 1.5px;
          border-color: var(--color-accent-graphic);
          color: var(--color-accent-text);
        }
      }
    }

    &:has(+ h2) {
      margin-block-end: 3rem;
    }
    &:has(+ h3) {
      margin-block-end: 2.5rem;
    }
    &:has(+ h4) {
      margin-block-end: 2rem;
    }
    &:has(+ h5) {
      margin-block-end: 1.5rem;
    }
    &:has(+ h6) {
      margin-block-end: 1rem;
    }
  }

  ul > li::marker {
    color: var(--color-accent-graphic);
  }
}
</style>
