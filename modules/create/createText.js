import createSectionEl from './createSectionEl.js';

export default function createText() {
  const textValue = document.getElementById('beacons-bio');
  const addBio = document.querySelector('.add-bio');
  const bio = window.localStorage.getItem('bio');

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

  addBio.addEventListener('click', () => {
    if (textValue.value !== '') {
      window.localStorage.setItem('bio', textValue.value);
      const switchTexts = document.querySelector('.switch-texts');
      switchTexts.classList.remove('d-none');
      switchTexts.classList.add('d-flex');

      createBioSection(textValue.value);
      document.location.reload(true);
      textValue.focus();
    }
  });

  if (bio) {
    textValue.value = bio;
    createBioSection(bio);
  }
}
