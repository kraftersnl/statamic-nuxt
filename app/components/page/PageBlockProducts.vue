<script setup lang="ts">
defineProps<{ data?: ProductsBlock }>();
</script>

<template>
  <section :id="data?.anchor" :class="['page-block', 'products-block']">
    <div class="page-block-content">
      <DoubleTitle :title="data?.title" :super-title="data?.super_title" />

      <ul role="list" class="products-list">
        <li
          v-for="product in data?.products"
          :key="product.id"
          class="product-item"
        >
          <div class="product-image">
            <NuxtLink :to="product.button_link">
              <span class="visuallyhidden">{{ product.button_label }}</span>
              <StatamicImage
                :data="product.image"
                width="400"
                height="400"
                sizes="mobile:400px normal:800px"
              />
            </NuxtLink>
          </div>

          <div class="product-content">
            <NuxtLink :to="product.button_link" class="title-link">
              <h3 class="product-title">{{ product.title }}</h3>
            </NuxtLink>

            <p class="product-text">{{ product.text }}</p>

            <StatamicButton :data="product" />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
.page-block.products-block {
  .page-block-content {
    padding-block: 5rem;

    @media (min-width: 1200px) {
      display: grid;
      padding-inline: var(--app-padding-inline);
    }
  }

  .products-list {
    margin-block-start: 3rem;
    display: grid;
    gap: 6rem;

    @media (min-width: 1024px) {
      display: grid;
      gap: 4rem;
      grid-template-columns: 1fr 1fr;
    }
  }

  .title-link {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .product-title {
    margin-block-start: 3rem;
  }
  .product-text {
    margin-block-end: 2.5rem;
  }

  .product-image {
    background-color: var(--color-accent-grey);
    padding-block-start: 4rem;
    padding-inline: 3rem;

    img {
      border-radius: var(--radius-md) var(--radius-md) 0 0;
    }
  }
}
</style>
