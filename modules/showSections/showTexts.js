export default function showTexts() {
  const isChecked = document.querySelector('#switch-texts');

  isChecked.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      const section = document.querySelector('.beacons-section-text');
      section.classList.remove('d-none');
      section.classList.add('d-flex');
    } else {
      const section = document.querySelector('.beacons-section-text');
      section.classList.remove('d-flex');
      section.classList.add('d-none');
    }
  });
}
