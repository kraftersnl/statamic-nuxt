<script setup lang="ts">
const props = defineProps<{ data?: HeroBlock }>();

const imageFirst = computed(
  () => props.data?.image && props.data?.image_pos?.key.endsWith('-start')
);
const imageLast = computed(
  () => props.data?.image && props.data?.image_pos?.key.endsWith('-end')
);
</script>

<template>
  <section
    :id="data?.anchor"
    :class="`page-block hero-block
      image-position--${data?.image_pos?.key}
    `"
    :style="[
      data?.image_max_height && `--image-max-height: ${data?.image_max_height}`,
    ]"
  >
    <div v-if="imageFirst" class="hero-image">
      <StatamicImage
        loading="eager"
        :data="data?.image"
        :class="data?.full_width_image ? 'image--full-width' : ''"
        width="640"
        height="320"
        sizes="mobile:640px normal:960px big:1440px"
      />
    </div>

    <div class="page-block-content">
      <h1 v-if="data?.title">{{ data.title }}</h1>

      <ContentBlockMapper :content="data?.content" />
    </div>

    <div v-if="imageLast" class="hero-image">
      <StatamicImage
        loading="eager"
        :data="data?.image"
        :class="data?.full_width_image ? 'image--full-width' : ''"
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
  gap: 2rem;
  align-items: center;
  padding-block-end: 2.5rem;

  @media (min-width: 768px) {
    padding-block-end: 5rem;
  }

  .page-block-content {
    padding-block: 2rem;
  }

  h1 {
    font-size: min(calc(var(--font-size-sm) + 3vw), var(--font-size-xxxl));
  }

  p {
    font-size: min(calc(var(--font-size-sm) + 1vw), var(--font-size-lg));
  }

  .hero-image {
    img {
      max-height: var(--image-max-height, none);
      object-fit: cover;
      margin-inline: auto;
    }

    .image--full-width {
      img {
        width: 100%;
      }
    }
  }
}

@media (min-width: 1024px) {
  .image-position--inline-end {
    max-width: var(--app-max-width);
    margin-inline: auto;
    grid-template-columns: 3fr 2fr;

    h1 {
      font-size: min(calc(var(--font-size-xs) + 3vw), var(--font-size-xxl));
    }
  }

  .image-position--inline-start {
    max-width: var(--app-max-width);
    margin-inline: auto;
    grid-template-columns: 2fr 3fr;

    h1 {
      font-size: min(calc(var(--font-size-xs) + 3vw), var(--font-size-xxl));
    }
  }
}
</style>
