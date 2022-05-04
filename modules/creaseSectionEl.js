import createLink from './createLink.js';
import createEmail from './createEmail.js';
import createTweet from './createTweet.js';

export default function createSectionEl(section, el) {
  const divSection = document.createElement('div');
  const divEl = document.createElement('div');
  const result = document.querySelector('.dropzone-result');

  divSection.classList.add(`beacons-${section}`);
  divEl.classList.add(el);

  //CRIANDO ELEMENTO TEXT BIO
  if (divSection.classList == 'beacons-section-text') {
    const text = document.createElement('p');
    text.classList.add('text-bio');
    text.innerHTML = 'Bio!';
    divEl.appendChild(text);
  }

  //CRIANDO ELEMENTOS LINKS
  if (divSection.classList == 'beacons-section-links') {
    createLink(divEl);
  }

  //CRIANDO ELEMENTOS EMAIL
  if (divSection.classList == 'beacons-section-email') {
    createEmail(divEl);
  }

  //CRIANDO ELEMENTOS TWEET
  if (divSection.classList == 'beacons-section-tweet') {
    createTweet(divEl);
  }

  console.log(divSection);

  divSection.appendChild(divEl);

  return result.appendChild(divSection);
}
