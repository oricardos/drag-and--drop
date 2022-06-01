export default function removeDisabled(el, btn, type) {
  if (type === 'file') {
    el.addEventListener('change', function () {
      if (el.value !== '') {
        btn.removeAttribute('disabled');
      } else {
        btn.setAttribute('disabled', 'disabled');
      }
    });
  } else {
    el.addEventListener('keyup', function () {
      if (el.value !== '') {
        btn.removeAttribute('disabled');
      } else {
        btn.setAttribute('disabled', 'disabled');
      }
    });
  }
}
