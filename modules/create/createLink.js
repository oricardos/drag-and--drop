import showSections from '../showSections/showSections.js';
import createSectionEl from './createSectionEl.js';

export default function createLink() {
  const nameLink = document.getElementById('beacons-link-name');
  const linkHref = document.getElementById('beacons-link-value');
  const addLink = document.querySelector('.add-link');

  const localStorageLink = JSON.parse(localStorage.getItem('link')) || [];

  function createLinkSection(values) {
    const section = document.createElement('div');
    const titleSection = document.createElement('h3');
    titleSection.innerHTML = 'Links';
    section.appendChild(titleSection);

    values.forEach((value) => {
      const linkElement = document.createElement('a');
      linkElement.classList.add('uk-link-muted', 'uk-block');
      linkElement.href = value.value;
      linkElement.setAttribute('target', '_blank');
      linkElement.innerHTML = value.name;
      section.appendChild(linkElement);

      createSectionEl('section-links', section);
    });

    nameLink.value = '';
    linkHref.value = '';
    nameLink.focus();
  }

  addLink.addEventListener('click', function () {
    if (linkHref.value !== '' && nameLink.value !== '') {
      const link = { name: nameLink.value, value: linkHref.value };
      const linkString = JSON.parse(localStorage.getItem('link')) || [];
      linkString.push(link);
      localStorage.setItem('link', JSON.stringify(linkString));

      document.location.reload(true);
    }
  });

  if (localStorageLink) {
    const switchTexts = document.querySelector('.switch-links');
    switchTexts.classList.remove('uk-hidden');
    switchTexts.classList.add('uk-flex');
    showSections('#switch-links', '.beacons-section-links');

    createLinkSection(localStorageLink);
  }
}
