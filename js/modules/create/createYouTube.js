import createSectionEl from './createSectionEl.js';
import showSections from '../showSections/showSections.js';
import createVideoElement from './createVideoElement.js';

export default function createYouTube() {
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

  addLink.addEventListener('click', function () {
    if (linkValue.value !== '') {
      window.localStorage.setItem('video', linkValue.value);

      createVideoSection(video);
      document.location.reload(true);
    }
  });

  if (video || linkValue.value !== '') {
    const switchYouTube = document.querySelector('.switch-video');
    switchYouTube.classList.remove('uk-hidden');
    switchYouTube.classList.add('uk-block');
    showSections('#switch-video', '.beacons-section-video');

    linkValue.value = video;
    createVideoSection(video);
  }
}
