<script setup lang="ts">
const props = defineProps<{
  data?: HeroBlock;
  date?: string;
}>();

const { locale } = useI18n();

const imageBg = computed(
  () =>
    props.data?.image?.permalink &&
    props.data?.image_position?.key === 'background'
);

const imageFirst = computed(
  () =>
    props.data?.image?.permalink &&
    props.data?.image_position?.key?.endsWith('-start')
);

const imageLast = computed(
  () =>
    props.data?.image?.permalink &&
    props.data?.image_position?.key?.endsWith('-end')
);

const backgroundStyles = computed(() => {
  return { backgroundImage: `url('${props.data?.image?.permalink}')` };
});
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'hero-block',
      data?.image_position?.key &&
        `image-position--${data?.image_position.key}`,
      data?.background_color?.key &&
        `background-color--${data.background_color.key}`,
    ]"
    :style="[imageBg && backgroundStyles]"
  >
    <div
      v-if="data?.graphic_visual?.key === 'circles_stripes_dots'"
      class="background-shapes-wrapper"
    >
      <CircleDots />
      <CircleStripes />
    </div>

    <div class="hero-block-wrapper">
      <div v-if="imageFirst" class="hero-image">
        <StatamicImage
          class="hero-image"
          loading="eager"
          :data="data?.image"
          width="960"
          height="960"
        />
      </div>

      <div class="page-block-content">
        <h1 v-if="data?.title">{{ data.title }}</h1>

        <NuxtTime
          v-if="date"
          :datetime="date"
          :locale="locale"
          day="numeric"
          month="long"
          year="numeric"
          class="article-date"
        />

        <ContentBlockMapper :content="data?.content" />
      </div>

      <VisualShapeOne v-if="data?.graphic_visual?.key === 'shapes_one'" />

      <StatamicImage
        v-else-if="imageLast"
        class="hero-image"
        loading="eager"
        :data="data?.image"
        width="960"
        height="960"
        :placeholder="[64, 32, 90, 250]"
      />
    </div>
  </section>
</template>

<style>
.hero-block {
  display: grid;

  h1 {
    max-width: 640px;
    margin-block-end: 0;
    font-size: var(--font-calc-heading-1);
  }

  p {
    font-size: var(--font-calc-body-1);
  }

  .hero-block-wrapper {
    width: 100%;
    display: grid;
    align-items: center;
    align-content: center;
    margin-inline: auto;
    row-gap: 4rem;
  }

  .hero-image {
    z-index: -1;

    @media (prefers-reduced-motion: no-preference) {
      animation: viewportFadeOut linear;
      animation-timeline: view();
      animation-range: exit 200px;
    }

    @media (min-width: 1200px) {
      height: calc(100svh - var(--app-header-height));
    }

    img {
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }

  .article-date {
    color: var(--color-grey-text);
    display: inline-block;
    margin-block-start: 1.5rem;
  }

  .background-shapes-wrapper {
    isolation: isolate;
    position: absolute;
    inset: 0;
    overflow: clip;
    mix-blend-mode: screen;
  }

  .background-shape {
    position: absolute;
  }

  .background-shape--circle-stripes {
    color: var(--color-accent-brown);
    opacity: 1;
    width: min(25%, 240px);
    right: calc(-1 * var(--app-padding-inline));
    top: 20%;
  }

  .background-shape--circle-dots {
    width: min(50%, 480px);
    inset: 0;
    margin: auto;
    margin-inline-end: 10%;
  }

  .background-attachment--fixed {
    background-attachment: fixed;
  }
}

.hero-block.image-position--background,
.hero-block.image-position--inline-end,
.hero-block.image-position--inline-start {
  @media (min-width: 1200px) {
    height: calc(100svh - var(--app-header-height));
  }
}

.hero-block.image-position--background {
  background-size: cover;
  background-position: 50% 50%;
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
    max-width: 640px;
  }

  .page-block-content {
    z-index: 2;
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
  padding-block: var(--app-header-height);
}

.hero-block.image-position--inline-end {
  .page-block-content {
    padding-block-start: 4rem;

    @media (min-width: 1200px) {
      padding-block-start: 0;
    }
  }

  @media (min-width: 1200px) {
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
      }
    }
  }
}

.hero-block.image-position--inline-start {
  .page-block-content {
    padding-block-start: 2rem;
    padding-block-end: 4rem;
  }

  @media (min-width: 1200px) {
    .hero-block-wrapper {
      align-items: center;
      grid-template-columns:
        1fr calc(var(--app-max-width) / 2)
        calc(var(--app-max-width) / 2)
        1fr;
    }

    .page-block-content {
      grid-column: 3 / span 1;
      padding-inline-start: 4rem;
      padding-block: 4rem 0;
    }

    .hero-image {
      grid-column: 1 / span 2;

      img {
        width: 100%;
      }
    }
  }
}
</style>
