export default function changeEffect() {
  const titleFontColor = document.getElementById('titleFontColor');
  const titleFontFamily = document.getElementById('titleFontFamily');

  const fontColor = document.getElementById('fontColor');
  const fontFamily = document.getElementById('fontFamily');

  const title = document.querySelectorAll('.preview h3', '.preview h4');
  const other = document.querySelectorAll('.preview p', '.preview a');

  const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBGe5fgUuAB4Iz6HF_YvtiiW0gynN2snu8`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const fonts = data.items;
      // cria o elemento de option com as fontes do google
      function createFontOption(local, font) {
        const option = document.createElement('option');
        option.value = font.family;
        option.innerText = font.family;
        local.appendChild(option);
      }

      fonts.forEach((font) => {
        createFontOption(titleFontFamily, font);
        createFontOption(fontFamily, font);
      });
    });

  function changeColor(local, color) {
    local.forEach((t) => {
      t.style.color = color;
    });
  }

  function changeFont(local, font) {
    local.forEach((t) => {
      t.style.fontFamily = font;
    });
  }

  // alteracoes do titulo
  // alteracao da cor do titulo
  titleFontColor.addEventListener('change', () => {
    changeColor(title, titleFontColor.value);
  });

  // alteracao da fonte do titulo
  titleFontFamily.addEventListener('change', () => {
    changeFont(title, titleFontFamily.value);
  });

  // alteracoes do texto
  // alteracao da cor do texto
  fontColor.addEventListener('change', () => {
    changeColor(other, fontColor.value);
  });

  // alteracao da fonte do texto
  fontFamily.addEventListener('change', () => {
    changeFont(other, fontFamily.value);
  });
}
