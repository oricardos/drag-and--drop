export default function previewUsername() {
  const username = window.localStorage.getItem('username');
  const name = window.localStorage.getItem('name');

  if (username && name) {
    const nameElement = document.createElement('h4');
    nameElement.classList.add('uk-text-bold', 'uk-margin-remove-bottom');
    nameElement.innerHTML = name;

    const usernameElement = document.createElement('p');
    usernameElement.classList.add('user-name');
    usernameElement.innerHTML = `@${username}`;

    const sectionHeader = document.querySelector('.beacons-section-header');
    const texts = document.createElement('div');
    texts.classList.add('uk-text-center');
    texts.appendChild(nameElement);
    texts.appendChild(usernameElement);
    sectionHeader.appendChild(texts);
  }
}
