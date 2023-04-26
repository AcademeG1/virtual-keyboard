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

let flagCapsLock = false;
const pressed = new Set();
let language;

if (localStorage.getItem('lang') == null) {
  localStorage.setItem('lang', JSON.stringify('en'));
  language = 'en';
} else {
  language = JSON.parse(localStorage.getItem('lang'));
}

const header = new Header('RSS Keyboard display', CSS_STYLES.HEADER_TITLE);
const keyboard = new Keyboard(language == 'en' ? keys : keysRus);
const footer = new Footer(
    ['The keyboard was created in the operating system macOS',
      'To switch the language combination: left option + space'],
    CSS_STYLES.FOOTER_TEXT);

document.body.innerHTML = `<div class="wrapper"></div></div>`;
document.querySelector('.wrapper').prepend(
    header.renderHeader(),
    keyboard.createTextField(),
    keyboard.createKeyboard(language),
    footer.renderFooter());

document.onkeydown = (event) => {
  pressed.add(event.code);
  keyboard.key.keyInDisplay.map((item) => {
    if (event.code == item.classList[0]) {
      item.classList.add('active');
      return;
    }
  });
  if (event.code == 'ArrowUp') {
    document.querySelector('textarea').value += '\u25B2';
    return;
  }
  if (event.code == 'ArrowLeft') {
    document.querySelector('textarea').value += '\u25C0';
    return;
  }
  if (event.code == 'ArrowDown') {
    document.querySelector('textarea').value += '\u25BC';
    return;
  }
  if (event.code == 'ArrowRight') {
    document.querySelector('textarea').value += '\u25B6';
    return;
  }
  if (event.code == 'Space') {
    document.querySelector('textarea').value += ' ';
    return;
  }
  if (event.code == 'CapsLock') {
    flagCapsLock = !flagCapsLock;
    document.querySelector('.keyboard__wrapper').innerHTML = '';
    document.querySelector('.keyboard__wrapper').
        append(keyboard.createKeyboard(language, true, flagCapsLock));
  }

  if (event.code[event.code.length-1] ==
    event.code[event.code.length-1].toUpperCase()) {
    document.querySelector('textarea').value +=
    flagCapsLock ? event.code[event.code.length-1].toUpperCase() :
    event.code[event.code.length-1].toLowerCase();
  }
  if (pressed.has('AltLeft') && pressed.has('Space')) {
    if (language == 'en') {
      language = 'ru';
      localStorage.setItem('lang', JSON.stringify(language));
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      // eslint-disable-next-line max-len
      document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard(language, true));
    } else {
      language = 'en';
      localStorage.setItem('lang', JSON.stringify(language));
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      // eslint-disable-next-line max-len
      document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard(language, true));
    }
    pressed.clear();
  }
};
// console.log(keyboard.getKeyboard)
keyboard.getKeyboard().onclick = (event) => {
  if (event.target.textContent.length > 1) {
    if (event.target.classList[0] == 'ArrowUp') {
      document.querySelector('textarea').value += '\u25B2';
      // 25BC - вниз, 25C0 - лево, 25B6 - право, вверх - u25B2
    }
    if (event.target.classList[0] == 'ArrowLeft') {
      document.querySelector('textarea').value += '\u25C0';
      // 25BC - вниз, 25C0 - лево, 25B6 - право, вверх - u25B2
    }
    if (event.target.classList[0] == 'ArrowDown') {
      document.querySelector('textarea').value += '\u25BC';
      // 25BC - вниз, 25C0 - лево, 25B6 - право, вверх - u25B2
    }
    if (event.target.classList[0] == 'ArrowRight') {
      document.querySelector('textarea').value += '\u25B6';
      // 25BC - вниз, 25C0 - лево, 25B6 - право, вверх - u25B2
    }
    if (event.target.classList[0] == 'CapsLock') {
      flagCapsLock = !flagCapsLock;
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      document.querySelector('.keyboard__wrapper').append(
          keyboard.createKeyboard(language, true, flagCapsLock));
    }
  } else {
    document.querySelector('textarea').value += event.target.textContent;
  }
};

document.onkeyup = (event) => {
  keyboard.key.keyInDisplay.map((item) => {
    if (event.code == item.classList[0]) {
      item.classList.remove('active');
    }
  });
  pressed.delete(event.code);
};
