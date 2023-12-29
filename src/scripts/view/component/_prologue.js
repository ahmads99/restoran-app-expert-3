// eslint-disable-next-line import/no-unresolved
import prologueImage from '../../../public/images/other/prologue.jpg?sizes[]=350,sizes[]=768';

// eslint-disable-next-line import/no-unresolved
import prologueImageWebp from '../../../public/images/other/prologue.jpg?sizes[]=350,sizes[]=768&format=webp';

import createSourceElement from './helper/create-source-element';

class PrologueElement extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <section id="prologue" class="prologue">
        <section class="image-prologue">

          <picture>
          ${createSourceElement(prologueImageWebp, 'webp')}
          ${createSourceElement(prologueImage, 'jpg')}
            <img
              data-src="${prologueImage.src}"
              data-srcset="${prologueImage.srcSet}"
              width="${prologueImage.width}"
              height="${prologueImage.height}"
              class="lazyload prologue-image"
              loading="lazy"
              alt="foto suasana restaurant Union favorite people Jakarta"
            />
          </picture>

          <div class="overlay">
            <div class="title">
              <h2>Union Jakarta</h2>
              <p>Jakarta, Indonesia</p>
              </div>
          </div>
        </section>
        <article class="text-prologue">
          <h2>Pendahuluan</h2>
          <p>
          Selamat datang di Restaurant Mads, platform katalog restoran berbasis website yang menyediakan daftar restoran dari berbagai daerah di Indonesia, mulai dari Sabang hingga Merauke. Kami hadir untuk membantu Anda dalam memilih restoran yang tepat untuk dikunjungi. Restaurant Mads menampilkan berbagai informasi mengenai restoran, seperti rating, lokasi, dan deskripsi yang dapat membantu memberikan gambaran dan deskripsi mengenai restoran yang akan Anda kunjungi. Dengan adanya Restaurant Mads, Anda dapat menemukan restoran yang sesuai dengan selera dan kebutuhan Anda. Kami berharap Restaurant Mads dapat membantu Anda dalam menemukan pengalaman kuliner yang menyenangkan dan memuaskan.
          </p>
        </article>
      </section>
    `;
  }
}

customElements.define('prologue-element', PrologueElement);
