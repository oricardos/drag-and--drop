import createSectionEl from './createSectionEl.js';
import showSections from '../showSections/showSections.js';
import createVideoElement from './createVideoElement.js';
import changeButtonText from '../changeButtonText.js';

export default function createYouTube() {
  // captura dos elementos
  const linkValue = document.getElementById('beacons-video');
  const addLink = document.querySelector('.add-video');
  const video = window.localStorage.getItem('video');

  // função que cria o elemento
  function createVideoSection(link) {
    const row = document.createElement('div');
    const col = document.createElement('div');

    row.classList.add('row');
    // col.classList.add('video-container');

    createVideoElement(link);

    col.innerHTML = createVideoElement(link);
    row.appendChild(col);

    createSectionEl('section-video', row);
  }

  // altera o texto do botão para 'atualizar' quando o valor do input for alterado
  linkValue.addEventListener('keyup', function () {
    changeButtonText(addLink);
  });

  // adiciona o video no preview
  addLink.addEventListener('click', function () {
    if (linkValue.value !== '') {
      window.localStorage.setItem('video', linkValue.value);

      createVideoSection(video);
      document.location.reload(true);
    }
  });

  // se já existir um video no localStorage, adiciona no preview
  if (video || linkValue.value !== '') {
    // switch para mostrar o preview
    const switchYouTube = document.querySelector('.switch-video');
    switchYouTube.classList.remove('uk-hidden');
    switchYouTube.classList.add('uk-block');
    showSections('#switch-video', '.beacons-section-video');

    linkValue.value = video;
    createVideoSection(video);
  }
}
