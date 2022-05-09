import createSectionEl from './createSectionEl.js';

export default function createEmail() {
  const mailto = document.getElementById('beacons-email');
  const addEmail = document.querySelector('.add-email');

  addEmail.addEventListener('click', function (evt) {
    if (mailto.value !== '') {
      const el = evt.target.parentElement;
      const section = el.parentElement.classList[1];

      const row = document.createElement('div');
      row.classList.add('row');

      const leftCol = document.createElement('div');
      const rightCol = document.createElement('div');

      leftCol.classList.add('col-2', 'd-flex', 'align-items-center');
      rightCol.classList.add('col-10');

      row.appendChild(leftCol);
      row.appendChild(rightCol);

      const icon = document.createElement('ion-icon');
      icon.setAttribute('name', 'mail-outline');

      leftCol.appendChild(icon);

      const email = document.createElement('a');
      email.classList.add('link-primary');
      email.setAttribute('href', `mailto: ${mailto.value}`);
      email.setAttribute('target', '_blank');
      email.innerHTML = mailto.value;

      leftCol.appendChild(email);
      rightCol.appendChild(email);

      createSectionEl(section, row);

      mailto.value = '';
      mailto.focus();
    }
  });
}
