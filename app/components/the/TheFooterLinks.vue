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
      <span>{{ data.email }}</span>
    </NuxtLink>

    <NuxtLink v-if="data?.phone" :to="'tel:' + data.phone">
      <Icon name="heroicons-solid:phone" class="nav-list-item-icon" />
      <span>{{ data.phone }}</span>
    </NuxtLink>

    <div v-if="data?.address" class="address-wrapper">
      <Icon name="heroicons-solid:location-marker" class="nav-list-item-icon" />
      <address>
        {{ data.address }}
      </address>
    </div>

    <div v-if="data?.po_box" class="address-wrapper">
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

    <NuxtLink
      v-if="data?.facebook"
      :to="data.facebook"
      target="_blank"
      external
    >
      <Icon name="mdi:facebook" />
      <span>Facebook</span>
    </NuxtLink>

    <NuxtLink
      v-if="data?.instagram"
      :to="data.instagram"
      target="_blank"
      external
    >
      <Icon name="mdi:instagram" />
      <span>Instagram</span>
    </NuxtLink>

    <NuxtLink
      v-if="data?.linkedin"
      :to="data.linkedin"
      target="_blank"
      external
    >
      <Icon name="mdi:linkedin" />
      <span>LinkedIn</span>
    </NuxtLink>
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
    color: var(--color-accent-text);
    margin-block-end: 0.5rem;
  }

  .nav-list-item-icon {
    color: var(--color-accent);
    margin-block-start: 0.2em;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: var(--color-accent);

      .iconify {
        color: var(--color-accent);
      }
    }
  }

  .contact-wrapper {
    display: grid;
    gap: 0.5rem;
  }

  .address-wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
  }
}
</style>
