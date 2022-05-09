import createSectionEl from './createSectionEl.js';

export default function createMusic(el) {
  const iframeValue = document.getElementById('beacons-music');
  const addSpotify = document.querySelector('.add-spotify');
  addSpotify.addEventListener('click', function (evt) {
    if (iframeValue.value !== '') {
      const el = evt.target.parentElement;
      const section = el.parentElement.classList[1];

      const row = document.createElement('div');
      row.classList.add('row');

      const col = document.createElement('div');
      col.classList.add('col-12');

      col.innerHTML = iframeValue.value;
      row.appendChild(col);

      createSectionEl(section, row);

      iframeValue.value = '';
      iframeValue.focus();
    }
  });
}
