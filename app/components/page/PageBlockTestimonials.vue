<script setup lang="ts">
import { useScroll } from '@vueuse/core';

defineProps<{ data?: TestimonialsBlock }>();

const testimonialList = ref<StatamicTestimonialEntry[]>();

const { data: entries } = await useAsyncData<{
  data: StatamicTestimonialEntry[];
}>('testimonials', () =>
  $fetch(`/api/collections/testimonials/entries/`, {
    baseURL: useRuntimeConfig().public.statamicUrl,
    query: {
      fields: 'id,title,sub_title,summary,image',
    },
  })
);

testimonialList.value = entries.value?.data;

const testimonialsWrapperRef = useTemplateRef('testimonialsWrapper');

const { x, arrivedState } = useScroll(testimonialsWrapperRef, {
  behavior: 'smooth',
});

const scrollWidth = computed(
  () =>
    (testimonialsWrapperRef.value?.scrollWidth ?? 0) /
    (testimonialList.value?.length ?? 0)
);
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'testimonials-block',
      data?.background_color?.key &&
        `background-color--${data.background_color.key}`,
    ]"
  >
    <div class="background-shapes-wrapper">
      <CircleDots />
      <CircleStripes />
    </div>

    <div class="page-block-content">
      <div class="left-column">
        <DoubleTitle :title="data?.title" :super-title="data?.super_title" />
      </div>

      <div class="testimonials-wrapper">
        <ul ref="testimonialsWrapper" role="list" class="testimonials-list">
          <li v-for="t in testimonialList" :key="t.id">
            <StatamicTestimonial :data="t" />
          </li>
        </ul>

        <ClientOnly>
          <div
            v-if="(testimonialList?.length ?? 0) > 1"
            class="carousel-controls"
          >
            <Button
              icon="material-symbols:arrow-back"
              radius="full"
              label="Vorige ervaring"
              hide-label
              :disabled="arrivedState.left"
              @click="x = x + -1 * scrollWidth"
            />
            <Button
              icon="material-symbols:arrow-forward"
              radius="full"
              label="Volgende ervaring"
              hide-label
              :disabled="arrivedState.right"
              @click="x = x + scrollWidth"
            />
          </div>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style>
.page-block.testimonials-block {
  overflow: clip;
  isolation: isolate;

  h2 {
    margin-block-end: 5rem;
  }

  .page-block-content {
    display: grid;
    padding-block: 5rem;
    padding-inline: 2rem;

    @media (min-width: 1200px) {
      padding-inline: 5rem;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    p {
      margin-block-end: 1.5rem;

      &:first-of-type {
        margin-block-start: 3rem;
      }
    }

    .testimonials-wrapper {
      display: grid;
    }

    .testimonials-list {
      padding-block: 2.5rem;
      display: flex;
      gap: 4rem;
      grid-auto-flow: column;
      overflow: scroll;
      scroll-snap-type: x mandatory;

      &:focus-visible {
        outline: 2px solid white;
        outline-offset: 0.5rem;
        border-radius: var(--radius-xs);
      }

      li {
        width: 100%;
        scroll-snap-align: center;
        flex: none;
      }
    }
    .carousel-controls {
      margin-block-start: 1.5rem;
      display: flex;
      gap: 1rem;
      .button {
        --focus-color: white;
      }
    }
  }

  .background-shapes-wrapper {
    position: relative;
  }

  .background-shape {
    position: absolute;
    z-index: -1;
  }

  .background-shape--circle-stripes {
    --color-shape: var(--color-accent-green);
    opacity: 100%;
    top: 200px;
    width: min(100%, 140px);
    height: auto;
    right: var(--app-padding-inline);

    @media (min-width: 1200px) {
      left: 460px;
      right: auto;
    }
  }

  .background-shape--circle-dots {
    opacity: 25%;
    height: auto;
    width: min(80vw, 400px);
    top: 180px;
    left: 2rem;

    @media (min-width: 1200px) {
      top: 100px;
      left: 5rem;
    }
  }
}
</style>
