import createPhoto from './createPhoto.js';
import changeButtonText from '../changeButtonText.js';
import removeDisabled from '../removeDisabled.js';

export default function createProfilePhoto() {
  const chooseFileSection = document.querySelector('.chooseFile');
  const chooseUrlSection = document.querySelector('.chooseUrl');

  const photo = document.getElementById('file');
  const inputUrl = document.getElementById('url');

  const profilePhotoUrl = window.localStorage.getItem('profilePhotoUrl');
  const profilePhotoFile = window.localStorage.getItem('profilePhotoFile');

  const addProfilePhoto = document.querySelector('.add-profilephoto');
  const btnPreview = document.querySelector('.btn-preview');

  // remove o disable do botão quando um arquivo ou url for selecionado
  removeDisabled(photo, addProfilePhoto, 'file');
  removeDisabled(inputUrl, addProfilePhoto, 'url');

  // mostra/esconde os campos de escolha de arquivo ou url
  const choosesBtns = document.querySelectorAll('.content .uk-radio');
  choosesBtns.forEach((choose) => {
    choose.addEventListener('click', function (evt) {
      const el = evt.target;
      if (el.id === 'chooseFile') {
        chooseFileSection.classList.remove('uk-hidden');
        chooseUrlSection.classList.add('uk-hidden');
      }
      if (el.id === 'chooseUrl') {
        chooseFileSection.classList.add('uk-hidden');
        chooseUrlSection.classList.remove('uk-hidden');
        inputUrl.focus();
      }
    });
  });

  // adiciona a foto no header
  addProfilePhoto.addEventListener('click', function () {
    if (inputUrl.value !== '') {
      window.localStorage.setItem('profilePhotoUrl', inputUrl.value);
      createPhoto(inputUrl.value);
      document.location.reload(true);
    } else if (photo.value !== '') {
      window.localStorage.setItem('profilePhotoFile', photo.value);
      createPhoto(photo.value);
      document.location.reload(true);
    }
  });

  // se já existir uma foto no localStorage, adiciona no header
  if (profilePhotoUrl) {
    btnPreview.classList.remove('uk-hidden');
    inputUrl.value = profilePhotoUrl;
    addProfilePhoto.removeAttribute('disabled');
    createPhoto(profilePhotoUrl);

    // altera o texto do botão para 'atualizar' quando o valor do input for alterado
    photo.addEventListener('change', function () {
      changeButtonText(addProfilePhoto);
    });
    inputUrl.addEventListener('keyup', function () {
      changeButtonText(addProfilePhoto);
    });
  } else if (profilePhotoFile) {
    addProfilePhoto.removeAttribute('disabled');
    createPhoto(profilePhotoFile);
  }
}
