export default function createEmail(el) {
  const row = document.createElement('div');
  row.classList.add('row');

  const leftCol = document.createElement('div');
  const rightCol = document.createElement('div');

  leftCol.classList.add('col-2', 'd-flex', 'align-items-center');
  rightCol.classList.add('col-10');

  row.appendChild(leftCol);
  row.appendChild(rightCol);

  const icon = document.createElement('ion-icon');
  icon.setAttribute('name', 'mail-outline');

  leftCol.appendChild(icon);

  const mailto = document.getElementById('beacons-email').value;
  console.log(mailto);
  const email = document.createElement('a');
  email.classList.add('link-primary');
  email.setAttribute('href', `mailto: ${mailto}`);
  email.setAttribute('target', '_blank');
  email.innerHTML = mailto;

  leftCol.appendChild(email);
  rightCol.appendChild(email);

  el.appendChild(row);
}
