class Key {
  constructor() {
    this.keyInDisplay = [];
  }

  render(keyClass, keyContent) {
    const key = this.createElement('div', keyClass);

    switch (this.getNameButton(keyClass)) {
      case 'ArrowUp':
        return this.setNameInBtn(key, false, 'rotateNone', `<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Push"> <g id="Up"> <g> <polyline data-name="Down" fill="none" id="Down-2" points="19 17.9 12 10.9 5 17.9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="19" x2="5" y1="6.1" y2="6.1"></line> </g> </g> </g> </g> </g></svg>`);
      case 'ArrowDown':
        return this.setNameInBtn(key, false, 'hundredEighty', `<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Push"> <g id="Up"> <g> <polyline data-name="Down" fill="none" id="Down-2" points="19 17.9 12 10.9 5 17.9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="19" x2="5" y1="6.1" y2="6.1"></line> </g> </g> </g> </g> </g></svg>`);
      case 'ArrowRight':
        return this.setNameInBtn(key, false, 'rotateNine', `<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Push"> <g id="Up"> <g> <polyline data-name="Down" fill="none" id="Down-2" points="19 17.9 12 10.9 5 17.9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="19" x2="5" y1="6.1" y2="6.1"></line> </g> </g> </g> </g> </g></svg>`);
      case 'ArrowLeft':
        return this.setNameInBtn(key, false, 'rotate', `<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Push"> <g id="Up"> <g> <polyline data-name="Down" fill="none" id="Down-2" points="19 17.9 12 10.9 5 17.9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="19" x2="5" y1="6.1" y2="6.1"></line> </g> </g> </g> </g> </g></svg>`);
      default:
        return this.setNameInBtn(key, keyContent);
    }
  }

  setNameInBtn(key, content, id, image) {
    if (image) {
      key.innerHTML = image;
    }
    if (content) {
      key.textContent = content;
    }
    if (id) {
      key.firstChild.id = id;
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
