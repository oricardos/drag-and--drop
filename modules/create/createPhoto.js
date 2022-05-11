import createSectionEl from './createSectionEl.js';

export default function createPhoto(evt, photo) {
  const el = evt.target.parentElement;
  const section = el.parentElement.classList[1];

  const row = document.createElement('div');
  row.classList.add('row');

  const col = document.createElement('div');
  col.classList.add('col-12');

  //CRIANDO IMAGEM
  const img = document.createElement('img');
  img.classList.add('profile-image', 'img-fluid', 'rounded-circle');
  img.src = photo;
  col.appendChild(img);

  row.appendChild(col);
  createSectionEl(section, row);
}
