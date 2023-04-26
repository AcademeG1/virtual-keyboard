import Key from '../key/Key.js';
import {keysRus} from '../../keysRus.js';
const CSS_STYLES = {
  WRAPPER: 'wrapper',
  KEYBOARD_WRAPPER: 'keyboard__wrapper',
  KEYBOARD: 'keyboard',
  ACTIVE: 'active',
  BUTTON: 'button',
  TEXT_AREA: 'text_area',
  LINES_BTN: 'lines__keyboard',
};

class Keyboard {
  constructor(keys) {
    if (!Array.isArray(keys)) {
      // eslint-disable-next-line new-cap
      throw TypeError('Keys not is array');
    } else {
      this.keys = keys;
    }
    this.keysRus = keysRus;
    this.key = new Key();
    this.flagLines = true;
    this.lines;
    this.keyboardWrapper;
  }

  createKeyboard(language, addedRender = false, upperCase = false) {
    // eslint-disable-next-line max-len
    this.keyboardWrapper = undefined;
    // eslint-disable-next-line max-len
    this.keyboardWrapper = this.createElement('div', CSS_STYLES.KEYBOARD_WRAPPER);
    const keyboard = this.createElement('div', CSS_STYLES.KEYBOARD);
    this.keyboardWrapper.append(keyboard);
    if (language == 'en') {
      this.keys.map((item, index) => {
        const keyDiv = this.key.render(item, upperCase);
        keyboard.append(keyDiv);
      });
      console.log('en', keyboard);
    } else {
    // if (language == 'ru') {
    //   this.keysRus.map((item, index) => {
    //     keyboard.append(this.key.render(item));
    //   });
      // console.log('ru', keyboard);
    }
    if (addedRender) {
      return keyboard;
    } else {
      return this.keyboardWrapper;
    }
  }

  getKeyboard() {
    return this.keyboardWrapper;
  }

  createTextField() {
    const textField = this.createElement('textarea', CSS_STYLES.TEXT_AREA);
    textField.id = 'textarea';
    return textField;
  }

  createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
  }
}

export default Keyboard;
