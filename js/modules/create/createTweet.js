import changeButtonText from '../changeButtonText.js';
import showSections from '../showSections/showSections.js';
import createSectionEl from './createSectionEl.js';

export default function createTweet() {
  // captura os elementos
  const twitterValue = document.getElementById('beacons-tweet');
  const addTweet = document.querySelector('.add-tweet');
  const twitter = window.localStorage.getItem('twitter');

  // função que cria o elemento
  function createTwitterSection(profile) {
    const row = document.createElement('div');
    const col = document.createElement('div');
    const titleSection = document.createElement('h3');

    titleSection.innerHTML = 'Twitter';

    row.classList.add('row');
    col.classList.add('col-12');

    const twitterProfileElement = `
      <span class="badge bg-primary">
        <a href="https://twitter.com/${profile}?ref_src=twsrc%5Etfw"
          target="_blank"
          class="twitter-follow-button twitter-badge" data-show-count="false">
            Follow ${profile}
        </a>
      </span>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
`;

    col.innerHTML = twitterProfileElement;
    row.appendChild(titleSection);
    row.appendChild(col);

    createSectionEl('section-twitter', row);
  }

  // altera o texto do botão para 'atualizar' quando o valor do input for alterado
  twitterValue.addEventListener('keyup', function () {
    changeButtonText(addTweet);
  });

  // adiciona o elemento no preview
  addTweet.addEventListener('click', function (evt) {
    if (twitterValue.value !== '') {
      window.localStorage.setItem('twitter', twitterValue.value);
      document.location.reload(true);
      createTwitterSection(twitterValue.value);
    }
  });

  // se já existir um email no localStorage, adiciona no preview
  if (twitter) {
    //switch para mostrar/ocultar no preview
    const switchTwitter = document.querySelector('.switch-tweet');
    switchTwitter.classList.remove('uk-hidden');
    switchTwitter.classList.add('uk-flex');
    showSections('#switch-tweet', '.beacons-section-twitter');

    twitterValue.value = twitter;
    createTwitterSection(twitter);
  }
}
