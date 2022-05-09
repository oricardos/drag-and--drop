import cookie from './modules/cookie.js';
import createText from './modules/create/createText.js';
import createLink from './modules/create/createLink.js';
import createEmail from './modules/create/createEmail.js';
import createTweet from './modules/create/createTweet.js';
import createYouTube from './modules/create/createYouTube.js';
import createMusic from './modules/create/createMusic.js';

cookie();
createText();
createLink();
createEmail();
createTweet();
createYouTube();
createMusic();

function log(message) {
  console.log(message);
}

const cards = document.querySelectorAll('.card-element');
const dropzones = document.querySelectorAll('[class^="dropzone-"]');

cards.forEach((card) => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
});

function dragstart() {
  dropzones.forEach((dropzone) => dropzone.classList.add('highlight'));
  this.classList.add('is-dragging');
}

function drag() {
  log('during');
}

function dragend() {
  dropzones.forEach((dropzone) => dropzone.classList.remove('highlight'));
  this.classList.remove('is-dragging');
}

dropzones.forEach((dropzone) => {
  dropzone.addEventListener('dragenter', dragenter);
  dropzone.addEventListener('dragover', dragover);
  dropzone.addEventListener('dragleave', dragleave);
  dropzone.addEventListener('drop', drop);
});

function dragenter() {
  log('enter');
}

function dragover() {
  this.classList.add('over');
  // get draggin card
  const cardBeingDragged = document.querySelector('.is-dragging');
  this.appendChild(cardBeingDragged);
}

function dragleave() {
  this.classList.remove('over');
}

function drop() {
  log('drop');
}
