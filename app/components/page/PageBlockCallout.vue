<script setup lang="ts">
defineProps<{ data?: CalloutBlock }>();
</script>

<template>
  <div :class="['page-block', 'callout-block']">
    <div
      :class="[
        'page-block-content',
        data?.background_color?.key &&
          `background-color--${data.background_color.key}`,
      ]"
    >
      <ContentBlockMapper :content="data?.content" />
    </div>
  </div>
</template>

<style>
.callout-block {
  .bard-content {
    :first-child {
      margin-block-start: 0;
    }
    div > :last-child {
      margin-block-end: 0;
    }
  }

  .page-block-content {
    &.background-color--white {
      .bard-content {
        background-color: var(--color-bg);
      }
    }

    &.background-color--grey {
      .bard-content {
        background-color: var(--color-accent-grey);
      }
    }

    &.background-color--black {
      .bard-content {
        background-color: var(--color-black-bg);
        color: #ffffff;
        border: 1px solid var(--card-border-color);
      }
    }
  }

  .bard-content {
    padding: var(--app-padding-inline);
    margin-block: 2.5rem;

    /* @media (min-width: 768px) {
      margin-inline: var(--app-padding-inline);
    } */
  }
}
</style>
