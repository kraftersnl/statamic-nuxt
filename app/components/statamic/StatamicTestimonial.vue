<script setup lang="ts">
defineProps<{
  data?: StatamicTestimonialEntry;
}>();
</script>

<template>
  <div class="testimonial-card">
    <div class="testimonial-top">
      <StatamicImage
        :data="data?.image"
        width="48"
        height="48"
        class="testimonial-avatar"
      />

      <div class="testimonial-author">
        <h3 class="author-name">{{ data?.title }}</h3>
        <span class="author-subtitle">{{ data?.sub_title }}</span>
      </div>
    </div>

    <div class="testimonial-content">
      <blockquote>{{ data?.summary }}</blockquote>
    </div>
  </div>
</template>

<style>
.testimonial-card {
  .testimonial-author {
    display: grid;
  }

  .author-name {
    font-size: var(--font-size-sm);
    margin-block-end: 0;
  }

  .author-subtitle {
    font-size: var(--font-size-xs);
  }

  .testimonial-top {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
  }

  .testimonial-avatar {
    .statamic-image {
      width: 3rem;
      height: 3rem;
      border-radius: var(--radius-full);
    }
  }

  blockquote {
    border: none;
    padding: 0;
    margin-block-start: 3rem;
    line-height: 1.35;
    font-size: var(--font-size-lg);

    &:not(:empty)::before {
      content: open-quote;
    }
    &:not(:empty)::after {
      content: close-quote;
    }
  }
}
</style>
