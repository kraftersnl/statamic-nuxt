<script setup lang="ts">
defineProps<{
  data?: StatamicEmployeesEntry;
  variant?: 'default' | 'small';
}>();
</script>

<template>
  <div
    class="employee-entry"
    :class="{ 'employee-entry--small': variant === 'small' }"
  >
    <div class="employee-details">
      <h3 v-if="data?.title" class="employee-name">
        {{ data.title }}
      </h3>

      <span v-if="data?.sub_title" class="employee-jobtitle">
        {{ data.sub_title }}
      </span>

      <p v-if="data?.email || data?.phone" class="employee-contact">
        <NuxtLink :to="'mailto:' + data.email">
          {{ data.email }}
        </NuxtLink>
        <NuxtLink :to="'tel:' + data.phone?.replaceAll(' ', '')">
          <address>
            {{ data.phone }}
          </address>
        </NuxtLink>
      </p>
    </div>

    <StatamicImage
      v-if="data?.image"
      :data="data.image"
      width="120"
      height="120"
    />
    <VisualPlaceholder v-else />
  </div>
</template>

<style>
.employee-entry {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;

  &.employee-entry--small {
    .image-wrapper {
      width: 6rem;
      height: 6rem;

      img {
        border-radius: var(--radius-full);
      }
    }
  }

  .employee-name {
    font-size: var(--font-size-md);
    margin-block: 0;
    white-space: nowrap;
  }

  .employee-jobtitle {
    font-size: var(--font-size-sm);
    color: var(--color-grey-text);
  }

  .employee-contact {
    display: grid;
    gap: 0.25em;
    font-size: var(--font-size-xs);
    color: var(--color-text);

    a:hover {
      color: var(--color-accent-text);
    }
  }

  figure,
  .visual-placeholder {
    order: -1;
    height: 300px;
    width: 300px;
  }
}
</style>
