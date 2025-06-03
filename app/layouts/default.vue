<script setup lang="ts"></script>

<template>
  <div class="app-layout">
    <main id="main" aria-label="Hoofdcontent">
      <slot />
    </main>
  </div>
</template>

<style>
.app-layout {
  min-height: calc(100dvh - var(--app-header-height));

  main {
    display: grid;
  }
}
</style>
