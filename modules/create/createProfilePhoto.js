import createPhoto from './createPhoto.js';

export default function createProfilePhoto() {
  const chooseFileSection = document.querySelector('.chooseFile');
  const chooseUrlSection = document.querySelector('.chooseUrl');
  const inputUrl = document.getElementById('url');

  const choosesBtns = document.querySelectorAll('.btn-check');
  choosesBtns.forEach((choose) => {
    choose.addEventListener('click', function (evt) {
      const el = evt.target;
      if (el.id === 'chooseFile') {
        chooseFileSection.classList.remove('d-none');
        chooseUrlSection.classList.add('d-none');
      }
      if (el.id === 'chooseUrl') {
        chooseFileSection.classList.add('d-none');
        chooseUrlSection.classList.remove('d-none');
        inputUrl.focus();
      }
    });
  });

  const photo = document.getElementById('file');
  const addProfilePhoto = document.querySelector('.add-profilephoto');

  addProfilePhoto.addEventListener('click', function (evt) {
    if (inputUrl.value !== '') {
      createPhoto(evt, inputUrl.value);
    } else if (photo.value !== '') {
      createPhoto(evt, photo.value);
    }
  });
}
