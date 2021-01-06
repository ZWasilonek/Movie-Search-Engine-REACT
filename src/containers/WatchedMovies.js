import { connect } from 'react-redux';
import WatchedMoviesView from '../components/main/WatchedMoviesView';
import { showSelectedPage } from '../redux/actions/moviesActions';
import {
  getMoviesBySelectedPage,
  getTotalPagesNumber,
  getWatchedPageIndex,
  loadMoviesByMoviesArrayAndPageNumber
} from "../redux/selectors/paginationSelectors";
import { getWatchedMovies } from '../redux/selectors/moviesSelectors';
import store from '../redux/store';

const mapState = (state) => ({
  watchedMovies: getMoviesBySelectedPage(state),
  totalPages: getTotalPagesNumber((getWatchedMovies(state)).length),
  pageIndex: getWatchedPageIndex(state)
});

const mapDispatch = (dispatch) => ({
  loadSelectedPage: () => dispatch(
    showSelectedPage(
      loadMoviesByMoviesArrayAndPageNumber(
        getWatchedMovies(store.getState()), getWatchedPageIndex(store.getState()) + 1)
    )
  )
});

export default connect(mapState, mapDispatch)(WatchedMoviesView);