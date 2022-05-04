export default function createTweet(el) {
  const tweetId = document.getElementById('beacons-tweet').value;
  const row = document.createElement('div');
  row.classList.add('row');

  const col = document.createElement('div');
  col.classList.add('col-12');

  // TODO: CONSEGUIR MOSTRAR O TWEET
  const tweet = `
  <blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
    <a href="https://twitter.com/${tweetId}?ref_src=twsrc%5Etfw">
      tweet
    </a>
  </blockquote> 
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  `;

  col.innerHTML = tweet;
  row.appendChild(col);

  el.appendChild(row);
}
