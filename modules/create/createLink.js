import showSections from '../showSections/showSections.js';
import createSectionEl from './createSectionEl.js';

export default function createLink() {
  const nameLink = document.getElementById('beacons-link-name');
  const linkHref = document.getElementById('beacons-link-value');
  const addLink = document.querySelector('.add-link');
  const linkName = window.localStorage.getItem('nameLink');
  const linkValue = window.localStorage.getItem('linkHref');

  function createLinkSection(name, value) {
    const section = document.createElement('div');
    const titleSection = document.createElement('h3');
    titleSection.innerHTML = 'Links';

    const linkElement = document.createElement('a');
    linkElement.classList.add('uk-link-muted');
    linkElement.href = value;
    linkElement.setAttribute('target', '_blank');
    linkElement.innerHTML = name;

    section.appendChild(titleSection);
    section.appendChild(linkElement);

    createSectionEl('section-links', section);

    nameLink.value = '';
    linkHref.value = '';
    nameLink.focus();
  }

  addLink.addEventListener('click', function () {
    if (linkHref.value !== '' && nameLink.value !== '') {
      window.localStorage.setItem('linkHref', linkHref.value);
      window.localStorage.setItem('nameLink', nameLink.value);
      createLinkSection(linkHref.value, nameLink.value);

      document.location.reload(true);
    }
  });

  if (linkName && linkValue) {
    const switchTexts = document.querySelector('.switch-links');
    switchTexts.classList.remove('uk-hidden');
    switchTexts.classList.add('uk-flex');
    showSections('#switch-links', '.beacons-section-links');

    createLinkSection(linkName, linkValue);
  }
}
