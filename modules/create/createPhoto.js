import createSectionEl from './createSectionEl.js';

export default function createPhoto(photo) {
  const section = 'section-header';

  const row = document.createElement('div');
  row.classList.add('uk-grid-column-large');

  const col = document.createElement('div');
  col.classList.add('uk-grid-row-large');

  //criando imagem
  const img = document.createElement('img');
  img.classList.add('profile-image');
  img.src = photo;
  col.appendChild(img);

  row.appendChild(col);
  createSectionEl(section, row);
}
