import createSectionEl from './createSectionEl.js';

export default function createText() {
  const textValue = document.getElementById('beacons-bio');
  const addBio = document.querySelector('.add-bio');

  addBio.addEventListener('click', function (evt) {
    if (textValue.value !== '') {
      const switchTexts = document.querySelector('.switch-texts');
      switchTexts.classList.remove('d-none');
      switchTexts.classList.add('d-flex');

      const el = evt.target.parentElement;
      const section = el.parentElement.classList[1];
      const dataEl = el.getAttribute('data-element');

      const text = document.createElement('p');
      text.classList.add(dataEl);
      text.innerHTML = textValue.value;

      createSectionEl(section, text);

      textValue.focus();
    }
  });
}
