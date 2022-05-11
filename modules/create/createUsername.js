export default function createUsername() {
  const usernameValue = document.getElementById('beacons-user-name');
  const nameValue = document.getElementById('beacons-name');
  const addUsername = document.querySelector('.add-username');

  const name = window.localStorage.getItem('name');
  const username = window.localStorage.getItem('username');

  addUsername.addEventListener('click', function (evt) {
    if (usernameValue.value !== '' && nameValue.value !== '') {
      window.localStorage.setItem('username', usernameValue.value);
      window.localStorage.setItem('name', nameValue.value);

      const el = evt.target.parentElement;
      const dataEl = el.getAttribute('data-element');

      const nameElement = document.createElement('h5');
      nameElement.innerHTML = nameValue.value;

      const usernameElement = document.createElement('p');
      usernameElement.classList.add(dataEl);
      usernameElement.innerHTML = `@${usernameValue.value}`;

      const sectionHeader = document.querySelector('.beacons-section-header');
      const texts = document.createElement('div');
      texts.classList.add('d-flex', 'flex-column', 'ml-5');
      texts.appendChild(nameElement);
      texts.appendChild(usernameElement);
      sectionHeader.appendChild(texts);
      document.location.reload(true);
    }
  });
  if (name && username) {
    nameValue.value = name;
    usernameValue.value = username;

    const nameElement = document.createElement('h5');
    nameElement.innerHTML = name;

    const usernameElement = document.createElement('p');
    usernameElement.classList.add('user-name');
    usernameElement.innerHTML = `@${username}`;

    const sectionHeader = document.querySelector('.beacons-section-header');
    const texts = document.createElement('div');
    texts.classList.add('d-flex', 'flex-column', 'ml-5');
    texts.appendChild(nameElement);
    texts.appendChild(usernameElement);
    sectionHeader.appendChild(texts);
  }
}
