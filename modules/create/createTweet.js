import createSectionEl from './createSectionEl.js';

export default function createTweet() {
  const twitterValue = document.getElementById('beacons-tweet');
  const addTweet = document.querySelector('.add-tweet');

  addTweet.addEventListener('click', function (evt) {
    if (twitterValue.value !== '') {
      const switchTexts = document.querySelector('.switch-tweet');
      switchTexts.classList.remove('d-none');
      switchTexts.classList.add('d-flex');

      const el = evt.target.parentElement;
      const section = el.parentElement.classList[1];

      const row = document.createElement('div');
      row.classList.add('row');

      const col = document.createElement('div');
      col.classList.add('col-12');

      // todo: conseguir mostrar o tweet
      const tweet = `
        <span class="badge bg-primary">
          <a href="https://twitter.com/${twitterValue.value}?ref_src=twsrc%5Etfw"
            target="_blank"
            class="twitter-follow-button text-white text-decoration-none" data-show-count="false">
              Follow ${twitterValue.value}
          </a>
        </span>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  `;

      col.innerHTML = tweet;
      row.appendChild(col);

      createSectionEl(section, row);
      twitterValue.value = '';
      twitterValue.focus();
    }
  });
}
