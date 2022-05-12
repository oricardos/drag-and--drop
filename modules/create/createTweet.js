import createSectionEl from './createSectionEl.js';

export default function createTweet() {
  const twitterValue = document.getElementById('beacons-tweet');
  const addTweet = document.querySelector('.add-tweet');
  const twitter = window.localStorage.getItem('twitter');

  // função que cria o elemento
  function createTwitterSection(profile){
    const row = document.createElement('div');
    const col = document.createElement('div');
    const titleSection = document.createElement('h3');

    titleSection.innerHTML = 'Twitter';

    
    row.classList.add('row');
    col.classList.add('col-12');

    // todo: conseguir mostrar o tweet
    const twitterProfileElement = `
      <span class="badge bg-primary">
        <a href="https://twitter.com/${profile}?ref_src=twsrc%5Etfw"
          target="_blank"
          class="twitter-follow-button text-white text-decoration-none" data-show-count="false">
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

  addTweet.addEventListener('click', function (evt) {
    if (twitterValue.value !== '') {
      window.localStorage.setItem('twitter', twitterValue.value);
      document.location.reload(true);
      createTwitterSection(twitterValue.value);
    }
  });

  if (twitter) {
    const switchTwitter = document.querySelector('.switch-tweet');
      switchTwitter.classList.remove('d-none');
      switchTwitter.classList.add('d-flex');

    twitterValue.value = twitter;
    createTwitterSection(twitter);
  }
}
