export default function createLink(el) {
  const linkValue = document.getElementById('beacons-links').value;
  if (linkValue !== '') {
    const link = document.createElement('a');
    link.classList.add('link-primary');
    link.setAttribute('href', linkValue);
    link.setAttribute('target', '_blank');
    link.innerHTML = linkValue;
    el.appendChild(link);
  }
}
