export default function previewBio() {
  const bio = window.localStorage.getItem('bio');
  const preview = document.querySelector('.preview');

  if (bio) {
    const section = document.createElement('div');
    const titleSection = document.createElement('h3');
    const textElement = document.createElement('p');
    section.classList.add('beacons-section-text');
    titleSection.innerHTML = 'Biografia';
    textElement.classList.add('bio');
    textElement.innerHTML = bio;
    section.appendChild(titleSection);
    section.appendChild(textElement);
    preview.appendChild(section);
  }
}
