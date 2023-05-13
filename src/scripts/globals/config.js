const CONFIG = {
    KEY: 'facc9398a1973d590db59729cf20c800',
    BASE_URL: 'https://api.themoviedb.org/3/',
    BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
    DEFAULT_LANGUAGE: 'en-us',
    // CACHE_NAME: 'MovieCatalogue-V1',
    CACHE_NAME: new Date().toISOString().slice(0, 10),
};

export default CONFIG;