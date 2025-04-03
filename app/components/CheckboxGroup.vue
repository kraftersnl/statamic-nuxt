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

const checkboxValues = ref<string[]>([]);
</script>

<template>
  <div class="checkboxes-wrapper">
    <template v-if="options">
      <fieldset>
        <legend class="visualyhidden">
          {{ label }}
        </legend>

        <ul role="list" class="checkbox-list">
          <li v-for="option in options" :key="'checkbox-' + option.key">
            <Checkbox
              v-model="checkboxValues"
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
.checkboxes-wrapper {
  margin-block-end: 0.5rem;

  legend {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    margin-block-end: 1rem;
  }

  .checkbox-list {
    display: grid;
    gap: 0.5rem;
  }
}
</style>
