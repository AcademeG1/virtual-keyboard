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
  constructor(keys) {
    if (!Array.isArray(keys)) {
      // eslint-disable-next-line new-cap
      throw TypeError('Keys not is array');
    } else {
      this.keys = keys;
    }
    this.key = new Key();
    this.flagLines = true;
    this.lines;
  }

  createKeyboard() {
    // eslint-disable-next-line max-len
    const keyboardWrapper = this.createElement('div', CSS_STYLES.KEYBOARD_WRAPPER);
    const keyboard = this.createElement('div', CSS_STYLES.KEYBOARD);
    this.keys.map((item, index) => {
      if (this.flagLines) {
        this.lines = undefined;
        this.lines = this.createElement('div', CSS_STYLES.LINES_BTN);
        this.flagLines = false;
      }
      if (index < 14) {
        console.log(this.lines.childNodes);
        this.lines.append(this.key.render(item));
        if (index == 13) {
          keyboard.append(this.lines);
          this.flagLines = true;
        }
      }
      if (index > 14 && index < 28) {
        this.lines.append(this.key.render(item));
        if (index == 27) {
          keyboard.append(this.lines);
          this.flagLines = true;
        }
      }
      if (index > 27 && index < 41) {
        this.lines.append(this.key.render(item));
        if (index == 40) {
          keyboard.append(this.lines);
          this.flagLines = true;
        }
      }
      if (index > 40 && index < 54) {
        this.lines.append(this.key.render(item));
        if (index == 53) {
          keyboard.append(this.lines);
          this.flagLines = true;
        }
      }
      if (index > 53 && index < 64) {
        this.lines.append(this.key.render(item));
        if (index == 63) {
          keyboard.append(this.lines);
          this.flagLines = true;
        }
      }
    });
    keyboardWrapper.append(keyboard);
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
