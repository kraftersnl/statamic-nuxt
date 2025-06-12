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

  return {
    cookieConsent,
    cookiesDialogRef,
  };
}
