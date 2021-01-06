import { connect } from "react-redux";
import MoviesToWatchView from "../components/main/MoviesToWatchView";
import { showSelectedPage } from "../redux/actions/moviesActions";
import {
  getMoviesBySelectedPage,
  getTotalPagesNumber,
  loadMoviesByMoviesArrayAndPageNumber,
  getToWatchPageIndex
} from "../redux/selectors/paginationSelectors";
import { getMoviesToWatch } from '../redux/selectors/moviesSelectors';
import store from "../redux/store";

const mapState = state => ({
  moviesToWatch: getMoviesBySelectedPage(state),
  totalPages: getTotalPagesNumber((getMoviesToWatch(state)).length),
  pageIndex: getToWatchPageIndex(state)
});

const mapDispatch = (dispatch) => ({
  loadSelectedPage: () => dispatch(
    showSelectedPage(
      loadMoviesByMoviesArrayAndPageNumber(
        getMoviesToWatch(store.getState()), getToWatchPageIndex(store.getState()) + 1)
    )
  )
});

export default connect(mapState, mapDispatch)(MoviesToWatchView);