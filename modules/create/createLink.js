import createSectionEl from './createSectionEl.js';

export default function createLink() {
  const linkName = document.getElementById('beacons-link-name');
  const linkValue = document.getElementById('beacons-link-value');
  const addLink = document.querySelector('.add-link');

  addLink.addEventListener('click', function (evt) {
    if (linkValue.value !== '' && linkName.value !== '') {
      const switchTexts = document.querySelector('.switch-links');
      switchTexts.classList.remove('d-none');
      switchTexts.classList.add('d-flex');

      const el = evt.target.parentElement;
      const section = el.parentElement.classList[1];

      const link = document.createElement('a');
      link.classList.add('link-primary');
      link.setAttribute('href', linkValue.value);
      link.setAttribute('target', '_blank');
      link.innerHTML = linkName.value;

      createSectionEl(section, link);

      linkName.value = '';
      linkValue.value = '';
      linkName.focus();
    }
  });
}
