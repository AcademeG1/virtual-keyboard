import {keys} from './keys.js';
import Header from './components/header/Header.js';
import Keyboard from './components/keyboard/Keyboards.js';
import Footer from './components/footer/Footer.js';
import Textarea from './components/textarea/Textarea.js';

const CSS_STYLES = {
  WRAPPER: 'wrapper',
  KEYBOARD_WRAPPER: 'keyboard__wrapper',
  KEYBOARD: 'keyboard',
  ACTIVE: 'active',
  BUTTON: 'button',
  HEADER_TITLE: 'header__title',
  FOOTER_TEXT: 'footer_text',
  TEXT_AREA: 'text_area',
};

// let flagCapsLock = false;
const pressed = new Set();
let language;
let languageShow;

if (localStorage.getItem('lang') == null) {
  localStorage.setItem('lang', JSON.stringify('en'));
  language = 'en';
} else {
  language = JSON.parse(localStorage.getItem('lang'));
}

const header = new Header('RSS Keyboard display', CSS_STYLES.HEADER_TITLE);
const keyboard = new Keyboard(keys);
const textArea = new Textarea();

const footer = new Footer(
    ['The keyboard was created in the operating system macOS',
      'To switch the language combination: left option + space'],
    CSS_STYLES.FOOTER_TEXT);
if (language == 'en') {
  languageShow = 'default';
} else {
  languageShow = 'rus';
}

document.body.innerHTML = `<div class="wrapper"></div></div>`;
document.querySelector('.wrapper').prepend(
    header.renderHeader(),
    textArea.createTextField(CSS_STYLES.TEXT_AREA),
    keyboard.createKeyboard(languageShow),
    footer.renderFooter());

let shiftPush = true;
let capsLockPush = false;

document.onkeydown = (event) => {
  pressed.add(event.code);
  if ((event.code == 'ShiftLeft' || event.code == 'ShiftRight') && shiftPush) {
    if (language == 'en') {
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      // eslint-disable-next-line max-len
      document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('shift'));
    } else {
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      // eslint-disable-next-line max-len
      document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('rusShift'));
    }
    shiftPush = false;
  }

  if (event.code == 'CapsLock') {
    if (capsLockPush == false) {
      if (language == 'en') {
        document.querySelector('.keyboard__wrapper').innerHTML = '';
        // eslint-disable-next-line max-len
        document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('capsLock'));
      } else {
        document.querySelector('.keyboard__wrapper').innerHTML = '';
        // eslint-disable-next-line max-len
        document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('capsLockRus'));
      }
      capsLockPush = true;
    } else {
      if (language == 'en') {
        document.querySelector('.keyboard__wrapper').innerHTML = '';
        // eslint-disable-next-line max-len
        document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('default'));
      } else {
        document.querySelector('.keyboard__wrapper').innerHTML = '';
        // eslint-disable-next-line max-len
        document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('rus'));
      }
      capsLockPush = false;
    }
  }

  if (pressed.has('AltLeft') && pressed.has('Space')) {
    if (language == 'en') {
      language = 'ru';
      languageShow = 'rus';
      localStorage.setItem('lang', JSON.stringify(language));
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      // eslint-disable-next-line max-len
      document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard(languageShow));
    } else {
      language = 'en';
      languageShow = 'default';
      localStorage.setItem('lang', JSON.stringify(language));
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      // eslint-disable-next-line max-len
      document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard(languageShow));
    }
    pressed.clear();
  }

  let save;
  keyboard.key.keyInDisplay.map((item) => {
    if (event.code == item.classList[0]) {
      save = item;
    }
  });
  event.preventDefault();
  if (event.code == 'Backspace') {
    textArea.getTextArea().value =
    textArea.getTextArea()
        .value.slice(0, textArea.getTextArea().value.length-1);
  }
  if (event.code == 'Space') {
    textArea.getTextArea().value += ' ';
  }
  if (save.textContent.length == 1) {
    textArea.getTextArea().value += save.textContent;
  }
  if (event.code == 'ArrowUp') {
    textArea.getTextArea().value += '\u25B2';
    // 25BC - вниз, 25C0 - лево, 25B6 - право, вверх - u25B2
  }
  if (event.code == 'ArrowLeft') {
    textArea.getTextArea().value += '\u25C0';
  }
  if (event.code == 'ArrowDown') {
    textArea.getTextArea().value += '\u25BC';
  }
  if (event.code == 'ArrowRight') {
    textArea.getTextArea().value += '\u25B6';
  }
  if (event.code == 'Enter') {
    textArea.getTextArea().value += '\n';
  }
  if (event.code == 'Tab') {
    textArea.getTextArea().value += '\u0009';
  }
  activeKeyKeyboard(event.code, 'add');
};

document.onkeyup = (event) => {
  activeKeyKeyboard(event.code, 'remove');
  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
    if (language == 'en') {
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      // eslint-disable-next-line max-len
      document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('default'));
    } else {
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      // eslint-disable-next-line max-len
      document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('rus'));
    }
    shiftPush = true;
  }

  if (pressed.has('AltLeft') && pressed.has('Space')) {
    if (language == 'en') {
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      // eslint-disable-next-line max-len
      document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('default'));
    } else {
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      // eslint-disable-next-line max-len
      document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('rus'));
    }
  }
  pressed.delete(event.code);
};

function activeKeyKeyboard(code, active, metaCode) {
  if (active == 'remove') {
    keyboard.key.keyInDisplay.map((item) => {
      if (code == item.classList[0]) {
        item.classList.remove('active');
        item.classList.remove('no-hover');
      }
    });
  }
  if (active == 'add') {
    keyboard.key.keyInDisplay.map((item) => {
      if (code == item.classList[0]) {
        item.classList.add('active');
        item.classList.add('no-hover');
      }
    });
  }
}

// mouse
keyboard.getKeyboard().onmousedown = (event) => {
  if (event.target.textContent.length > 1) {
    if (event.target.classList[0] == 'ArrowUp') {
      textArea.getTextArea().value += '\u25B2';
      // 25BC - вниз, 25C0 - лево, 25B6 - право, вверх - u25B2
    }
    if (event.target.classList[0] == 'ArrowLeft') {
      textArea.getTextArea().value += '\u25C0';
    }
    if (event.target.classList[0] == 'ArrowDown') {
      textArea.getTextArea().value += '\u25BC';
    }
    if (event.target.classList[0] == 'ArrowRight') {
      textArea.getTextArea().value += '\u25B6';
    }
    if (event.target.classList[0] == 'ShiftLeft' ||
    event.target.classList[0] == 'ShiftRight') {
      if (language == 'en') {
        document.querySelector('.keyboard__wrapper').innerHTML = '';
        // eslint-disable-next-line max-len
        document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('shift'));
      } else {
        document.querySelector('.keyboard__wrapper').innerHTML = '';
        // eslint-disable-next-line max-len
        document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('rusShift'));
      }
    }
  } else {
    textArea.getTextArea().value += event.target.textContent;
  }
  activeKeyMouse(event.target, 'add');
};

keyboard.getKeyboard().onmouseup = (event) => {
  if (event.target.classList[0] == 'ShiftLeft' ||
  event.target.classList[0] == 'ShiftRight') {
    if (language == 'en') {
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      // eslint-disable-next-line max-len
      document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('default'));
    } else {
      document.querySelector('.keyboard__wrapper').innerHTML = '';
      // eslint-disable-next-line max-len
      document.querySelector('.keyboard__wrapper').append(keyboard.createKeyboard('rus'));
    }
  }
  activeKeyMouse(event.target, 'remove');
};

function activeKeyMouse(code, active) {
  if (active == 'remove') {
    keyboard.key.keyInDisplay.map((item) => {
      if (code.classList[0] == item.classList[0]) {
        item.classList.remove('active');
        item.classList.remove('no-hover');
      }
    });
  };
  if (active == 'add') {
    keyboard.key.keyInDisplay.map((item) => {
      if (code.classList[0] == item.classList[0]) {
        item.classList.add('active');
        item.classList.add('no-hover');
      }
    });
  };
};
