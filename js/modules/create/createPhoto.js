import createSectionEl from './createSectionEl.js';

export default function createPhoto(photo) {
  const section = 'section-header';

  //criando imagem
  const img = document.createElement('img');
  img.classList.add('profile-image');
  img.src = photo;
  createSectionEl(section, img);
}
