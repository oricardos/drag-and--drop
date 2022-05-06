export default function createYouTube(el) {
  const linkValue = document.getElementById('beacons-video');
  if (linkValue.value !== '') {
    const row = document.createElement('div');
    row.classList.add('row');

    const col = document.createElement('div');
    col.classList.add('video-container');

    const video = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${linkValue.value}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

    col.innerHTML = video;
    row.appendChild(col);

    el.appendChild(row);

    linkValue.value = '';
    linkValue.focus();
  }
}
