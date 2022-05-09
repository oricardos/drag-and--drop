import createSectionEl from './createSectionEl.js';

export default function createYouTube() {
  const linkValue = document.getElementById('beacons-video');
  const addLink = document.querySelector('.add-video');

  addLink.addEventListener('click', function (evt) {
    if (linkValue.value !== '') {
      const el = evt.target.parentElement;
      const section = el.parentElement.classList[1];

      const row = document.createElement('div');
      row.classList.add('row');

      const col = document.createElement('div');
      col.classList.add('video-container');

      const video = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${linkValue.value}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

      col.innerHTML = video;
      row.appendChild(col);

      createSectionEl(section, row);

      linkValue.value = '';
      linkValue.focus();
    }
  });
}
