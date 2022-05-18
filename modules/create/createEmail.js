import showSections from '../showSections/showSections.js';
import createSectionEl from './createSectionEl.js';

export default function createEmail() {
  const mailto = document.getElementById('beacons-email');
  const addEmail = document.querySelector('.add-email');
  const email = window.localStorage.getItem('email');

  // função que cria o elemento
  function createEmailSection(email) {
    const row = document.createElement('div');
    const leftCol = document.createElement('div');
    const rightCol = document.createElement('div');
    const titleSection = document.createElement('h3');

    row.classList.add('row');
    leftCol.classList.add('col-2', 'd-flex', 'align-items-center');
    rightCol.classList.add('col-10');
    titleSection.innerHTML = 'Email';

    row.appendChild(titleSection);
    row.appendChild(leftCol);
    row.appendChild(rightCol);

    const icon = document.createElement('ion-icon');
    icon.setAttribute('name', 'mail-outline');

    leftCol.appendChild(icon);

    const emailElement = document.createElement('a');
    emailElement.classList.add('link-primary');
    emailElement.setAttribute('href', `mailto: ${email}`);
    emailElement.setAttribute('target', '_blank');
    emailElement.innerHTML = email;

    leftCol.appendChild(emailElement);
    rightCol.appendChild(emailElement);

    createSectionEl('section-email', row);
  }

  addEmail.addEventListener('click', function () {
    if (mailto.value !== '') {
      window.localStorage.setItem('email', mailto.value);

      createEmailSection(mailto.value);
      document.location.reload(true);
    }
  });

  if (email) {
    const switchEmail = document.querySelector('.switch-email');
    switchEmail.classList.remove('uk-hidden');
    switchEmail.classList.add('uk-flex');
    showSections('#switch-email', '.beacons-section-email');

    mailto.value = email;
    createEmailSection(email);
  }
}
