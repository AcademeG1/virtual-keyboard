class Footer {
  constructor(footerTitle, footerClass) {
    if (!Array.isArray(footerTitle) || typeof footerClass !== 'string') {
      throw TypeError('Error, footerTitle or FooterClass != string');
    }
    [this.footerTitleFirst, this.footerTitleSecond] = footerTitle;
    this.footerClass = footerClass;
  }

  createElement(tagName, className) {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    } else {
      element.className = this.footerClass;
    }
    return element;
  }

  renderFooter() {
    const footer = this.createElement('div');
    const footerText = this.createElement('p', 'text');
    footerText.textContent = this.footerTitleFirst;
    const footerDescription = this.createElement('p', 'text');
    footerDescription.textContent = this.footerTitleSecond;
    footer.append(footerText, footerDescription);
    return footer;
  }
}

export default Footer;
