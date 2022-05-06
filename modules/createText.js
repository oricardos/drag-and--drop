export default function createText(el) {
  const textValue = document.getElementById('beacons-bio');
  if (textValue.value !== '') {
    const text = document.createElement('p');
    text.classList.add('text-bio');
    text.innerHTML = textValue.value;
    el.appendChild(text);

    textValue.focus();
  }
}
