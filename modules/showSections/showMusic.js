export default function showMusic() {
  const isChecked = document.querySelector('#switch-music');

  isChecked.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      const section = document.querySelector('.beacons-section-music');
      section.classList.remove('d-none');
      section.classList.add('d-block');
    } else {
      const section = document.querySelector('.beacons-section-music');
      section.classList.remove('d-block');
      section.classList.add('d-none');
    }
  });
}
