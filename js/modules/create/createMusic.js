import changeButtonText from '../changeButtonText.js';
import showSections from '../showSections/showSections.js';
import createSectionEl from './createSectionEl.js';
import removeDisabled from '../removeDisabled.js';

export default function createMusic() {
  // captura os elementos
  const iframeValue = document.getElementById('beacons-music');
  const addMusic = document.querySelector('.add-music');
  const iframe = window.localStorage.getItem('iframe');

  // remove o atributo disabled do botão quando um valor for inserido
  removeDisabled(iframeValue, addMusic, 'text');

  // função que cria o elemento
  function createIframeSection(iframe) {
    const src = iframe.split('/')[2];
    const getPlataformName = src.split('.')[1];
    // deixa a primeira letra maiúscula
    const capitalize =
      getPlataformName.charAt(0).toUpperCase() + getPlataformName.slice(1);

    const titleSection = document.createElement('h3');
    const row = document.createElement('div');
    row.classList.add('row');

    const col = document.createElement('div');
    col.classList.add('col-12');

    col.innerHTML = iframe;
    titleSection.innerHTML = `${capitalize}`;
    row.appendChild(titleSection);
    row.appendChild(col);

    createSectionEl('section-music', row);
  }

  // adiciona o iframe no preview
  addMusic.addEventListener('click', function () {
    if (iframeValue.value !== '') {
      window.localStorage.setItem('iframe', iframeValue.value);
      createIframeSection(iframeValue.value);
      document.location.reload(true);
    }
  });

  // se já existir um iframe no localStorage, adiciona no preview
  if (iframe || iframeValue.value !== '') {
    const switchMusic = document.querySelector('.switch-music');
    switchMusic.classList.remove('uk-hidden');
    switchMusic.classList.add('uk-flex');

    // se já existir um iframe no localStorage, remove o atributo disabled do botão
    addMusic.removeAttribute('disabled');

    // altera o texto do botão para 'atualizar' quando o valor do input for alterado
    iframeValue.addEventListener('keyup', function () {
      changeButtonText(addMusic);
    });

    showSections('#switch-music', '.beacons-section-music');

    iframeValue.value = iframe;
    createIframeSection(iframe);
  }
}
