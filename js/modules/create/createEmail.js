import changeButtonText from '../changeButtonText.js';
import showSections from '../showSections/showSections.js';
import createSectionEl from './createSectionEl.js';
import removeDisabled from '../removeDisabled.js';

export default function createEmail() {
  // captura os elementos
  const mailto = document.getElementById('beacons-email');
  const addEmail = document.querySelector('.add-email');
  const email = window.localStorage.getItem('email');

  // remove o atributo disabled do botão quando um valor for inserido
  removeDisabled(mailto, addEmail, 'email');

  // função que cria o elemento
  function createEmailSection(email) {
    const beaconsSection = document.createElement('div');
    const row = document.createElement('div');
    const leftCol = document.createElement('div');
    const rightCol = document.createElement('div');
    const titleSection = document.createElement('h3');

    row.classList.add('uk-flex');
    leftCol.classList.add('uk-flex', 'uk-flex-middle');
    rightCol.classList.add('uk-margin-left');
    titleSection.innerHTML = 'Email';

    beaconsSection.appendChild(titleSection);
    beaconsSection.appendChild(row);
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

    createSectionEl('section-email', beaconsSection);
  }

  // adiciona o elemento no preview
  addEmail.addEventListener('click', function () {
    if (mailto.value !== '') {
      window.localStorage.setItem('email', mailto.value);

      createEmailSection(mailto.value);
      document.location.reload(true);
    }
  });

  // se já existir um email no localStorage, adiciona no preview
  if (email) {
    // switch para mostrar/ocultar o email
    const switchEmail = document.querySelector('.switch-email');
    switchEmail.classList.remove('uk-hidden');
    switchEmail.classList.add('uk-flex');

    // se já existir um email no localStorage, remove o atributo disabled do botão
    addEmail.removeAttribute('disabled');

    // altera o texto do botão para 'atualizar' quando o valor do input for alterado
  mailto.addEventListener('keyup', function () {
    changeButtonText(addEmail);
  });

    showSections('#switch-email', '.beacons-section-email');

    mailto.value = email;
    createEmailSection(email);
  }
}
