/* eslint-disable import/extensions */
import Key from '../key/Key.js';

const CSS_STYLES = {
  WRAPPER: 'wrapper',
  KEYBOARD_WRAPPER: 'keyboard__wrapper',
  KEYBOARD: 'keyboard',
  ACTIVE: 'active',
  BUTTON: 'button',
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
    this.key = new Key();
    this.keyboardWrapper = '';
    this.element = document.body;
  }

  createKeyboard(settingRender, newRender = false) {
    if (!newRender) {
      this.key.keyInDisplay = [];
    }
    this.keyboardWrapper = this.createElement('div', CSS_STYLES.KEYBOARD_WRAPPER);
    const keyboard = this.createElement('div', CSS_STYLES.KEYBOARD);
    this.keyboardWrapper.append(keyboard);

    this.keys.forEach((item) => {
      const keyDiv = this.key.render(item.code, item[settingRender]);
      keyboard.append(keyDiv);
    });
    return this.keyboardWrapper;
  }

  getKeyboard() {
    return this.keyboardWrapper;
  }

  createElement(tagName, className) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    return this.element;
  }
}

export default Keyboard;
