import preview from './preview.js';
import cookie from './modules/cookie.js';
import draganddrop from './modules/draganddrop.js';

// modulos de criacao
import createProfilePhoto from './modules/create/createProfilePhoto.js';
import createUsername from './modules/create/createUsername.js';
import createText from './modules/create/createText.js';
import createLink from './modules/create/createLink.js';
import createEmail from './modules/create/createEmail.js';
import createTweet from './modules/create/createTweet.js';
import createVideo from './modules/create/createVideo.js';
import createMusic from './modules/create/createMusic.js';

// modulos de aparencia
import changeBackground from './modules/appearance/changeBackground.js';
import changeEffect from './modules/appearance/changeEffect.js';
import changeFont from './modules/appearance/changeFont.js';

introJs().start();
preview();
cookie();
draganddrop();

// modulos de criacao
createProfilePhoto();
createUsername();
createText();
createLink();
createEmail();
createTweet();
createVideo();
createMusic();

// modulos de aparencia
changeBackground();
changeEffect();
changeFont();
