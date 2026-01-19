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
  display: grid;
  gap: 2rem;
  border-radius: var(--radius-lg);
  padding: 1.5rem 1.25rem;

  .testimonial-author {
    display: grid;
    gap: 0.25em;
  }

  .author-name {
    font-size: var(--font-size-sm);
    margin-block: 0;
  }

  .author-subtitle {
    font-size: var(--font-size-sm);
  }

  .testimonial-top {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
  }

  .testimonial-avatar {
    .statamic-image {
      width: 4rem;
      height: 4rem;
      border-radius: var(--radius-full);
    }
  }

  .testimonial-content {
    order: -1;
  }

  blockquote {
    border: none;
    padding: 0;
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
