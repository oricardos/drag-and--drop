export default function createTweet(el) {
  const tweetId = document.getElementById('beacons-tweet');
  if (tweetId.value) {
    const row = document.createElement('div');
    row.classList.add('row');

    const col = document.createElement('div');
    col.classList.add('col-12');

    // TODO: CONSEGUIR MOSTRAR O TWEET
    const tweet = `
    <span class="badge bg-primary">
      <a href="https://twitter.com/${tweetId.value}?ref_src=twsrc%5Etfw"
        target="_blank"
        class="twitter-follow-button text-white text-decoration-none" data-show-count="false">
          Follow ${tweetId.value}
      </a>
    </span>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  `;

    col.innerHTML = tweet;
    row.appendChild(col);

    el.appendChild(row);
    tweetId.value = '';
    tweetId.focus();
  }
}
