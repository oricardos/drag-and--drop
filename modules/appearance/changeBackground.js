export default function changeBackground() {
  const chooseFileSection = document.querySelector('.appearance .chooseFile');
  const chooseUrlSection = document.querySelector('.appearance .chooseUrl');
  const chooseColor = document.querySelector('.appearance .chooseColor');
  const preview = document.querySelector('.preview');

  const background = window.localStorage.getItem('background');

  const changeBackgroundBtn = document.querySelector(
    '.appearance .change-background',
  );

  const choosesBtns = document.querySelectorAll('.appearance .uk-radio');

  choosesBtns.forEach((choose) => {
    choose.addEventListener('click', function (evt) {
      const el = evt.target;
      if (el.id === 'chooseFile') {
        chooseFileSection.classList.remove('uk-hidden');
        chooseUrlSection.classList.add('uk-hidden');
        chooseColor.classList.add('uk-hidden');
      }
      if (el.id === 'chooseUrl') {
        chooseFileSection.classList.add('uk-hidden');
        chooseUrlSection.classList.remove('uk-hidden');
        chooseColor.classList.add('uk-hidden');
      }
      if (el.id === 'chooseColor') {
        chooseFileSection.classList.add('uk-hidden');
        chooseUrlSection.classList.add('uk-hidden');
        chooseColor.classList.remove('uk-hidden');
      }
    });
  });

  changeBackgroundBtn.addEventListener('click', function () {
    const backgroundFile = document.getElementById('backgroundFile').value;
    const backgroundUrl = document.getElementById('backgroundUrl').value;
    const backgroundColor = document.getElementById('backgroundColor').value;

    if (backgroundFile) {
      window.localStorage.setItem('background', backgroundFile);
      preview.style.backgroundColor = backgroundFile;
    } else if (backgroundUrl) {
      window.localStorage.setItem('background', backgroundUrl);
      preview.style.backgroundImage = `url(${backgroundUrl})`;
    } else if (backgroundColor) {
      window.localStorage.setItem('background', backgroundColor);
      preview.style.backgroundImage = `url(${backgroundColor})`;
    }

    document.location.reload(true);
  });

  if (background.startsWith('#')) {
    preview.style.backgroundColor = background;
  } else if (background.startsWith('http')) {
    preview.style.backgroundImage = `url(${background})`;
  }
}
