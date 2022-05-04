export default function createText(el) {
  const textValue = document.getElementById('beacons-text').value;
  if (textValue !== '') {
    const text = document.createElement('p');
    text.classList.add('text-bio');
    text.innerHTML = 'Bio!';
    divEl.appendChild(text);
  }
}
