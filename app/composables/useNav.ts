export function useNav() {
  const openMenuId = useState<string | undefined>(
    'openMenuId',
    () => undefined
  );

  function closeMenu() {
    openMenuId.value = undefined;
  }

  onMounted(() => closeNavMenu());

  function closeNavMenu() {
    window.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.matches('.sub-menu-toggle') &&
        !target.matches('.sub-menu-toggle .iconify') &&
        !target.matches('.sub-menu-toggle .iconify svg') &&
        !target.matches('.sub-menu-toggle .iconify svg path') &&
        !target.matches('.sub-menu-toggle .icon') &&
        !target.matches('.sub-menu-toggle .icon svg') &&
        !target.matches('.sub-menu-toggle .icon svg path') &&
        !target.matches('.sub-menu-toggle .icon svg path')
      ) {
        closeMenu();
      }
    });

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });
  }

  return {
    openMenuId,
    closeMenu,
    closeNavMenu,
  };
}
