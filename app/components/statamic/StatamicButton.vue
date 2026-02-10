<script setup lang="ts">
const props = defineProps<{ data?: ButtonContentBlock }>();

const variant = computed(() =>
  props.data?.button_variant?.key === 'primary'
    ? 'cta'
    : props.data?.button_variant?.key
);
</script>

<template>
  <Button
    v-if="data?.button_link"
    :to="data?.button_link"
    :label="data?.button_label"
    :variant="variant"
    :icon="data?.icon"
    :icon-pos="data?.button_icon_position?.key ?? 'end'"
    :target="
      typeof data?.button_link === 'string' &&
      data.button_link.startsWith('http')
        ? '_blank'
        : undefined
    "
    :external="
      typeof data?.button_link === 'string' &&
      data.button_link.startsWith('http')
    "
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
