export const getAmountOfResults = state => state.moviesState.totalResults;

export const getTotalPagesNumber = amountOfMovies => {
  return Math.ceil(amountOfMovies / 10);
};

export const loadMoviesByMoviesArrayAndPageNumber = (movies, page) => {
  if (page === undefined) page = 1;
  let moviesByPageNumber = [];

  const enoughForFullPage = movies.length >= page * 10;
  const indexOfFirstMovie = page * 10 - 10;

  if (enoughForFullPage) {
    const indexOfLastMovie = page * 10;
    moviesByPageNumber = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  } else {
    moviesByPageNumber = movies.slice(indexOfFirstMovie)
  }
  return moviesByPageNumber;
};

export const getMoviesBySelectedPage = state => state.moviesState.moviesByPageNumber;