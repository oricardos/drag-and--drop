export default function createUsername() {
  const usernameValue = document.getElementById('beacons-user-name');
  const nameValue = document.getElementById('beacons-name');
  const addUsername = document.querySelector('.add-username');

  addUsername.addEventListener('click', function (evt) {
    if (usernameValue.value !== '' && nameValue.value !== '') {
      const el = evt.target.parentElement;
      const dataEl = el.getAttribute('data-element');

      const name = document.createElement('h5');
      name.innerHTML = nameValue.value;

      const username = document.createElement('p');
      username.classList.add(dataEl);
      username.innerHTML = `@${usernameValue.value}`;

      const sectionHeader = document.querySelector('.beacons-section-header');
      const texts = document.createElement('div');
      texts.classList.add('d-flex', 'flex-column', 'ml-5');
      texts.appendChild(name);
      texts.appendChild(username);
      sectionHeader.appendChild(texts);
    }
  });
}
