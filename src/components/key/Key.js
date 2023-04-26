class Key {
  constructor() {
    this.keyInDisplay = [];
  }

  render(keyClass, upperCase) {
    const key = this.createElement('div', keyClass);
    if (this.getNameButton(keyClass) == 'Backquote') {
      key.textContent = this.getNameButton('§');
      this.keyInDisplay.push(key);
      return key;
    }
    if (this.getNameButton(keyClass) == 'Minus') {
      key.textContent = this.getNameButton('-');
      this.keyInDisplay.push(key);
      return key;
    }
    if (this.getNameButton(keyClass) == 'Equal') {
      key.textContent = this.getNameButton('=');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'BracketLeft') {
      key.textContent = this.getNameButton('[');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'BracketRight') {
      key.textContent = this.getNameButton(']');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'Semicolon') {
      key.textContent = this.getNameButton(';');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'Quote') {
      key.textContent = this.getNameButton('\'');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'Backslash') {
      key.textContent = this.getNameButton('\\');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'Comma') {
      key.textContent = this.getNameButton(',');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'Period') {
      key.textContent = this.getNameButton('.');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'Slash') {
      key.textContent = this.getNameButton('/');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'IntlBackslash') {
      key.textContent = this.getNameButton('`');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'ShiftLeft' ||
      this.getNameButton(keyClass) == 'ShiftRight') {
      key.textContent = this.getNameButton('Shift');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'MetaLeft' ||
      this.getNameButton(keyClass) == 'MetaRight') {
      key.textContent = this.getNameButton('command');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'ControlLeft') {
      key.textContent = this.getNameButton('control');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'AltLeft' ||
      this.getNameButton(keyClass) == 'AltRight') {
      key.textContent = this.getNameButton('option');
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'ArrowUp') {
      key.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Push"> <g id="Up"> <g> <polyline data-name="Down" fill="none" id="Down-2" points="19 17.9 12 10.9 5 17.9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="19" x2="5" y1="6.1" y2="6.1"></line> </g> </g> </g> </g> </g></svg>`;
      key.firstChild.id = 'rotateNone';
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'ArrowDown') {
      key.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Push"> <g id="Up"> <g> <polyline data-name="Down" fill="none" id="Down-2" points="19 17.9 12 10.9 5 17.9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="19" x2="5" y1="6.1" y2="6.1"></line> </g> </g> </g> </g> </g></svg>`;
      key.firstChild.id = 'hundredEighty';
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'ArrowRight') {
      key.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Push"> <g id="Up"> <g> <polyline data-name="Down" fill="none" id="Down-2" points="19 17.9 12 10.9 5 17.9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="19" x2="5" y1="6.1" y2="6.1"></line> </g> </g> </g> </g> </g></svg>`;
      key.firstChild.id = 'rotateNine';
      this.keyInDisplay.push(key);
      return key;
    }

    if (this.getNameButton(keyClass) == 'ArrowLeft') {
      key.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Push"> <g id="Up"> <g> <polyline data-name="Down" fill="none" id="Down-2" points="19 17.9 12 10.9 5 17.9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="19" x2="5" y1="6.1" y2="6.1"></line> </g> </g> </g> </g> </g></svg>`;
      key.firstChild.id = 'rotate';
      this.keyInDisplay.push(key);
      return key;
    }
    if (!upperCase) {
      key.textContent = this.getNameButton(keyClass).toLowerCase();
    } else {
      key.textContent = this.getNameButton(keyClass).toUpperCase();
    }
    this.keyInDisplay.push(key);
    return key;
  }

  getKeyInDisplay() {
    return this.keyInDisplay;
  }

  createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    element.className += ' keyboard__key key';
    return element;
  }

  getNameButton(buttonName) {
    if (buttonName.slice(0, 5) == 'Digit') {
      return buttonName[buttonName.length-1];
    }
    if (buttonName.slice(0, 3) == 'Key') {
      return buttonName[buttonName.length-1];
    }
    return buttonName;
  }
}

export default Key;
