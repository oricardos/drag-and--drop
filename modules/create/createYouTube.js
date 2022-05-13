import createSectionEl from './createSectionEl.js';

export default function createYouTube() {
  const linkValue = document.getElementById('beacons-video');
  const addLink = document.querySelector('.add-video');
  const video = window.localStorage.getItem('video');

  // função que cria o elemento
  function createYoutubeSection(link) {
    const row = document.createElement('div');
    const col = document.createElement('div');
    const titleSection = document.createElement('h3');

    row.classList.add('row');
    col.classList.add('video-container');
    titleSection.innerHTML = 'Youtube';
    titleSection.classList.add('p-0');

    const video = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

    col.innerHTML = video;
    row.appendChild(titleSection);
    row.appendChild(col);

    createSectionEl('section-video', row);
  }

  addLink.addEventListener('click', function () {
    if (linkValue.value !== '') {
      window.localStorage.setItem('video', linkValue.value);

      createYoutubeSection(linkValue.value);
      document.location.reload(true);
    }
  });

  if (video || linkValue.value !== '') {
    const switchYouTube = document.querySelector('.switch-video');
    switchYouTube.classList.remove('d-none');
    switchYouTube.classList.add('d-flex');

    linkValue.value = video;
    createYoutubeSection(video);
  }
}
