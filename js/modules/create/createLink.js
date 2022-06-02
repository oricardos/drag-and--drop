import changeButtonText from '../changeButtonText.js';
import removeDisabled from '../removeDisabled.js';
import showSections from '../showSections/showSections.js';
import createSectionEl from './createSectionEl.js';

export default function createLink() {
  // captura os elementos
  const nameLink = document.getElementById('beacons-link-name');
  const linkHref = document.getElementById('beacons-link-value');
  const addLink = document.querySelector('.add-link');

  const localStorageLink = JSON.parse(localStorage.getItem('link')) || [];

  // TODO FAZER VALIDAÇÃO SE OS 2 CAMPOS ESTÃO PREENCHIDOS (nameLink e linkHref)
  // remove o atributo disabled do botão quando um valor for inserido
  removeDisabled(nameLink, addLink, 'text');
  removeDisabled(linkHref, addLink, 'link');

  // função que cria o elemento
  function createLinkSection(values) {
    const section = document.createElement('div');
    const titleSection = document.createElement('h3');
    titleSection.innerHTML = 'Links';
    section.appendChild(titleSection);

    values.forEach((value) => {
      const linkElement = document.createElement('a');
      linkElement.classList.add('uk-block');
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

  // TODO - ADICIONAR ESSA PARTE QUANDO HOUVER EDIÇÃO DO CONTEÚDO

  // altera o texto do botão para 'atualizar' quando o valor do input for alterado
  // linkHref.addEventListener('keyup', function () {
  //   changeButtonText(addLink);
  // });
  // nameLink.addEventListener('keyup', function () {
  //   changeButtonText(addLink);
  // });

  // adiciona o link no preview
  addLink.addEventListener('click', function () {
    if (linkHref.value !== '' && nameLink.value !== '') {
      const link = { name: nameLink.value, value: linkHref.value };
      const linkString = JSON.parse(localStorage.getItem('link')) || [];
      linkString.push(link);
      localStorage.setItem('link', JSON.stringify(linkString));

      document.location.reload(true);
    }
  });

  // se já existir um link no localStorage, adiciona no preview
  if (localStorageLink) {
    // switch para mostrar ou esconder no preview
    const switchTexts = document.querySelector('.switch-links');
    switchTexts.classList.remove('uk-hidden');
    switchTexts.classList.add('uk-flex');

    showSections('#switch-links', '.beacons-section-links');

    createLinkSection(localStorageLink);
  }
}
