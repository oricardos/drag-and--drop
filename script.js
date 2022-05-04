import createSectionEl from './modules/createSectionEl.js';

function log(message) {
  console.log(message);
}

const cards = document.querySelectorAll('.card-element');
const dropzones = document.querySelectorAll('[class^="dropzone-"]');
const elements = document.querySelectorAll('.btn-add');

elements.forEach((element) => {
  element.addEventListener('click', function (evt) {
    const el = evt.target.parentElement;
    const section = evt.target.parentElement.parentElement.classList[1];
    const dataEl = el.getAttribute('data-element');
    createSectionEl(section, dataEl);
  });
});

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
