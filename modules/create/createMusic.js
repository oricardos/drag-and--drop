import createSectionEl from './createSectionEl.js';

export default function createMusic(el) {
  const iframeValue = document.getElementById('beacons-music');
  const addMusic = document.querySelector('.add-music');
  const iframe = window.localStorage.getItem('iframe');

  // função que cria o elemento 
  function createIframeSection(iframe) {
    const src = iframe.split('/')[2];
    const getPlataformName = src.split('.')[1];
    // deixa a primeira letra maiúscula
    const capitalize = getPlataformName.charAt(0).toUpperCase() + getPlataformName.slice(1);
    
    const titleSection = document.createElement('h3');
    const row = document.createElement('div');
    row.classList.add('row');

    const col = document.createElement('div');
    col.classList.add('col-12');

    col.innerHTML = iframe;
    titleSection.innerHTML = `${capitalize}`;
    row.appendChild(titleSection)
    row.appendChild(col);

    createSectionEl('section-music', row);
  }

  // evento no botão
  addMusic.addEventListener('click', function () {
    if (iframeValue.value !== '') {
      window.localStorage.setItem('iframe', iframeValue.value);
      createIframeSection(iframeValue.value);
      document.location.reload(true)
    }
  });

  if (iframe || iframeValue.value !== '') {
      const switchMusic = document.querySelector('.switch-music');
      switchMusic.classList.remove('d-none');
      switchMusic.classList.add('d-flex');

    iframeValue.value = iframe;
    createIframeSection(iframe);
  }
}
