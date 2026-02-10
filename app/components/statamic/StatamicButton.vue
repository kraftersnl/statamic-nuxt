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
    v-if="data?.button_link?.url"
    :to="data?.button_link?.url"
    :label="data?.button_label"
    :variant="variant"
    :icon="data?.icon"
    :icon-pos="data?.button_icon_position?.key ?? 'end'"
    :target="data?.button_link?.url?.startsWith('http') ? '_blank' : undefined"
    :external="data?.button_link?.url?.startsWith('http')"
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
