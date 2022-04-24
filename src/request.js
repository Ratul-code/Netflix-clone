const API_KEY = "a94e8b9b7bff5287f1ddf24defeb54d7";

export const request = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en`,
  fetchNetflixOriginal: `/discover/movie/?api_key=${API_KEY}&language=en&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
