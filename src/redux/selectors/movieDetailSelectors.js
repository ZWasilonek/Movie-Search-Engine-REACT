export const getMovieDetails = state => {
  const movie = state.moviesState.movieDetails;
  if (movie !== undefined && movie !== null) {
    validateMovie(movie);
  }
  return movie;
};

function validateMovie(movie) {
  const NOT_AVAILABLE = "N/A";
  const { Poster } = movie;
  if (Poster === NOT_AVAILABLE) {
    movie.Poster = "https://www.genesisglobalschool.edu.in/wp-content/uploads/2016/09/noimage.jpg";
  }
  movie.rating = 0;
  Object.entries(movie).forEach(([prop, val]) => {
    if (prop === "imdbRating" && val !== NOT_AVAILABLE) {
      movie.rating = getFixedRating(val);
    }
    if (val === NOT_AVAILABLE) {
      movie[prop] = "NOT AVAILABLE";
    }
  });
  return movie;
}

function getFixedRating(originalRating) {
  const roundHalfRating = Math.round((Number(originalRating) / 2) * 2) / 2;
  return roundHalfRating;
}

export const getSearchTitle = state => state.moviesState.movieTitle;