import { connect } from 'react-redux';
import WatchedMoviesView from '../components/main/WatchedMoviesView';
import { showSelectedPage } from '../redux/actions/moviesActions';
import {
  getMoviesBySelectedPage,
  getTotalPagesNumber,
  loadMoviesByMoviesArrayAndPageNumber
} from "../redux/selectors/paginationSelectors";
import { getWatchedMovies } from '../redux/selectors/moviesSelectors';
import store from '../redux/store';

const mapState = (state) => ({
  watchedMovies: getMoviesBySelectedPage(state),
  totalPages: getTotalPagesNumber((getWatchedMovies(state)).length),
});

const mapDispatch = (dispatch) => ({
  loadSelectedPage: page => dispatch(
    showSelectedPage(
      loadMoviesByMoviesArrayAndPageNumber(
        getWatchedMovies(store.getState()), page)
    )
  )
});

export default connect(mapState, mapDispatch)(WatchedMoviesView);