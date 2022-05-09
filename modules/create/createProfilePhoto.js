import createSectionEl from './createSectionEl.js';

export default function createProfilePhoto() {
  const photo = document.getElementById('beacons-profile-photo');
  const addProfilePhoto = document.querySelector('.add-profilephoto');

  addProfilePhoto.addEventListener('click', function (evt) {
    if (photo.files[0].name !== '') {
      const el = evt.target.parentElement;
      const section = el.parentElement.classList[1];

      const row = document.createElement('div');
      row.classList.add('row');

      const col = document.createElement('div');
      col.classList.add('col-12');

      //CRIANDO IMAGEM
      const img = document.createElement('img');
      img.classList.add('img-fluid', 'rounded');
      img.src = photo.files[0].name;
      col.appendChild(img);

      row.appendChild(col);
      createSectionEl(section, row);
    }
  });
}
