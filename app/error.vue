<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{ error: NuxtError }>();
</script>

<template>
  <div class="error-page">
    <NuxtRouteAnnouncer />

    <SkipLink />

    <TheHeader />

    <NuxtLayout>
      <div class="error-content">
        <h1>Error {{ error?.statusCode }}</h1>

        <p v-html="error?.statusMessage" />

        <Button
          label="Home"
          variant="link"
          font-size="sm"
          icon="material-symbols:chevron-left-rounded"
          class="go-back-button"
          @click="clearError({ redirect: '/' })"
        />
      </div>
    </NuxtLayout>
  </div>
</template>

<style>
.error-page {
  .error-content {
    margin-inline: auto;
    padding-inline: var(--app-padding-inline);
    max-width: var(--app-max-width);
    padding-block: 4rem;

    h1 {
      font-size: var(--font-size-xl);
    }
  }

  .go-back-button {
    margin-block-start: 4rem;
  }
}
</style>
