class Key {
  constructor() {}

  render(keyClass) {
    const key = this.createElement('div', keyClass);
    if (this.getNameButton(keyClass) == 'Backquote') {
      key.textContent = this.getNameButton('§');
      return key;
    }
    key.textContent = this.getNameButton(keyClass);
    return key;
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
