<script setup lang="ts">
defineProps<{
  data?: StatamicGlobalCompany;
}>();
</script>

<template>
  <div
    v-if="data?.email || data?.phone || data?.address"
    class="contact-wrapper"
  >
    <h2>Contact</h2>

    <NuxtLink v-if="data?.email" :to="'mailto:' + data.email">
      <Icon name="heroicons-solid:mail" class="nav-list-item-icon" />
      <address>{{ data.email }}</address>
    </NuxtLink>

    <NuxtLink v-if="data?.phone" :to="'tel:' + data.phone">
      <Icon name="heroicons-solid:phone" class="nav-list-item-icon" />
      <address>{{ data.phone }}</address>
    </NuxtLink>

    <div v-if="data?.address" class="grid-list-item">
      <Icon name="heroicons-solid:location-marker" class="nav-list-item-icon" />
      <address>
        {{ data.address }}
      </address>
    </div>

    <div v-if="data?.po_box" class="grid-list-item">
      <Icon name="heroicons-solid:location-marker" class="nav-list-item-icon" />
      <address>
        {{ data.po_box }}
      </address>
    </div>
  </div>

  <div
    v-if="data?.linkedin || data?.facebook || data?.instagram"
    class="contact-wrapper"
  >
    <h2>Social Media</h2>

    <div v-if="data?.facebook" class="grid-list-item">
      <Icon name="mdi:facebook" class="social-icon" />
      <NuxtLink :to="data.facebook" target="_blank" external>
        <span class="visuallyhidden">{{ data?.title }} op</span>
        <span>Facebook</span>
      </NuxtLink>
    </div>

    <div v-if="data?.instagram" class="grid-list-item">
      <Icon name="mdi:instagram" class="social-icon" />
      <NuxtLink :to="data.instagram" target="_blank" external>
        <span class="visuallyhidden">{{ data?.title }} op</span>
        <span>Instagram</span>
      </NuxtLink>
    </div>

    <div v-if="data?.linkedin" class="grid-list-item">
      <Icon name="mdi:linkedin" class="social-icon" />
      <NuxtLink :to="data.linkedin" target="_blank" external>
        <span class="visuallyhidden">{{ data?.title }} op</span>
        <span>LinkedIn</span>
      </NuxtLink>
    </div>
  </div>

  <div v-if="data?.kvk || data?.bank || data?.btw" class="contact-wrapper">
    <h2 v-if="data?.title">{{ data.title }}</h2>

    <dl class="definition-list">
      <template v-if="data?.kvk">
        <dt>KvK</dt>
        <dd>{{ data?.kvk }}</dd>
      </template>

      <template v-if="data?.btw">
        <dt>BTW</dt>
        <dd>{{ data?.btw }}</dd>
      </template>

      <template v-if="data?.bank">
        <dt>Bank</dt>
        <dd>{{ data.bank }}</dd>
      </template>
    </dl>
  </div>
</template>

<style>
.app-footer {
  h2 {
    font-family: var(--font-family);
    font-size: var(--font-size-sm);
    margin-block-end: 0.5rem;
  }

  a {
    color: var(--color-text);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: var(--color-black);
    }
  }

  .nav-list-item-icon {
    color: var(--color-grey-graphic);
    margin-block-start: 0.2em;
  }

  .social-icon {
    font-size: var(--font-size-md);
    margin-block-start: 0.1em;
  }

  [class*='linkedin'] {
    color: #3276c8;
  }

  [class*='facebook'] {
    color: #0866ff;
  }

  [class*='instagram'] {
    background: linear-gradient(
      55.01deg,
      #ff7a00 12.35%,
      #ff0169 56.52%,
      #d300c5 100%
    );
  }

  .contact-wrapper {
    display: grid;
    gap: 0.5rem;
  }

  .grid-list-item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
  }
}
</style>
