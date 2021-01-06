import { connect } from "react-redux";
import MovieView from "../components/movie/MovieView";
import { 
  addToWatch, 
  addToWatched, 
  removeFromMoviesToWatch, 
  removeFromWatchedMovies,
} from "../redux/actions/moviesActions";

const mapDispatch = (dispatch) => ({
  addToWatch: movie => dispatch(addToWatch(movie)),
  removeFromMoviesToWatch: (movie) => dispatch(removeFromMoviesToWatch(movie)),
  addToWatched: (movie) => dispatch(addToWatched(movie)),
  removeFromWatchedMovies: (movie) => dispatch(removeFromWatchedMovies(movie)),
});

export default connect(null, mapDispatch)(MovieView);