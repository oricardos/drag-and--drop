export default function createMusic(el) {
  const iframeValue = document.getElementById('beacons-music');
  if (iframeValue.value !== '') {
    const row = document.createElement('div');
    row.classList.add('row');

    const col = document.createElement('div');
    col.classList.add('col-12');

    col.innerHTML = iframeValue.value;
    row.appendChild(col);

    el.appendChild(row);

    iframeValue.value = '';
    iframeValue.focus();
  }
}
