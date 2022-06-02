import changeButtonText from '../changeButtonText.js';
import removeDisabled from '../removeDisabled.js';

export default function createUsername() {
  // captura dos elementos
  const usernameValue = document.getElementById('beacons-user-name');
  const nameValue = document.getElementById('beacons-name');
  const addUsername = document.querySelector('.add-username');

  const name = window.localStorage.getItem('name');
  const username = window.localStorage.getItem('username');

  removeDisabled(usernameValue, addUsername, 'text');
  removeDisabled(nameValue, addUsername, 'text');

  // função que cria e adiciona os elementos no header
  function createElements(name, username) {
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

  // adiciona o nome e o username no header
  addUsername.addEventListener('click', function (evt) {
    if (usernameValue.value !== '' && nameValue.value !== '') {
      window.localStorage.setItem('username', usernameValue.value);
      window.localStorage.setItem('name', nameValue.value);

      createElements(nameValue.value, usernameValue.value);
      document.location.reload(true);
    }
  });

  // se já existir um nome e um username no localStorage, adiciona no header
  if (name && username) {
    nameValue.value = name;
    usernameValue.value = username;

    // se já existir um nome e um username no localStorage, remove o atributo disabled do botão
    addUsername.removeAttribute('disabled');

    // altera o texto do botão para 'atualizar' quando o valor do input for alterado
    usernameValue.addEventListener('keyup', function () {
      changeButtonText(addUsername);
    });
    nameValue.addEventListener('keyup', function () {
      changeButtonText(addUsername);
    });

    createElements(name, username);
  }
}
