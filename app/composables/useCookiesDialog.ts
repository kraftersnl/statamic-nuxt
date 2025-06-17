export function useCookiesDialog() {
  const cookieConsent = useState<{
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  }>('cookieConsent', () => ({
    necessary: false,
    analytics: false,
    marketing: false,
  }));

  const cookiesDialogRef = useState<DialogComponent | null>(
    'cookiesDialogRef',
    () => null
  );

  const hasConsent = computed(
    () => cookieConsent.value?.analytics && cookieConsent.value?.marketing
  );

  return {
    cookieConsent,
    cookiesDialogRef,
    hasConsent,
  };
}
