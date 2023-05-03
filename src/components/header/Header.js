class Header {
  constructor(headerTitle, headerClass) {
    if (typeof headerTitle !== 'string' || typeof headerClass !== 'string') {
      throw TypeError('Error header-title is not string');
    }
    this.headerTitle = headerTitle;
    this.headerClass = headerClass;
  }

  renderHeader() {
    const header = this.createElement('h1');
    header.textContent = this.headerTitle;
    return header;
  }

  createElement(tagName) {
    const element = document.createElement(tagName);
    element.className = this.headerClass;
    return element;
  }
}

export default Header;
