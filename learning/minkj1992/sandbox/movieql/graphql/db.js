import axios from 'axios';
// proxy
const MOVIE_API_URL = 'https://yts-proxy.now.sh/';
const LIST_MOVIES_URL = `${MOVIE_API_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${MOVIE_API_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${MOVIE_API_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getMovie = async (id) => {
  console.log(id);
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  console.log(movie);
  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
