<script setup lang="ts">
const { closeMenu } = useNav();

const props = defineProps<{
  data: NavTreeItem;
  modelValue?: string;
}>();

const showMenu = computed(() => props.modelValue === props.data.page?.id);

function handleSubMenuToggle() {
  if (showMenu.value) {
    closeMenu();
  } else {
    emit('update:modelValue', props.data.page.id);
  }
}

function handleSubMenuItemClick() {
  emit('click');
}

const emit = defineEmits(['update:modelValue', 'click']);
</script>

<template>
  <div v-if="data.children?.length" class="sub-menu-wrapper">
    <button
      type="button"
      :aria-controls="`submenu-${data.page.id}`"
      :aria-expanded="showMenu"
      class="sub-menu-toggle"
      @click="handleSubMenuToggle"
    >
      <Icon name="material-symbols:keyboard-arrow-down-rounded" />
      <span class="visuallyhidden">
        Menu uitklappen voor {{ data.page.title }}
      </span>
    </button>

    <div
      v-show="showMenu"
      :id="`submenu-${data.page.id}`"
      class="sub-menu-content"
    >
      <ul class="menu-list" role="list">
        <li v-for="child in data.children" :key="child.page.id">
          <Button
            :to="child.page.link || child.page.url"
            class="nav-link"
            variant="topbar"
            font-size="sm"
            :label="child.page.title"
            @click="handleSubMenuItemClick"
          >
            <template #icon>
              <StatamicIcon v-if="child.page.icon" :icon="child.page.icon" />
            </template>
          </Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.sub-menu-wrapper {
  .sub-menu-content {
    position: absolute;
    z-index: 9;
    left: -0.5rem;
    top: calc(100% + 2px);
    border: 1px solid var(--color-grey-light);
    border-radius: 0 0 var(--radius-md) var(--radius-md);
    background-color: var(--color-white);

    .nav-link {
      margin-block: 0.5rem;
      margin-inline: 1.25rem;
      font-weight: var(--font-weight-regular);
      max-width: max-content;
      text-decoration: none;

      &:focus-visible {
        outline: 2px solid var(--focus-color);
      }

      &:hover {
        color: var(--color-text);
      }

      &[aria-current='page'] {
        color: var(--color-accent-text);
        font-weight: var(--font-weight-medium);
        --button-underline-color: var(--color-accent-graphic);
      }
    }
  }

  .sub-menu-toggle {
    display: flex;
    align-items: center;
    aspect-ratio: 1;
    transition: transform var(--duration-xs);
    border-radius: var(--radius-full);
    color: var(--color-grey-graphic);
    background-color: transparent;
    border: none;

    &:focus-visible {
      outline: 2px solid var(--focus-color);
    }

    .iconify {
      color: var(--color-grey-text);
      transition: transform var(--duration-md);
    }

    &:hover .iconify {
      color: var(--color-text);
    }

    &[aria-expanded='true'] {
      .iconify {
        color: var(--color-text);
        transform: rotate(180deg);
      }
    }
  }

  li:first-of-type .nav-link {
    margin-block-start: 1rem;
  }

  li:last-of-type .nav-link {
    margin-block-end: 1rem;
  }
}
</style>
