export default function showSections(id, section) {
  const isChecked = document.querySelector(id);

  isChecked.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      const sectionEl = document.querySelector(section);
      sectionEl.classList.remove('uk-hidden');
      sectionEl.classList.add('uk-block');
    } else {
      const sectionEl = document.querySelector(section);
      sectionEl.classList.remove('uk-block');
      sectionEl.classList.add('uk-hidden');
    }
  });
}
