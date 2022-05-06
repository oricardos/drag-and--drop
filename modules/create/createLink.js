export default function createLink(el) {
  const linkName = document.getElementById('beacons-link-name');
  const linkValue = document.getElementById('beacons-link-value');

  if (linkValue.value !== '' && linkName.value !== '') {
    const link = document.createElement('a');
    link.classList.add('link-primary');
    link.setAttribute('href', linkValue.value);
    link.setAttribute('target', '_blank');
    link.innerHTML = linkName.value;
    el.appendChild(link);

    linkName.value = '';
    linkValue.value = '';
    linkName.focus();
  }
}
