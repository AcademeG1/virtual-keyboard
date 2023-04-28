class Textarea {
  constructor() {
    this.textArea;
  }

  createTextField(cssStyle) {
    const textField = this.createElement('textarea', cssStyle);
    textField.id = 'textarea';
    this.textArea = textField;
    return textField;
  }

  getTextArea() {
    return this.textArea;
  }

  createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
  }
}

export default Textarea;
