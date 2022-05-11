import createSectionEl from './createSectionEl.js';

export default function createPhoto(photo) {
  const section = 'section-header';

  const row = document.createElement('div');
  row.classList.add('row');

  const col = document.createElement('div');
  col.classList.add('col-12');

  //criando imagem
  const img = document.createElement('img');
  img.classList.add('profile-image', 'rounded-circle');
  img.src = photo;
  col.appendChild(img);

  row.appendChild(col);
  createSectionEl(section, row);
}
