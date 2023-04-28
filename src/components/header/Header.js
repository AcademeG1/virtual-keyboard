class Header {
  constructor(headerTitle, headerClass) {
    if (typeof headerTitle !== 'string' || typeof headerClass !== 'string') {
      // eslint-disable-next-line new-cap
      throw TypeError('Error header-title is not string');
    }
    this.headerTitle = headerTitle;
    this.headerClass = headerClass;
  }

  renderHeader() {
    const header = this.createElement('h1', this.headerClass);
    header.textContent = this.headerTitle;
    return header;
  }

  createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
  }
}

export default Header;
