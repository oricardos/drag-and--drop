export default function createSectionEl(section, el) {
  const divSection = document.createElement('div');
  const preview = document.querySelector('.preview');

  divSection.classList.add(`beacons-${section}`);
  divSection.appendChild(el);

  return preview.appendChild(divSection);
}
