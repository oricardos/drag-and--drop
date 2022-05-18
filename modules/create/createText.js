import showSections from '../showSections/showSections.js';
import createSectionEl from './createSectionEl.js';

export default function createText() {
  const textValue = document.getElementById('beacons-bio');
  const addBio = document.querySelector('.add-bio');
  const bio = window.localStorage.getItem('bio');

  // função que cria o elemento
  function createBioSection(text) {
    const section = document.createElement('div');
    const titleSection = document.createElement('h3');
    const textElement = document.createElement('p');
    titleSection.innerHTML = 'Biografia';
    textElement.classList.add('bio');
    textElement.innerHTML = text;

    section.appendChild(titleSection);
    section.appendChild(textElement);

    createSectionEl('section-text', section);
  }

  // evento no botão
  addBio.addEventListener('click', () => {
    if (textValue.value !== '') {
      window.localStorage.setItem('bio', textValue.value);

      createBioSection(textValue.value);
      document.location.reload(true);
      textValue.focus();
    }
  });

  if (bio) {
    const switchTexts = document.querySelector('.switch-texts');
    switchTexts.classList.remove('uk-hidden');
    switchTexts.classList.add('uk-flex');
    showSections('#switch-texts', '.beacons-section-text');

    textValue.value = bio;
    createBioSection(bio);
  }
}
