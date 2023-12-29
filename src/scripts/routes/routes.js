import homePage from '../view/pages/home';
import favoritePage from '../view/pages/favorite';
import detailPage from '../view/pages/detail';

const routes = {
  '/': homePage,
  '/home': homePage,
  '/favorite': favoritePage,
  '/detail/:id': detailPage,
};

export default routes;
