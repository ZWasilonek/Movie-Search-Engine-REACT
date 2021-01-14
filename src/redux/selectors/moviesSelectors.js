export const getMoviesToWatch = state => state.moviesState.moviesToWatch;

export const getWatchedMovies = state => state.moviesState.watchedMovies;

//Returns all movies by provided title
export const getAllFetchedMovies = state => {
  const movies = state.moviesState.movies;
  movies.map(movie => validateNotAvailables(movie));
  const taggedMovies = checkListAffiliation(movies, state);
  return taggedMovies;
};

function validateNotAvailables(movie) {
  const NOT_AVAILABLE = "N/A";
  const { Poster } = movie;
  if (Poster === NOT_AVAILABLE) {
    movie.Poster = "https://www.genesisglobalschool.edu.in/wp-content/uploads/2016/09/noimage.jpg";
  }
  Object.entries(movie).forEach(([prop, val]) => {
    if (val === NOT_AVAILABLE) {
      movie[prop] = "NOT AVAILABLE";
    }
  });
  return movie;
}

function checkListAffiliation(movies, state) {
  const moviesToWatch = getMoviesToWatch(state);
  const watchedMovies = getWatchedMovies(state);

  return movies.map(movie => {
    if (moviesToWatch.length !== 0) {
      moviesToWatch.find(movieToWatch => 
        movieToWatch.imdbID === movie.imdbID ?
        movie.wantsToWatch = true : 
        movie.wantsToWatch = false);
    } else {
      movie.wantsToWatch = false;
    }

    if (watchedMovies.length !== 0) {
      watchedMovies.find(watchedMovie => 
        watchedMovie.imdbID === movie.imdbID ?
        movie.watched = true : 
        movie.watched = false);
    } else {
      movie.watched = false;
    }

    if (typeof movie.rating === "undefined") {
      movie.rating = 0.0;
    }
    return movie;
  });
};