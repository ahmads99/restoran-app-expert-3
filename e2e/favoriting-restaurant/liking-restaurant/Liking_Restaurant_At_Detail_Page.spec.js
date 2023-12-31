const assert = require('assert');

const MAX_TIMEOUT_WAITING_DURATION = 6;
const MIN_TIMEOUT_WAITING_DURATION = 3;

Feature('Liking Restaurant At Modal Component');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.message-favorite-restaurant-empty', MIN_TIMEOUT_WAITING_DURATION || MAX_TIMEOUT_WAITING_DURATION);
  I.see('Belum ada daftar restaurant favorite!', '.message-favorite-restaurant-empty');
});

// liking restaurant via detail page (through button "detail restaurant" at card menu)
Scenario('first way to be able liking restaurant via detail page', async ({ I }) => {
  I.amOnPage('/');
  I.wait(MIN_TIMEOUT_WAITING_DURATION || MAX_TIMEOUT_WAITING_DURATION);
  I.seeElement(locate('.card-overlay').first());

  const buttonInfo = locate('.button-info').first();
  I.seeElement(buttonInfo);
  I.click(buttonInfo); // showing card menu

  I.seeElement('.wrapper-card-menu');

  I.seeElement(locate('.card-menu').first());

  const buttonDetail = locate('.button-detail-restaurant').first();
  I.seeElement(buttonDetail);
  I.click(buttonDetail);

  I.wait(MIN_TIMEOUT_WAITING_DURATION || MAX_TIMEOUT_WAITING_DURATION);
  I.seeElement('.article-restaurant');
  I.seeElement('.article-restaurant > h2');
  const DetailRestaurantTitle = await I.grabTextFrom('.article-restaurant > h2');
  I.seeElement('.button-like-detail');
  I.click('.button-like-detail');

  I.amOnPage('/#/favorite');
  I.seeElement(locate('.card-overlay').first());
  I.seeElement('.card-content');
  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(DetailRestaurantTitle, favoriteRestaurantTitle);
});

// liking restaurant via detail page (through button "preview" at card menu)
Scenario('second way to be able liking restaurant via detail page', async ({ I }) => {
  I.amOnPage('/');
  I.wait(MIN_TIMEOUT_WAITING_DURATION || MAX_TIMEOUT_WAITING_DURATION);
  I.seeElement(locate('.card-overlay').first()); // overlay card

  const buttonInfo = locate('.button-info').first();
  I.seeElement(buttonInfo);
  I.click(buttonInfo); // showing card menu

  I.seeElement('.wrapper-card-menu');

  I.seeElement(locate('.card-menu').first());

  const buttonPreview = locate('.button-preview').first();
  I.seeElement(buttonPreview);
  I.click(buttonPreview);

  I.wait(MIN_TIMEOUT_WAITING_DURATION || MAX_TIMEOUT_WAITING_DURATION);
  I.seeElement('.modal-parent');
  I.seeElement('.modal-body');
  I.seeElement('.button-detail-restaurant-modal');
  I.click('.button-detail-restaurant-modal');

  I.wait(MIN_TIMEOUT_WAITING_DURATION || MAX_TIMEOUT_WAITING_DURATION);
  I.seeElement('.article-restaurant');
  I.seeElement('.article-restaurant > h2');
  const DetailRestaurantTitle = await I.grabTextFrom('.article-restaurant > h2');
  I.seeElement('.button-like-detail');
  I.click('.button-like-detail');

  I.amOnPage('/#/favorite');
  I.seeElement(locate('.card-overlay').first());
  I.seeElement('.card-content');
  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(DetailRestaurantTitle, favoriteRestaurantTitle);
});

// liking restaurant via detail page (through click the card/card-overlay component)
Scenario('third way to be able liking restaurant via detail page', async ({ I }) => {
  I.amOnPage('/');
  I.wait(MIN_TIMEOUT_WAITING_DURATION || MAX_TIMEOUT_WAITING_DURATION);
  I.seeElement(locate('.card-overlay').first());
  I.click(locate('.card-overlay').first()); // click overlay card trigger showing modal popup

  I.wait(MIN_TIMEOUT_WAITING_DURATION || MAX_TIMEOUT_WAITING_DURATION);
  I.seeElement('.modal-parent');
  I.seeElement('.modal-body');
  I.seeElement('.button-detail-restaurant-modal');
  I.click('.button-detail-restaurant-modal');

  I.wait(MIN_TIMEOUT_WAITING_DURATION || MAX_TIMEOUT_WAITING_DURATION);
  I.seeElement('.article-restaurant');
  I.seeElement('.article-restaurant > h2');
  const DetailRestaurantTitle = await I.grabTextFrom('.article-restaurant > h2');
  I.seeElement('.button-like-detail');
  I.click('.button-like-detail');

  I.amOnPage('/#/favorite');
  I.seeElement(locate('.overlay').first()); // overlay card
  I.seeElement('.card-content');
  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(DetailRestaurantTitle, favoriteRestaurantTitle);
});
