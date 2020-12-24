import { connect } from "react-redux";
import MoviesToWatchView from "../components/main/MoviesToWatchView";
import { showSelectedPage } from "../redux/actions/moviesActions";
import {
  getMoviesBySelectedPage,
  getTotalPagesNumber,
  loadMoviesByMoviesArrayAndPageNumber
} from "../redux/selectors/paginationSelectors";
import { getMoviesToWatch } from '../redux/selectors/moviesSelectors';
import store from "../redux/store";

const mapState = state => ({
  moviesToWatch: getMoviesBySelectedPage(state),
  totalPages: getTotalPagesNumber((getMoviesToWatch(state)).length),
});

const mapDispatch = (dispatch) => ({
  loadSelectedPage: page => dispatch(
    showSelectedPage(
      loadMoviesByMoviesArrayAndPageNumber(
        getMoviesToWatch(store.getState()), page)
    )
  )
});

export default connect(mapState, mapDispatch)(MoviesToWatchView);