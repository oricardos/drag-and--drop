export default function showEmail() {
  const isChecked = document.querySelector('#switch-email');

  isChecked.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      const section = document.querySelector('.beacons-section-email');
      section.classList.remove('d-none');
      section.classList.add('d-block');
    } else {
      const section = document.querySelector('.beacons-section-email');
      section.classList.remove('d-block');
      section.classList.add('d-none');
    }
  });
}
