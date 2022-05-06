export default function cookies() {
  const container = document.querySelector('.cookies-container');
  const save = document.querySelector('.cookies-save');
  if (!container || !save) return null;

  const localCookiesConsent = window.localStorage.getItem('cookies-consent');
  if (localCookiesConsent === 'True') hideCookiesPopUp();

  function saveCookiesConsent() {
    window.localStorage.setItem('cookies-consent', 'True');
  }

  function hideCookiesPopUp() {
    container.style.display = 'none';
  }

  function handleSave() {
    hideCookiesPopUp();
    saveCookiesConsent();
  }

  save.addEventListener('click', handleSave);
}

cookies();
