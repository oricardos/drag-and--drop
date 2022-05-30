import createPhoto from '../create/createPhoto.js';

export default function previewProfilePhoto() {
  const profilePhoto = window.localStorage.getItem('profilePhotoUrl');

  if (profilePhoto) {
    //criando imagem
    createPhoto(profilePhoto);
  }
}
