import createLink from './createLink.js';
import createEmail from './createEmail.js';
import createTweet from './createTweet.js';
import createYouTube from './createYouTube.js';
import createMusic from './createMusic.js';
import createText from './createText.js';

export default function createSectionEl(section, el) {
  const divSection = document.createElement('div');
  const divEl = document.createElement('div');
  const preview = document.querySelector('.dropzone-preview');

  divSection.classList.add(`beacons-${section}`);
  divEl.classList.add(el);

  //CRIANDO ELEMENTO TEXT BIO
  if (divSection.classList == 'beacons-section-text') {
    createText(divEl);
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

  //CRIANDO ELEMENTOS DE YOUTUBE EMBED
  if (divSection.classList == 'beacons-section-video') {
    createYouTube(divEl);
  }

  //CRIANDO ELEMENTOS DE YOUTUBE EMBED
  if (divSection.classList == 'beacons-section-music') {
    createMusic(divEl);
  }

  // console.log(divSection);

  divSection.appendChild(divEl);

  return preview.appendChild(divSection);
}
