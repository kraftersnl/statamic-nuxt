<script setup lang="ts">
import Cookies from 'js-cookie';

const { cookieConsent, cookiesDialogRef } = useCookiesDialog();
const consentTrigger = useScriptTriggerConsent();

const { proxy, remove } = useScriptGoogleTagManager({
  id: import.meta.env.NUXT_PUBLIC_GTM_ID,

  onBeforeGtmStart: (gtag) => {
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
    });
  },

  scriptOptions: {
    trigger: consentTrigger,
  },
});

function gtag() {
  proxy.dataLayer.push(arguments);
}

onMounted(() => {
  const consent = Cookies.get('cookieConsent');
  if (consent) {
    cookieConsent.value = JSON.parse(consent);
  }
  if (
    cookieConsent.value?.necessary === true &&
    cookieConsent.value?.analytics === true &&
    cookieConsent.value?.marketing === true
  ) {
    acceptCookies();
  } else if (
    cookieConsent.value?.necessary === true &&
    cookieConsent.value?.analytics === false &&
    cookieConsent.value?.marketing === false
  ) {
    denyCookies();
  } else {
    cookiesDialogRef.value?.openDialog();
  }
});

function acceptCookies() {
  cookiesDialogRef.value?.closeDialog();

  consentTrigger.accept();

  gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
    functionality_storage: 'granted',
    personalization_storage: 'granted',
  });

  Cookies.set(
    'cookieConsent',
    JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
    }),
    { expires: 365 }
  );
  cookieConsent.value.necessary = true;
  cookieConsent.value.analytics = true;
  cookieConsent.value.marketing = true;
}

function denyCookies() {
  cookiesDialogRef.value?.closeDialog();

  remove();

  gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
  });

  Cookies.set(
    'cookieConsent',
    JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
    }),
    { expires: 365 }
  );

  cookieConsent.value.necessary = true;
  cookieConsent.value.analytics = false;
  cookieConsent.value.marketing = false;
}
</script>

<template>
  <Dialog
    ref="cookiesDialogRef"
    class="cookies-dialog"
    position="block-end"
    :click-outside="false"
    aria-label="Cookies"
    close-button-variant="ghost"
  >
    <template #header>
      <div class="cookies-dialog-content">
        <p id="cookiesDescription">
          We gebruiken cookies om de gebruikerservaring te verbeteren.
        </p>

        <div class="button-group">
          <Button
            class="accept-button"
            aria-describedby="cookiesDescription"
            variant="cta"
            label="Accepteren"
            @click="acceptCookies"
          />

          <Button
            class="deny-button"
            aria-describedby="cookiesDescription"
            variant="ghost"
            label="Weigeren"
            @click="denyCookies"
          />
        </div>
      </div>
    </template>
  </Dialog>
</template>

<style>
.cookies-dialog {
  --dialog-padding-inline: 3.5rem;

  .cookies-dialog-content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-inline: auto;
    justify-content: center;
    row-gap: 1.5rem;
    column-gap: 3rem;

    .button-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      justify-self: end;
      gap: 1rem;
    }
  }
}
</style>
