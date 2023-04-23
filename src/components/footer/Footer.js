class Footer {
  constructor(footerTitle, footerClass) {
    if (!Array.isArray(footerTitle) || typeof footerClass !== 'string') {
      // eslint-disable-next-line new-cap
      throw TypeError('Error, footerTitle or FooterClass != string');
    }
    this.footerTitle = footerTitle;
    this.footerClass = footerClass;
  }

  renderFooter() {
    const footer = this.createElement('div', this.footerClass);
    const footerText = this.createElement('p', 'text');
    footerText.textContent = this.footerTitle[0];
    const footerDescription = this.createElement('p', 'text');
    footerDescription.textContent = this.footerTitle[1];
    footer.append(footerText, footerDescription);
    return footer;
  }

  createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
  }
}

export default Footer;
