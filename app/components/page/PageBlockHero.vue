<script setup lang="ts">
const props = defineProps<{ data?: HeroBlock }>();

const imageBg = computed(
  () => props.data?.image && props.data?.image_position?.key === 'background'
);
const imageFirst = computed(
  () => props.data?.image && props.data?.image_position?.key?.endsWith('-start')
);
const imageLast = computed(
  () => props.data?.image && props.data?.image_position?.key?.endsWith('-end')
);
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'hero-block',
      `image-position--${data?.image_position?.key}`,
      `background-color--${data.background_color?.key}`,
    ]"
    :style="[
      data?.image_max_height && `--image-max-height: ${data?.image_max_height}`,
      imageBg && `background-image: url(${data?.image?.permalink})`,
    ]"
  >
    <div class="hero-block-wrapper">
      <StatamicImage
        v-if="imageFirst"
        class="hero-image"
        loading="eager"
        :data="data?.image"
        :class="[data?.full_width_image && 'image--full-width']"
        width="320"
        height="180"
        sizes="mobile:640px normal:960px big:1440px"
      />

      <div class="page-block-content">
        <h1 v-if="data?.title">{{ data.title }}</h1>

        <ContentBlockMapper :content="data?.content" />
      </div>

      <StatamicImage
        v-if="imageLast"
        class="hero-image"
        loading="eager"
        :data="data?.image"
        :class="[data?.full_width_image && 'image--full-width']"
        width="320"
        height="180"
        :placeholder="[64, 32, 90, 250]"
      />
    </div>
  </section>
</template>

<style>
.hero-block {
  display: grid;
  min-height: calc(
    100svh - var(--app-header-height) - var(--app-top-header-height)
  );

  h1 {
    max-width: min(100%, 640px);
    margin-block-end: 0;
    font-size: min(calc(var(--font-size-lg) + 4vw), var(--font-size-xxxxxl));
  }

  p {
    font-size: min(calc(var(--font-size-sm) + 1vw), var(--font-size-lg));
  }

  .hero-block-wrapper {
    width: 100%;
    display: grid;
    align-items: center;
    margin-inline: auto;
    row-gap: 4rem;
  }

  .hero-image {
    img {
      width: 100%;
    }
  }
}

.hero-block.image-position--background {
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
  background-repeat: no-repeat;

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, hsl(0 0 0 / 75%));

    @media (min-width: 1024px) {
      background: linear-gradient(to bottom, transparent 50%, hsl(0 0 0 / 50%));
    }
  }

  h1 {
    color: white;
  }

  .bard-content {
    color: white;
    margin-inline: 0;
    max-width: min(100%, 640px);
  }

  .page-block-content {
    z-index: 1;
    width: 100%;
    display: grid;
    text-align: left;
    padding-block: var(--app-header-height);
  }
}

.hero-block.image-position--block-start {
  .page-block-content {
    padding-block: var(--app-header-height);
  }
}

.hero-block.image-position--block-end {
  padding-block: var(--app-header-height) calc(2 * var(--app-header-height));
}

.hero-block.image-position--inline-end {
  .page-block-content {
    padding-block-start: 4rem;
  }

  @media (min-width: 1280px) {
    .hero-block-wrapper {
      grid-template-columns:
        1fr calc(var(--app-max-width) / 2)
        calc(var(--app-max-width) / 2)
        1fr;
    }

    .page-block-content {
      grid-column: 2 / span 1;
      padding-inline-end: 4rem;
    }

    .hero-image {
      grid-column: 3 / span 2;

      img {
        width: 100%;
        height: calc(
          100svh - var(--app-header-height) - var(--app-top-header-height)
        );
      }
    }
  }

  .hero-block.image-position--inline-start {
    .hero-block-wrapper {
      grid-template-columns:
        1fr calc(var(--app-max-width) / 2)
        calc(var(--app-max-width) / 2)
        1fr;
    }
    .page-block-content {
      grid-column: 3 / span 1;
      padding-inline-start: 4rem;
    }

    .hero-image {
      grid-column: 1 / span 2;

      img {
        width: 100%;
        height: calc(
          100svh - var(--app-header-height) - var(--app-top-header-height)
        );
      }
    }
  }
}
</style>
