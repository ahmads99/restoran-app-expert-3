const CONFIG = {
  DURATION_ANIMATION: 550,
  // sw/cache config
  API_BASE_URL: 'https://restaurant-api.dicoding.dev',
  PRECACHE_PREFIX: 'restaurant-mads',
  PRECACHE_SUFFIX: 'v1',
  PRECACHE_NAME: 'precache',
  API_CACHE_NAME: 'api-cache',
  IMAGE_CACHE_NAME: 'img-cache',
  EXPIRE_DURATION: 60 * 60 * 24 * 7,
  // IDB config
  DATABASE_NAME: 'restaurant-mads-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
