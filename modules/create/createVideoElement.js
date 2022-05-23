export default function createVideoElement(link) {
  const plataforms = ['tiktok', 'vimeo', 'youtube', 'instagram'];
  const plataformLink = link.split('/')[2].split('.');
  let plataform = plataforms.filter((p) => plataformLink.includes(p));
  let h3;
  let className;
  let id;
  let src = `https://${plataform}/${id}`;

  if (plataform[0] === 'youtube') {
    h3 = 'YouTube';
    className = 'youtube';
    plataform = 'youtube.com/embed';
    id = link.split('v=')[1].split('&')[0];
  } else if (plataform[0] === 'vimeo') {
    h3 = 'Vimeo';
    className = 'vimeo';
    plataform = 'player.vimeo.com/video';
    id = link.split('/')[link.split('/').length - 1];
  } else if (plataform[0] === 'tiktok') {
    h3 = 'TikTok';
    className = 'tiktok';
    plataform = 'tiktok.com/embed';
    id = link.split('/')[5].split('id=');
  } else if (plataform[0] === 'instagram') {
    h3 = 'Instagram';
    className = 'instagram';
    plataform = 'instagram.com/reel';
    id = link.split('/')[4];
    src = `https://${plataform}/${id}/embed/captioned`;
  }

  const video = `
  <h3>${h3}</h3>
    <iframe title="url" class="${className}Wrapper" src="${src}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

  return video;
}
