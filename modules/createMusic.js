export default function createMusic(el) {
  const iframeValue = document.getElementById('beacons-music').value;
  if (iframeValue !== '') {
    const row = document.createElement('div');
    row.classList.add('row');

    const col = document.createElement('div');
    col.classList.add('col-12');

    col.innerHTML = iframeValue;
    row.appendChild(col);

    el.appendChild(row);
  }
}
