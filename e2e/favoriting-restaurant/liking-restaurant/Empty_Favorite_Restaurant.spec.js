const MAX_TIMEOUT_WAITING_DURATION = 6;
const MIN_TIMEOUT_WAITING_DURATION = 3;

Feature('Showing Empty Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('should showing empty favorite restaurant ', ({ I }) => {
  I.waitForElement('.message-favorite-restaurant-empty', MIN_TIMEOUT_WAITING_DURATION || MAX_TIMEOUT_WAITING_DURATION);
  I.see('Belum ada daftar restaurant favorite!', '.message-favorite-restaurant-empty');
});
