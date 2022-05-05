export default function createLink(el) {
  const linkName = document.getElementById('beacons-link-name').value;
  const linkValue = document.getElementById('beacons-link-value').value;

  if (linkValue !== '') {
    const link = document.createElement('a');
    link.classList.add('link-primary');
    link.setAttribute('href', linkValue);
    link.setAttribute('target', '_blank');
    link.innerHTML = linkName;
    el.appendChild(link);
  }
}
