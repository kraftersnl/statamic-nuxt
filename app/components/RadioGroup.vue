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
            <input
              :id="option.key"
              v-model="radioValue"
              :value="option.key"
              :name="name"
              type="radio"
            />

            <label :for="option.key">{{ option.value }}</label>
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
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    margin-block-end: 1rem;
  }

  input[type='radio'] {
    margin: 0;
    margin-top: 1px;
    width: 1rem;
    height: 1rem;
  }

  label {
    padding-inline-start: 0.5rem;
    font-size: var(--font-size-sm);
  }

  .radio-list {
    display: grid;
    /* gap: 0.5rem; */
  }
}
</style>
