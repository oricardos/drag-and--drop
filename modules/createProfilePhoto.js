export default function createProfilePhoto(el) {
  const photo = document.getElementById('beacons-profile-photo').value;
  if (photo) {
    const row = document.createElement('div');
    row.classList.add('row');

    const col = document.createElement('div');
    col.classList.add('col-12');

    //CRIANDO IMAGEM
    const img = document.createElement('img');
    img.classList.add('img-fluid', 'rounded');
    img.src = photo;
    col.appendChild(img);

    row.appendChild(col);
    el.appendChild(row);
  }
}
