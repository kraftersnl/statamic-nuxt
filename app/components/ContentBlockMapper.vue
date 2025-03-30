<script setup lang="ts">
defineProps<{ content?: StatamicContentBlock[] }>();
</script>

<template>
  <div class="bard-content">
    <template v-for="contentBlock in content" :key="contentBlock.id">
      <div v-if="contentBlock.type === 'text'" v-html="contentBlock.text" />

      <StatamicImage
        v-if="contentBlock?.type === 'image'"
        :data="contentBlock.image"
        :caption="contentBlock.image_caption"
      />

      <StatamicLink
        v-if="contentBlock?.type === 'button'"
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
      />
    </template>
  </div>
</template>

<style>
.bard-content {
  margin-inline: auto;
  max-width: 860px;
  display: grid;
  gap: 1rem;

  figure {
    margin-block-end: 2rem;
    border-radius: var(--radius-sm);
  }

  ul,
  ol {
    margin-block-end: 1rem;
  }

  ul > li::marker {
    color: var(--color-accent-text);
  }
}
</style>
