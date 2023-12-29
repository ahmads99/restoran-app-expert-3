// eslint-disable-next-line import/no-unresolved
import logoImage from '../../../public/images/logo/logo.png?sizes[]=55';

// eslint-disable-next-line import/no-unresolved
import logoImageWebp from '../../../public/images/logo/logo.png?sizes[]=55&format=webp';

import generateCurrentYear from '../../utilities/get-current-year';
import element from '../../utilities/get-element';

class FooterElement extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
    this._printCurrentYear();
  }

  _render() {
    this.innerHTML = `
      <footer>
        <section class="company-footer">
          <div class="logo">
            
            <picture>
              <source media="(min-width:200)" srcset="${logoImageWebp.srcSet} type="image/webp">
              <source media="(min-width:200)" srcset="${logoImage.srcSet} type="image/jpg">
              <img
                data-src="${logoImage.src}"
                data-srcset="${logoImage.srcSet}"
                width="${logoImage.width}"
                height="${logoImage.height}"
                class="lazyload"
                alt="logo restaurant-mads"
              />
            </picture>

            <h2>restaurant-mads</h2>
          </div>
          <div class="company-copyright">
            <h2>
              &copy; copyright <span class="year"></span> |
              <span class="company-name">restaurant-mads</span>
            </h2>
          </div>
        </section>
      </footer>
    `;
  }

  _printCurrentYear() {
    const elementYearText = element.getElementAll('.year');
    elementYearText.forEach((yearText) => generateCurrentYear(yearText));
  }
}

customElements.define('footer-element', FooterElement);
