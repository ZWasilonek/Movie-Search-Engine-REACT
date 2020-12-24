import { connect } from "react-redux";
import MoviesListView from "../components/movieList/MoviesListView";
import { isRequestLoading, getFetchingError } from "../redux/selectors/fetchingSelectors";

const mapState = state => ({
  loading: isRequestLoading(state),
  error: getFetchingError(state),
});

export default connect(mapState)(MoviesListView);