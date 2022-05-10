export default function showVideo() {
  const isChecked = document.querySelector('#switch-video');

  isChecked.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      const section = document.querySelector('.beacons-section-video');
      section.classList.remove('d-none');
      section.classList.add('d-block');
    } else {
      const section = document.querySelector('.beacons-section-video');
      section.classList.remove('d-block');
      section.classList.add('d-none');
    }
  });
}
