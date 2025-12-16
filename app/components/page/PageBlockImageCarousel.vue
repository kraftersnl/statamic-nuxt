<script setup lang="ts">
import { useScroll } from '@vueuse/core';

const props = defineProps<{ data?: ImageCarouselBlock }>();

const imageCarouselWrapperRef = useTemplateRef('imageCarouselWrapper');

const { x, arrivedState } = useScroll(imageCarouselWrapperRef, {
  behavior: 'smooth',
});

const scrollWidth = computed(
  () =>
    (imageCarouselWrapperRef.value?.scrollWidth ?? 0) /
    (props.data?.image_list?.length ?? 0)
);
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'image-carousel-block',
      data?.background_color?.key &&
        `background-color--${data.background_color.key}`,
    ]"
  >
    <div class="page-block-content">
      <div class="image-carousel-wrapper">
        <ul
          ref="imageCarouselWrapper"
          role="list"
          class="image-carousel-list hide-scrollbar"
        >
          <li v-for="img in data?.image_list" :key="img.id">
            <StatamicImage :data="img" />
          </li>
        </ul>

        <ClientOnly>
          <div
            v-if="(data?.image_list?.length ?? 0) > 1"
            class="carousel-controls"
          >
            <Button
              icon="material-symbols:arrow-back-rounded"
              size="lg"
              radius="xl"
              label="Vorige afbeelding"
              hide-label
              :disabled="arrivedState.left"
              @click="x = x + -1 * scrollWidth"
            />
            <Button
              icon="material-symbols:arrow-forward-rounded"
              size="lg"
              radius="xl"
              label="Volgende afbeelding"
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
.page-block.image-carousel-block {
  .page-block-content {
    display: grid;

    .image-carousel-wrapper {
      display: grid;

      .statamic-image {
        aspect-ratio: 16/9;
      }
    }

    .image-carousel-list {
      display: flex;
      gap: 1.5rem;
      grid-auto-flow: column;
      overflow: scroll;
      scroll-snap-type: x mandatory;

      @media (prefers-reduced-motion: no-preference) {
        animation: viewportSlideRight linear;
        animation-timeline: view();
        animation-range: entry -250px;
      }

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
      margin-block-start: 2.5rem;
      margin-inline: auto;
      display: flex;
      column-gap: 1.5rem;

      .button {
        --color-grey-bg: var(--color-grey-light);
        --focus-color: white;
      }
    }
  }
}
</style>
