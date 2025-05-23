const API_KEY = '790295b9'; 
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query, page = 1, type = '') => {
  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}${type ? `&type=${type}` : ''}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === 'False') {
      return { movies: [], totalResults: 0, error: data.Error };
    }

    return { movies: data.Search, totalResults: parseInt(data.totalResults), error: null };
  } catch (err) {
    return { movies: [], totalResults: 0, error: 'API error' };
  }
};

export const fetchMovieById = async (id) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  return res.json();
};