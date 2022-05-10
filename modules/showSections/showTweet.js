export default function showTweet() {
  const isChecked = document.querySelector('#switch-tweet');

  isChecked.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      const section = document.querySelector('.beacons-section-tweet');
      section.classList.remove('d-none');
      section.classList.add('d-flex');
    } else {
      const section = document.querySelector('.beacons-section-tweet');
      section.classList.remove('d-flex');
      section.classList.add('d-none');
    }
  });
}
