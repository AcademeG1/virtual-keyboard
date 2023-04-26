import {keys} from './keys.js';
import Header from './components/header/Header.js';
import Keyboard from './components/keyboard/Keyboards.js';
import Footer from './components/footer/Footer.js';
import {keysRus} from './keysRus.js';

const CSS_STYLES = {
  WRAPPER: 'wrapper',
  KEYBOARD_WRAPPER: 'keyboard__wrapper',
  KEYBOARD: 'keyboard',
  ACTIVE: 'active',
  BUTTON: 'button',
  HEADER_TITLE: 'header__title',
  FOOTER_TEXT: 'footer_text',
};

const pressed = new Set();
let language;

if (localStorage.getItem('lang') == null) {
  localStorage.setItem('lang', JSON.stringify('en'));
  language = 'en';
} else {
  language = JSON.parse(localStorage.getItem('lang'));
}

const header = new Header('RSS Keyboard display', CSS_STYLES.HEADER_TITLE);
const keyboard = new Keyboard(language == 'en' ? keys : keysRus, language);
const footer = new Footer(
    ['The keyboard was created in the operating system macOS',
      'To switch the language combination: left control + space'],
    CSS_STYLES.FOOTER_TEXT);

document.body.innerHTML = `<div class="wrapper"></div></div>`;
document.querySelector('.wrapper').prepend(
    header.renderHeader(),
    keyboard.createTextField(),
    keyboard.createKeyboard(),
    footer.renderFooter());

document.onkeydown = (event) => {
  pressed.add(event.code);
  if (pressed.has('AltLeft') && pressed.has('Space')) {
    if (language == 'en') {
      language = 'ru';
      localStorage.setItem('lang', JSON.stringify(language));
    } else {
      language = 'en';
      localStorage.setItem('lang', JSON.stringify(language));
    }
    pressed.clear();
  }
};

document.onkeyup = (event) => {
  pressed.delete(event.code);
};
