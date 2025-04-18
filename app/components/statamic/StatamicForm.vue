<script setup lang="ts">
const props = defineProps<{
  data: FormContentBlock | FormBlock;
}>();

const { currentRoute } = useRouter();

const submittingForm = ref(false);
const showErrorMessage = ref(false);
const showSuccessMessage = ref(false);

const { data: form } = await useAsyncData<{ data: StatamicForm }>(
  props.data.form?.handle ?? 'form',
  () =>
    $fetch('/api/forms/' + props.data.form?.handle, {
      baseURL: useRuntimeConfig().public.statamicUrl,
    }),
  { lazy: true }
);

async function handleSubmit(formData: FormData) {
  try {
    submittingForm.value = true;

    const response = await $fetch<{
      redirect?: string;
      submission?: unknown;
      submission_created?: boolean;
      success?: boolean;
      errors: string[];
    }>(`/api/forms/${props.data.form?.handle}`, {
      method: 'POST',
      body: formData,
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });

    if (response?.success) {
      showSuccessMessage.value = true;
    } else {
      showErrorMessage.value = true;
    }
  } catch (error) {
    console.log(error);
    showErrorMessage.value = true;
  } finally {
    submittingForm.value = false;
  }
}
</script>

<template>
  <Form
    v-if="form?.data?.fields && Object.keys(form.data.fields)?.length"
    @submit="handleSubmit"
  >
    <template v-for="field in form.data.fields" :key="field.handle">
      <RadioGroup
        v-if="field.type === 'radio'"
        class="form-group"
        :name="field.handle"
        :options="field.options"
        :label="field.display"
      />

      <CheckboxGroup
        v-if="field.type === 'checkboxes'"
        class="form-group"
        :name="field.handle"
        :options="field.options"
        :label="field.display"
        :required="field.validate?.includes('required')"
      />

      <ClientOnly v-if="field.handle === 'source'">
        <input type="hidden" :value="currentRoute.fullPath" name="source" />
      </ClientOnly>

      <Input
        v-else-if="field.type === 'text'"
        :label="field.display"
        :type="field.input_type"
        :name="field.handle"
        :autocomplete="field.autocomplete"
        :required="field.validate?.includes('required')"
        size="lg"
        :style="`--col-width: ${field.width}%`"
      />

      <Textarea
        v-else-if="field.type === 'textarea'"
        :label="field.display"
        :name="field.handle"
        :required="field.validate?.includes('required')"
        :style="`--col-width: ${field.width}%`"
      />
    </template>

    <div aria-live="polite">
      <Callout
        v-if="showSuccessMessage"
        color="green"
        :content="
          useRuntimeConfig().public.formSuccessMessage ||
          'Bedankt voor je bericht, we nemen zo snel mogelijk contact met je op.'
        "
      />
    </div>

    <div role="alert">
      <Callout v-if="showErrorMessage" color="red">
        Er ging helaas iets mis. Probeer het later opnieuw of neem contact met
        ons op via
        <a :href="'mailto:' + useRuntimeConfig().public.contactEmail">{{
          useRuntimeConfig().public.contactEmail
        }}</a
        >.
      </Callout>
    </div>

    <Button
      type="submit"
      icon="paper-airplane"
      size="lg"
      variant="primary"
      class="form-button"
      :label="data.form_button_label || 'Verzenden'"
      :loading="submittingForm"
      :disabled="showSuccessMessage || showErrorMessage"
      :style="`--col-width: 10rem`"
    />
  </Form>
</template>

<style></style>
