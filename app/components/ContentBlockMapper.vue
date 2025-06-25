<script setup lang="ts">
const props = defineProps<{ content?: StatamicContentBlock[] }>();
</script>

<template>
  <div class="bard-content">
    <template v-for="contentBlock in content" :key="contentBlock.id">
      <div v-if="contentBlock.type === 'text'" v-html="contentBlock.text" />

      <StatamicIcon
        v-else-if="contentBlock?.type === 'icon'"
        :icon="contentBlock.icon"
        class="statamic-icon"
      />

      <StatamicIconList
        v-else-if="contentBlock?.type === 'list'"
        :data="contentBlock.list"
      />

      <StatamicImage
        v-else-if="contentBlock?.type === 'image'"
        :data="contentBlock.image"
        :caption="contentBlock.image_caption"
      />

      <StatamicButton
        v-else-if="contentBlock?.type === 'button'"
        :data="contentBlock"
      />

      <StatamicButtonGroup
        v-else-if="contentBlock?.type === 'button_group'"
        :data="contentBlock"
      />

      <StatamicQuote
        v-else-if="contentBlock?.type === 'quote'"
        :data="contentBlock"
      />

      <LazyStatamicForm
        v-else-if="contentBlock?.type === 'form'"
        :data="contentBlock"
      />

      <VideoPlayer
        v-else-if="contentBlock?.type === 'video'"
        :url="contentBlock?.video_url"
        :caption="contentBlock?.image_caption"
      />
    </template>
  </div>
</template>
