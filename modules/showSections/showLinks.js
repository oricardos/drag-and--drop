export default function showLinks() {
  const isChecked = document.querySelector('#switch-links');

  isChecked.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      const section = document.querySelector('.beacons-section-links');
      section.classList.remove('d-none');
      section.classList.add('d-flex');
    } else {
      const section = document.querySelector('.beacons-section-links');
      section.classList.remove('d-flex');
      section.classList.add('d-none');
    }
  });
}
