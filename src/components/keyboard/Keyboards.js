import Key from '../key/Key.js';

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
  constructor(keys, language) {
    if (!Array.isArray(keys)) {
      // eslint-disable-next-line new-cap
      throw TypeError('Keys not is array');
    } else {
      this.keys = keys;
    }
    this.key = new Key();
    this.flagLines = true;
    this.lines;
    this.language = language;
  }

  createKeyboard() {
    // eslint-disable-next-line max-len
    const keyboardWrapper = this.createElement('div', CSS_STYLES.KEYBOARD_WRAPPER);
    const keyboard = this.createElement('div', CSS_STYLES.KEYBOARD);
    keyboardWrapper.append(keyboard);
    if (this.language == 'en') {
      this.keys.map((item, index) => {
        const divKey = this.key.render(item);
        keyboard.append(divKey);
      });
    } else if (this.language == 'ru') {
      this.keys.map((item, index) => {
        const divKey = this.key.render(item);
        keyboard.append(divKey);
        // if (index == 13 || index == 27 || index == 41 || index == 53) {
        //   keyboard.innerHTML += '<div class="clear__both"></div>';
        // }
      });
    }
    return keyboardWrapper;
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
