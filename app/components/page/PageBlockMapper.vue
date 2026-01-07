<script setup lang="ts">
defineProps<{
  blocks?: StatamicPageBlock[];
  date?: string;
}>();
</script>

<template>
  <div class="page-blocks-wrapper">
    <slot />

    <template v-for="pageBlock in blocks" :key="pageBlock.id">
      <PageBlockHero
        v-if="pageBlock?.type === 'hero'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockBasic
        v-else-if="pageBlock?.type === 'basic'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockTwoColsText
        v-else-if="pageBlock?.type === 'two_cols_text'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockTwoColsImage
        v-else-if="pageBlock?.type === 'two_cols_image'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockTwoColsVisual
        v-else-if="pageBlock?.type === 'two_cols_visual'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockTestimonials
        v-else-if="pageBlock?.type === 'testimonials'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockQuote
        v-else-if="pageBlock?.type === 'quote'"
        :data="pageBlock"
      />
      <PageBlockCTA v-else-if="pageBlock?.type === 'cta'" :data="pageBlock" />
      <PageBlockImageCarousel
        v-else-if="pageBlock?.type === 'image_carousel'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockProjects
        v-else-if="pageBlock?.type === 'projects'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockProducts
        v-else-if="pageBlock?.type === 'products'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockSteps
        v-else-if="pageBlock?.type === 'steps'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockLinks
        v-else-if="pageBlock?.type === 'links'"
        :data="pageBlock"
      />
      <PageBlockColumns
        v-else-if="pageBlock?.type === 'columns'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockImage
        v-else-if="pageBlock?.type === 'image'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockForm
        v-else-if="pageBlock?.type === 'form'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockArticles
        v-else-if="pageBlock?.type === 'articles'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockEmployees
        v-else-if="pageBlock?.type === 'employees'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockSponsors
        v-else-if="pageBlock?.type === 'sponsors'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockGrid
        v-else-if="pageBlock?.type === 'grid'"
        :data="pageBlock"
        :date="date"
      />
      <PageBlockDivider
        v-else-if="pageBlock?.type === 'divider'"
        :data="pageBlock"
      />
      <PageBlockCallout
        v-else-if="pageBlock?.type === 'callout'"
        :data="pageBlock"
        :date="date"
      />
    </template>
  </div>
</template>

<style>
.page-block-content {
  position: relative;
  width: 100%;
  max-width: var(--app-max-width);
  padding-inline: var(--app-padding-inline);
  margin-inline: auto;
}

.page-block {
  overflow-x: clip;
  isolation: isolate;
  position: relative;
  scroll-margin-block: 1rem;

  @media (min-width: 360px) and (min-height: 360px) {
    scroll-margin-block: 3rem;
  }

  h2 {
    font-size: var(--font-calc-heading-2, var(--font-size-xxxl));
  }

  &:last-child {
    .page-block-content {
      padding-block-end: 8rem;
    }
  }

  &.background-color--white {
    background-color: var(--color-white);
  }
  &.background-color--grey {
    background-color: var(--color-accent-grey);
  }
  &.background-color--black {
    --color-grey-text: hsl(132 4% 76%);
    --color-accent-text: hsl(260 86% 70%);
    background-color: var(--color-black-bg);
    color: #ffffff;
  }

  &:not(.hero-block, .testimonials-block, .form-block) {
    .background-shape {
      position: absolute;
      z-index: -1;
    }

    .background-shape--rectangle-dots {
      width: var(--shape-width, 120px);
      height: auto;
      right: 0;
      top: 7.5%;

      @media (min-width: 1200px) {
        left: var(--app-padding-inline);
      }
    }

    .background-shape--circle-stripes,
    .background-shape--circle-dots {
      height: auto;
    }

    .background-shape--circle-dots {
      top: 2%;
      left: 25%;
      width: var(--shape-width, 320px);
    }

    .background-shape--circle-stripes {
      top: -12%;
      left: 55%;
      margin-right: -5%;
      width: var(--shape-width, 180px);

      @media (min-width: 1200px) {
        top: 5%;
        width: var(--shape-width, 240px);
        left: 160px;
      }
    }

    &.shape-position--block-end {
      .background-shape--circle-dots {
        top: auto;
        bottom: -120px;
        left: 30%;
        width: var(--shape-width, 240px);
      }

      .background-shape--circle-stripes {
        top: auto;
        bottom: -20%;
        left: var(--app-padding-inline);
        width: var(--shape-width, 140px);
      }

      .background-shape--rectangle-dots {
        top: auto;
        bottom: 10%;
      }
    }
  }
}
</style>
