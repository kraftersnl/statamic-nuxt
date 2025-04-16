<script setup lang="ts">
defineProps<{ data?: ButtonContentBlock }>();
</script>

<template>
  <Button
    :to="data?.button_link"
    :label="data?.button_label"
    :variant="data?.button_variant?.key"
    :target="data?.button_link?.startsWith('http') ? '_blank' : undefined"
    :external="data?.button_link?.startsWith('http')"
    icon-pos="end"
    size="lg"
    class="content-block-link"
  >
    <template #icon>
      <StatamicIcon v-if="data?.button_icon" :icon="data.button_icon" />
    </template>
  </Button>
</template>

<style>
.content-block-link {
  max-width: max-content;
}
</style>
