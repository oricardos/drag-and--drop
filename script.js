import cookie from './modules/cookie.js';
import draganddrop from './modules/draganddrop.js';
import createProfilePhoto from './modules/create/createProfilePhoto.js';
import createUsername from './modules/create/createUsername.js';
import createText from './modules/create/createText.js';
import createLink from './modules/create/createLink.js';
import createEmail from './modules/create/createEmail.js';
import createTweet from './modules/create/createTweet.js';
import createYouTube from './modules/create/createYouTube.js';
import createMusic from './modules/create/createMusic.js';

import showTexts from './modules/showSections/showTexts.js';
import showLinks from './modules/showSections/showLinks.js';
import showEmail from './modules/showSections/showEmail.js';
import showTweet from './modules/showSections/showTweet.js';
import showVideo from './modules/showSections/showVideo.js';
import showMusic from './modules/showSections/showMusic.js';

cookie();
draganddrop();
createProfilePhoto();
createUsername();
createText();
createLink();
createEmail();
createTweet();
createYouTube();
createMusic();

showTexts();
showLinks();
showEmail();
showTweet();
showVideo();
showMusic();
