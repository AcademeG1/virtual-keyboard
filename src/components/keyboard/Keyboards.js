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
    this.keyboardWrapper;
  }

  createKeyboard(settingRender, newRender = false) {
    if (!newRender) {
      this.key.keyInDisplay = [];
    }
    // eslint-disable-next-line max-len
    this.keyboardWrapper = this.createElement('div', CSS_STYLES.KEYBOARD_WRAPPER);
    const keyboard = this.createElement('div', CSS_STYLES.KEYBOARD);
    this.keyboardWrapper.append(keyboard);

    this.keys.map((item, index) => {
      const keyDiv = this.key.render(item.code, item[settingRender]);
      keyboard.append(keyDiv);
    });
    return this.keyboardWrapper;
  }

  getKeyboard() {
    return this.keyboardWrapper;
  }

  createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
  }
}

export default Keyboard;
