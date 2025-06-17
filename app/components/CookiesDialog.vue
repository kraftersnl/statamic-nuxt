<script setup lang="ts">
import Cookies from 'js-cookie';

// const consentTrigger = useScriptTriggerConsent();

// const gtm = useScriptGoogleTagManager({
//   id: useRuntimeConfig().public?.gtm,
//   scriptOptions: {
//     trigger: consentTrigger,
//   },
// });

const { cookieConsent, cookiesDialogRef } = useCookiesDialog();

onMounted(() => {
  // const consent = Cookies.get('cookieConsent');
  // if (consent) {
  //   cookieConsent.value = JSON.parse(consent);
  // }
  // if (
  //   cookieConsent.value?.necessary === true &&
  //   cookieConsent.value?.analytics === true &&
  //   cookieConsent.value?.marketing === true
  // ) {
  //   consentTrigger.accept();
  // } else if (
  //   cookieConsent.value?.necessary === true &&
  //   cookieConsent.value?.analytics === false &&
  //   cookieConsent.value?.marketing === false
  // ) {
  //   // do nothing
  // } else {
  //   cookiesDialogRef.value?.openDialog();
  // }
});

function acceptCookies() {
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

  cookiesDialogRef.value?.closeDialog();
  // consentTrigger.accept();
}

function denyCookies() {
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

  // gtm.remove();
  cookiesDialogRef.value?.closeDialog();
}
</script>

<template>
  <Dialog
    ref="cookiesDialogRef"
    class="cookies-dialog"
    position="block-end"
    :click-outside="false"
    aria-label="Cookies"
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
            variant="secondary"
            size="lg"
            label="Accepteren"
            @click="acceptCookies"
          />

          <Button
            class="deny-button"
            aria-describedby="cookiesDescription"
            variant="ghost"
            size="lg"
            font-size="xs"
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
  --dialog-padding-inline: 1.5rem;

  @media (min-width: 768px) {
    --dialog-padding-inline: 2rem;
  }

  .dialog-header {
    .close-button {
      position: absolute;
      top: calc(var(--dialog-padding-block) / 2);
      right: calc(var(--dialog-padding-inline) / 2);

      @media (min-width: 768px) {
        position: static;
        margin-inline-start: 1rem;
      }
    }
  }

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
