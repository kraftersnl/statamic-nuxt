<script setup lang="ts">
defineProps<{
  label: string;
  name: string;
  required?: boolean;
  options?: {
    key?: string;
    value?: string;
  }[];
}>();

const radioValue = ref<string>();
</script>

<template>
  <div class="radios-wrapper">
    <template v-if="options">
      <fieldset>
        <legend>{{ label }}</legend>

        <ul role="list" class="radio-list">
          <li v-for="option in options" :key="'radio-' + option.value">
            <Radio
              v-model="radioValue"
              :label="option.value"
              :value="option.key"
              :name="name"
            />
          </li>
        </ul>
      </fieldset>
    </template>
  </div>
</template>

<style>
.radios-wrapper {
  margin-block-end: 0.5rem;

  legend {
    font-weight: var(--font-weight-bold);
    margin-block-end: 1rem;
  }

  .radio-list {
    display: grid;
    gap: 0.5rem;
  }
}
</style>
