// eslint-disable-next-line import/no-unresolved
import heroImage from '../../../public/images/hero/hero-image_4.jpg?sizes[]=1080,sizes[]=1200,sizes[]=1350';

// eslint-disable-next-line import/no-unresolved
import heroImageWebp from '../../../public/images/hero/hero-image_4.jpg?sizes[]=1080,sizes[]=1200,sizes[]=1350&format=webp';

import element from '../../utilities/get-element';
import createSourceElement from './helper/create-source-element';

const { getElement } = element;
class HeroElement extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
    this._goToPrologue();
  }

  _render() {
    this.innerHTML = `
      <section class="hero">
        <button type="button" class="skip-content home" tabindex="1">Skip to content</button>
        
        <picture>
        ${createSourceElement(heroImageWebp, 'webp')}
        ${createSourceElement(heroImage, 'jpg')}
          <img
            data-src="${heroImage.src}"
            data-srcSet="${heroImage.srcSet}"
            width="${heroImage.width}"
            height="${heroImage.height}"
            alt="background website dengan gambar aneka makanan diatas meja"
            class="lazyload hero-image"
            loading="lazy"
          />
        </picture>

        <div class="overlay">
          <h2>restaurant<br>mads</h2>
          <h3>Beragam pilihan restaurant terbaik di Indonesia.</h3>
          <button type="button" id="button-prologue" class="button">Pendahuluan</button>
        </div>
      </section>
    `;
  }

  _goToPrologue() {
    getElement('#button-prologue').addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();

      const prologue = getElement('.prologue');

      if (prologue) {
        prologue.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

customElements.define('hero-element', HeroElement);
