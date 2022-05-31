export default function preview() {
  const preview = document.querySelector('.preview-grid');
  const btnPreview = document.querySelector('.btn-preview');
  const mainGrid = document.querySelector('.main-grid');

  btnPreview.addEventListener('click', () => {
    btnPreview.classList.toggle('active');

    if (btnPreview.classList.contains('active')) {
      btnPreview.innerHTML = 'Voltar ➡️';
      mainGrid.classList.add('none');
      preview.classList.add('show-preview');
    } else {
      btnPreview.innerHTML = 'Pré-visualizar 👀';
      mainGrid.classList.remove('none');
      preview.classList.remove('show-preview');
    }
  });
}
