class Textarea {
  constructor() {
    this.textArea = '';
    this.element = document.body;
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
    this.element = document.createElement(tagName);
    this.element.className = className;
    return this.element;
  }
}

export default Textarea;
